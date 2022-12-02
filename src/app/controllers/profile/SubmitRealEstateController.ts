import { Helpers, ICodename } from "../../../commons/utils";
import { signinRedirect } from "../../../config";
import { Constants, Screens, Strings } from "../../../constants";
import { RealEstateType } from "../../../constants/Enums";
import { GlobalState } from "../../../stores/GlobalState";
import ProfileModel from "../../models/ProfileModel";
import { ApartmentService, UserService } from "../../services";
import ProfileService from "../../services/ProfileService";
import { BaseController } from "../base";

class SubmitRealEstateController extends BaseController<ProfileModel, ProfileService> {

    constructor(props: any) {
        super(props, ProfileModel, ProfileService);
    }
    async onStarted() {
        this.showLoading();
        let { id } = this.getUrlParams(["id"]);
        console.log("id", id)
        if (id) {
            await this.getDetail(id);
        }
        await this.getCategory();
        this.getCityList();

        if (this.model.address?.provinceCode) {
            await this.getDistrictsByCityCode(this.model.address?.provinceCode);
        }
        if (this.model.address?.districtCode) {
            await this.getWardByDistrictCode(this.model.address?.districtCode);
        }

        this.hideLoading();

    }

    getDetail = async (id: string) => {
        try {
            this.showLoading();
            const data = await this.service.getDetail(id);

            this.setModel({
                id: data._id,
                title: { value: data.title },
                description: data.description,
                category: { value: data.category },
                area: { value: data.area },
                price: { value: data.price },
                attributes: { value: data.attributes },
                images: data.images,
                type: data.type,
                address: data.address,
                isHighLight: data.isHighLight,
                renderKey: Date.now()
            })

            this.hideLoading();
        } catch (error) {
            this.hideLoading();
            // this.handleException(error);
        }
    }

    getCityList = async () => {
        try {
            // this.showPageLoading()
            const provinceResult = await this.service.getProvince();
            const provinceList: ICodename[] = [];
            provinceResult?.forEach((city: any) => {
                provinceList.push({
                    id: city._id,
                    code: city.Code,
                    group: "province",
                    name: city.Name,
                });
            });
            // this.hidePageLoading();
            this.setModel({
                provinceList
            });
        } catch (error) {
            // this.hidePageLoading();

        }
    }

    getDistrictsByCityCode = async (value: string) => {
        try {
            // this.showPageLoading();
            const districtResult = await this.service.getDistrictsByCityCode(value);
            const districtList: ICodename[] = [];
            districtResult?.forEach((province: any) => {
                districtList.push({
                    id: province._id,
                    code: province.Code,
                    group: "district",
                    name: province.Name,
                });
            });
            // this.hidePageLoading();
            this.setModel({
                districtList,
            });
        } catch (error) {
            // this.hidePageLoading();

        }
    }

    getWardByDistrictCode = async (value: string) => {
        try {
            // this.showPageLoading()
            const wardResult = await this.service.getWardByDistrictCode(value);
            const wardList: ICodename[] = [];
            wardResult?.forEach((ward: any) => {
                wardList.push({
                    id: ward._id,
                    code: ward.Code,
                    group: "ward",
                    name: ward.Name,
                });
            });
            // this.hidePageLoading();
            this.setModel({
                wardList
            });
        } catch (error) {
            // this.hidePageLoading();

        }
    }

    getCategory = async () => {
        try {
            const result = await this.service.getAllCategory();
            let categoryList: any = [];
            result?.map((el: any, i: number) => {
                categoryList.push({
                    code: el._id,
                    name: el.name,
                    group: el.type
                })
            })
            this.setModel({
                categoryList
            })
        } catch (error) {

            await Helpers.showAlert(Strings.Message.ERROR, "error");
            // this.hidePageLoading();
        }
    }

