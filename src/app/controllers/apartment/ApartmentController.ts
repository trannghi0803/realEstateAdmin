import { Constants, Resources, Screens, Strings } from "../../../constants";
import { Helpers, IApartment, IResult, IValueContent } from "../../../commons/utils";
import { ApartmentModel } from "../../models";
import { ApartmentService } from "../../services";
import { BaseController } from "../base";
import { MessageApi } from "../../../constants/Enums";

class ApartmentController extends BaseController<ApartmentModel, ApartmentService> {
    constructor(props: any) {
        super(props, ApartmentModel, ApartmentService);
    }
    objFavourite: any;
    async onStarted() {
        try {
            this.showLoading()
            const { id } = this.getUrlParams(["id"]);
            if (!id) {
                this.history.push(Screens.HOME);
                return
            } else {
                let apartment: any = {};
                let apartments: any = [];
                let dataDetail = await this.getDetail(id)

                window.addEventListener("scroll", () => { this.showProperty(); this.setEventButtonfloating() });
                const img = apartment.images || [];
                const listImg: Array<any> = [];
                img.forEach((element: any) => {
                    listImg.push({
                        src: element || Resources.Images.DEFAULT
                    })
                });
                this.setModel({
                    apartment: dataDetail?.apartment,
                    apartments: dataDetail?.apartments,
                    id: id,
                    listImg
                });
                this.setEventButtonfloating();
            }
            this.hideLoading()
        } catch (error) {
            this.hideLoading()
        }

    }

    scrollToBottom = (id: string) => {
        const headerHeight = 125; /* PUT HEADER HEIGHT HERE */
        const scrollToEl = document.getElementById(id);
        if (scrollToEl) {
            const topOfElement = window.pageYOffset + scrollToEl!.getBoundingClientRect().top - headerHeight;
            window.scroll({ top: topOfElement, behavior: "smooth" });
        }
    }

    getDetail = async (id?: any) => {
        try {
            this.setModel({ id })
            this.showLoading();
            const apartment = await this.service.getDetail(id || this.model.id || "") || {};
            const apartments = await this.getListApartment();
            
            // this.setModel({
            //     apartment: apartment,
            //     renderKey: Date.now()
            //     // apartments: apartments.result.items,
            // });
            this.history.replace({ pathname: Screens.APARTMENT, search: `?&id=${id}` })
            this.hideLoading();
            window.scrollTo(0, 0)
            return {apartment, apartments}
        } catch (error) {
            this.hideLoading();
        }
    }

    setEventButtonfloating = () => {
        const buttonPlaceholder = document.getElementById('buttonOnline');
        const header = document.getElementById('header');
        if (buttonPlaceholder) {
            if ((buttonPlaceholder?.getBoundingClientRect().top - (header?.getBoundingClientRect().height || 70)) < 0) {
                this.setModel({
                    showButtonBuyHeader: true
                })
            } else {
                if (buttonPlaceholder?.getBoundingClientRect().top > window.screen.height) {
                    this.setModel({
                        showButtonBuyHeader: true
                    })
                } else {
                    this.setModel({
                        showButtonBuyHeader: false
                    })
                }

            }
        }
    }

    showProperty = () => {
        const scrollToEl1 = (document.getElementById('general')?.offsetTop || 8000) - 200;
        const scrollToEl2 = (document.getElementById('utilities')?.offsetTop || 8000) - 200;
        // const scrollToEl3 = (document.getElementById('premises')?.offsetTop || 8000) - 200;
        // const scrollToEl4 = (document.getElementById('utilities')?.offsetTop || 8000) - 200;
        // const scrollToEl5 = (document.getElementById('finance')?.offsetTop || 8000) - 200;
        if (document.documentElement.scrollTop < scrollToEl1) {
            this.setModel({
                menuIndex: undefined
            })
        }
        if (document.documentElement.scrollTop >= scrollToEl1 && document.documentElement.scrollTop < scrollToEl2) {
            this.setModel({
                menuIndex: 0
            })
        }
        // if (document.documentElement.scrollTop >= scrollToEl2 && document.documentElement.scrollTop < scrollToEl3) {
        //     this.setModel({
        //         menuIndex: 1
        //     })
        // }
        // if (document.documentElement.scrollTop >= scrollToEl3 && document.documentElement.scrollTop < scrollToEl4) {
        //     this.setModel({
        //         menuIndex: 2
        //     })
        // }
        // if (document.documentElement.scrollTop >= scrollToEl4 && document.documentElement.scrollTop < scrollToEl5) {
        //     this.setModel({
        //         menuIndex: 3
        //     })
        // }
        // if (document.documentElement.scrollTop >= scrollToEl5) {
        //     this.setModel({
        //         menuIndex: 4
        //     })
        // }
        if (window.pageYOffset > 300) {
            this.setModel({
                showProperty: true
            })
        } else {
            this.setModel({
                showProperty: false
            })
        }
    }

    getListApartment = async () => {
        const result = await this.service.getAll();
        let data: any = [];
        result?.map((el: any, i: number) => {
            data.push({ ...el, id: el._id })
        })
        return data
    }

    // getValue = (key: string, displayType: number) => {
    //     const apartment: any = this.model.apartment || {} as any;
    //     switch (key) {
    //         case Constants.VALUE_KEY.TITLE:
    //             return Helpers.getAttributes(apartment.attributes, displayType).title ? Helpers.getAttributes(apartment.attributes, displayType).title : Helpers.getAttributes(apartment.attributes, displayType).titleContentCode;
    //         case Constants.VALUE_KEY.ATTR_VALUE:
    //             const items = Helpers.getSubAttributes(
    //                 Helpers.getAttributes(apartment.attributes, displayType).apartmentAttributes, displayType
    //             )
    //             return items.attributeValue ? items.attributeValue : items.attributeValueContents?.find((el: IValueContent) => el.language === Constants.Language.VN)?.value;
    //         default:
    //             break;
    //     }
    // }

    onsubmitAdvisory = async () => {
        let isValid = true;
        if (!this.model.fullName?.value) {
            this.setModel({
                fullName: { error: Strings.Validation.REQUIRED }
            })
            isValid = false
        }
        if (!this.model.email?.value) {
            this.setModel({
                email: { error: Strings.Validation.REQUIRED }
            })
            isValid = false
        } else if (!Helpers.checkValidateEmail(this.model.email?.value)) {
            this.setModel({
                email: { error: Strings.Validation.EMAIL_ADDRESS }
            })
            isValid = false;
        }
        if (!this.model.phoneNumber?.value) {
            this.setModel({
                phoneNumber: { error: Strings.Validation.REQUIRED }
            })
            isValid = false
        } else if (!Helpers.checkValidatePhone(this.model.phoneNumber?.value || '')) {
            this.setModel({
                phoneNumber: { error: Strings.Validation.PHONE_NUMBER }
            })
            isValid = false;
        }
        if (isValid) {
            const data = {
                type: 1,
                firstName: this.model.fullName?.value,
                phoneNumber: this.model.phoneNumber?.value,
                email: this.model.email?.value,
                projectId: this.model.apartment?.projectId,
                apartmentId: this.model.apartment?.id,
                description: this.model.description?.value,
            };
        }
    }


}
export default ApartmentController;