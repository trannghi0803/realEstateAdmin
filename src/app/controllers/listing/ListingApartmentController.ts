import { types } from 'mobx-state-tree';
import { Helpers, IOptionSelect, IProject, IResult } from "../../../commons/utils";
import { Constants } from '../../../constants';
import { CategoryType, IsHighLight } from '../../../constants/Enums';
import { GlobalState } from "../../../stores/GlobalState";
import ListingModel from "../../models/ListingModel";
import { ApartmentService, HomeService, ProjectService } from "../../services";
import ListingService from "../../services/ListingService";
import { BaseController } from "../base";

class ListingApartmentController extends BaseController<ListingModel, ListingService> {
    ref: any;
    constructor(props: any) {
        super(props, ListingModel, ListingService);
    }
    onStarted() {
        try {
            this.getDetail()
        } catch (error) {

        }
    }
    onUpdate() {
        if (window.location.search !== this.model.searchUrl) {
            this.setModel({ searchUrl: window.location.search })
            this.getDetail();
        }
    }
    getDetail = async () => {
        const { province } = this.getUrlParams(["province"]);
        const { target } = this.getUrlParams(["target"]);
        const { types } = this.getUrlParams(["types"]);
        const { status } = this.getUrlParams(["status"]);
        const { line } = this.getUrlParams(["line"]);
        const { minPrice } = this.getUrlParams(["minPrice"]);
        const { maxPrice } = this.getUrlParams(["maxPrice"]);
        const { minArea } = this.getUrlParams(["minArea"]);
        const { maxArea } = this.getUrlParams(["maxArea"]);
        const { district } = this.getUrlParams(["district"]);

        this.setModel({
            province: { value: province },
            status: { value: status },
            line: { value: line },
            types: { value: types },
            target: { value: target },
            minPrice: parseInt(minPrice),
            maxPrice: parseInt(maxPrice),
            minArea: parseInt(minArea),
            maxArea: parseInt(maxArea),
            districtId: district,
            // floorSearch: {value: floorSearch},
            // bedroomSearch: {value: bedroomSearch},
            // bathroomSearch: {value: bathroomSearch},
            // maxPriceSearch: {value: maxPriceSearch}, 
            // minPriceSearch: {value: minPriceSearch},
            // expand: expand
        })
        this.getApartment();
    }


    getApartment = async () => {
        try {
            this.showLoading();
            let data: any
            console.log("showLoading", this.model.types?.value, Number(this.model.types?.value))
            switch (`${this.model.types?.value}`) {
                case `${CategoryType.HIGH_LIGHT}`:
                    data = await this.getPaged(undefined, IsHighLight.True);
                    console.log("HIGH_LIGHT")
                    break;
                case `${CategoryType.APARTMENT_HOUSE}`:
                    data = await this.getPaged(Constants.APARTMENT_HOUSE);
                    console.log("APARTMENT_HOUSE")
                    break;
                case `${CategoryType.APARTMENT_URBAN_AREA}`:
                    data = await this.getPaged(Constants.APARTMENT_URBAN_AREA);
                    console.log("APARTMENT_URBAN_AREA")
                    break;
                case `${CategoryType.REAL_ESTATE_LAND}`:
                    data = await this.getPaged(Constants.REAL_ESTATE_LAND);
                    console.log("REAL_ESTATE_LAND")
                    break;
                case `${CategoryType.VILLAS}`:
                    data = await this.getPaged(Constants.VILLAS);
                    console.log("VILLAS")
                    break;
                default: data = await this.getPaged()
                    console.log("default")
                    break;
            }

            console.log("data", data)

            this.setModel({
                listApartment: data?.data,
                showModelSearch: false,
                showApartment: true,
                currentPage: data.currentPage,
                totalPages: data?.totalPages,
                totalCount: data?.totalCount,
            })
            this.hideLoading();
        } catch (error) {
            this.hideLoading();
        }
    }

    getPaged = async (category?: string, isHighLight?: number) => {
        let data: any = {
            pageNumber: this.model.currentPage || 1,
            pageSize: Constants.ROW_PER_PAGE,
            category: category || undefined,
            isHighLight: isHighLight || undefined,
            minArea: this.model.minArea || undefined,
            maxArea: this.model.maxArea || undefined,
            minPrice: this.model.minPrice || undefined,
            maxPrice: this.model.maxPrice || undefined,
            categoryType: this.model.target?.value || undefined,
            provinceName: GlobalState.listProvinceList?.find((el: any) => el.value === this.model.province?.value)?.label || undefined,
        }
        const result = await new ApartmentService().getPaged(data);

        return {
            data: result?.result, totalCount: result?.totalCount, currentPage: result?.pageNumber, totalPages: result?.totalPage
        }

    }

    // getByHighLight = async () => {
    //     const result = await new ApartmentService().getByHighLight(IsHighLight.True, Constants.ROW_PER_PAGE);
    //     let listApartment: any = [];
    //     result?.data?.map((el: any, i: number) => {
    //         listApartment.push({ ...el, id: el._id })
    //     })
    //     return {
    //         data: listApartment, totalCount: result.totalCount, totalPage: result.totalPage
    //     }
    // }

    // getListApartmentHouse = async (category: string) => {
    //     const result = await new ApartmentService().getByCategory(category, Constants.ROW_PER_PAGE);
    //     let data: any = [];
    //     result.data?.map((el: any, i: number) => {
    //         data.push({ ...el, id: el._id })
    //     })
    //     return {
    //         data, totalCount: result.totalCount, totalPage: result.totalPage
    //     }
    // }

    removeAttributes(type: number) {
        switch (type) {
            case 0: // target
                this.setModel({
                    target: undefined
                })
                GlobalState.setFilter({
                    ...GlobalState.filterObj, target: null
                });
                break
            // case 1:
            //     this.setModel({
            //         projectIdSearch: undefined
            //     })
            //     GlobalState.setFilter({
            //         ...GlobalState.filterObj, projectIdSearch: null
            //     });
            //     break
            case 2:
                this.setModel({
                    province: undefined,
                    districtId: undefined,
                });
                GlobalState.setFilter({
                    ...GlobalState.filterObj, province: null, district: null
                });
                break
            case 3: //types
                this.setModel({
                    types: undefined
                })
                GlobalState.setFilter({
                    ...GlobalState.filterObj, types: null
                });
                break
            case 4: //status
                this.setModel({
                    status: undefined
                });
                GlobalState.setFilter({
                    ...GlobalState.filterObj, status: null
                });
                break
            case 5: //price
                this.setModel({
                    minPrice: undefined,
                    maxPrice: undefined
                })
                GlobalState.setFilter({
                    ...GlobalState.filterObj, minPrice: undefined, maxPrice: undefined
                })
                break
            case 6: //price
                this.setModel({
                    minArea: undefined,
                    maxArea: undefined
                })
                GlobalState.setFilter({
                    ...GlobalState.filterObj, minArea: undefined, maxArea: undefined
                })
                break
        }
        this.getApartment();
    }

    handleChangePagination = async (event: React.ChangeEvent<unknown>, pageNumeber: number) => {
        this.setModel({
            currentPage: pageNumeber
        })
        this.getApartment();
        const scrollToEl = document.getElementById('frameItem');
        if ((window.innerHeight - scrollToEl!.getBoundingClientRect().top) < 300) {
            { window.scrollTo({ top: 400, behavior: 'smooth' }) }
        } else {
            { window.scrollTo({ top: 0, behavior: 'smooth' }) }
        }
    }
}
export default ListingApartmentController;