    isCheckValidate() {
        let checked = true;
        if (Helpers.isNullOrEmpty(this.model.category?.value)) {
            this.setModel({
                category: { error: Strings.Validation.REQUIRED }
            })
            checked = false
        }
        if (Helpers.isNullOrEmpty(this.model.title?.value)) {
            this.setModel({
                title: { error: Strings.Validation.REQUIRED }
            })
            checked = false
        }

        return checked;
    }

    onCreateOrUpdateRealEstate = async () => {
        try {
            if (!this.isCheckValidate()) {
                return;
            }
            this.showLoading();
            let provinceName = this.model.provinceList?.find(el => el.code === this.model.address?.provinceCode)?.name || ""
            let districtName = this.model.districtList?.find(el => el.code === this.model.address?.districtCode)?.name || ""
            let wardName = this.model.wardList?.find(el => el.code === this.model.address?.wardCode)?.name || ""

            // let images: any[] = [];
            // this.model.images?.map((image) => {
            //     images.push(image?.photo?.url)
            // })

            let data: any = {
                category: this.model.category?.value,
                categoryType: this.model.categoryList?.find(c => c.code === this.model.category?.value)?.group,
                title: this.model.title?.value,
                price: this.model.price?.value,
                area: Number(this.model.area?.value),
                attributes: this.model.attributes?.value,
                description: this.model.description,
                images: this.model.images,
                address: {
                    provinceName,
                    districtName,
                    wardName,
                    provinceCode: this.model.address?.provinceCode,
                    districtCode: this.model.address?.districtCode,
                    wardCode: this.model.address?.wardCode,
                    addressLine: this.model.address?.addressLine || ""
                },
                type: RealEstateType.Create,
            }
            console.log("data", data);
            let result: any;
            if (Helpers.isNullOrEmpty(this.model.id)) {
                result = await this.service.create(data);
                Helpers.showAlert(Strings.Message.CREATE_SUCCESS, 'success')
            } else {
                data.id = this.model.id;
                result = await this.service.update(data);
                Helpers.showAlert(Strings.Message.UPDATE_SUCCESS_WAITING_APPROVE, 'success')
            }
            this.history.push(Screens.FAVORITE)
            this.hideLoading();
        } catch (error) {
            this.hideLoading();
            // this.handleException(error);
        }
    }

    handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            if (e.target.files) {
                this.showLoading();
                var photos: any[] = [];
                photos.push(...(this.model.images || []));
                this.setModel({ isLoadingImages: true })
                for (let i = 0; i < e.target.files.length; i++) {
                    if ((e.target.files[i].size / 1048576) > 2) {
                        Helpers.showAlert("Hình " + e.target.files[i].name + " đã vượt quá 2mb. vui lòng chọn hình khác!");
                        this.setModel({
                            isLoadingImages: false,
                        })
                        e.target.value = '';
                        this.hideLoading();
                        return
                    }
                    if (e.target.files[i].type !== "image/png" && e.target.files[i].type !== "image/gif" && e.target.files[i].type !== "image/jpeg") {
                        Helpers.showAlert("File " + e.target.files[i].name + " Không đúng định dạng hình ảnh cho phép!");
                        this.setModel({
                            isLoadingImages: false,
                        })
                        e.target.value = '';
                        this.hideLoading();
                        return
                    } else {
                        console.time("res")
                        const fileId: any = await this.service.uploadImage(e.target.files[i]);
                        photos.push(
                            fileId.url
                        );
                        console.timeEnd("res")
                    }
                }

                this.setModel({
                    images: photos,
                })
                this.hideLoading();
            }
        } catch (error) {
            this.hideLoading();
            console.log("error", error)
            Helpers.showAlert(`${error}`);
            this.setModel({
                isLoadingImages: false,
            })
        }
    }

    handleDeletePhoto = (index: number, id?: string) => {
        this.model.images?.map((item, i) => {
            if (i === index) {

            }
        })

        this.setModel({
            images: this.model.images?.filter((item, i) => i !== index),
        })
    }

}
export default SubmitRealEstateController;