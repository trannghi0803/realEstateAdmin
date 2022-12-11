import { CategoryTarget, CategoryType } from './../../../constants/Enums';
import { Constants } from "../../../constants";
import { GlobalState } from "../../../stores/GlobalState";
import CommerceModel from "../../models/CommerceModel";
import CommerceService from "../../services/CommerceService";
import { BaseController } from "../base";
import { DisplayArea, IsHighLight } from "../../../constants/Enums";
import { ApartmentService } from "../../services";

class CommerceRentController extends BaseController<CommerceModel, CommerceService> {
    ref: any;
    constructor(props: any) {
        super(props, CommerceModel, CommerceService);
    }

    async onStarted() {
        try {
            this.showLoading();
            // const params = new URLSearchParams;
            // params.append('Orderby', 'apartment.isHighlight DESC, apartment.constructionStatus ASC')
            // params.append('PageSize', '15') ;
            // params.append('IsHighlight', '1')
            const listRentOffice: any = await this.getPaged(Constants.OFFICE);;
            const listRentHouse: any = await this.getPaged(Constants.HOUSE);
            const listRentUrbanArea: any = await this.getPaged(Constants.URBAN_AREA);
            const listRentStore: any = await this.getPaged(Constants.STORE);
            Promise.all([listRentOffice, listRentHouse, listRentUrbanArea, listRentStore]).then((data) => {
                this.setModel({
                    listRentOffice,
                    listRentHouse,
                    listRentUrbanArea,
                    listRentStore
                });
            })
            this.hideLoading()
        } catch (error) {
            this.hideLoading()
        }
    }

    getPaged = async (category?: string, isHighLight?: number) => {
        let data: any = {
            category: category || undefined,
            categoryType: CategoryTarget.Rent,
        }
        const result = await new ApartmentService().getPaged(data);

        return result?.result || []

    }

    // getByHighLight = async () => {
    //     const result = await new ApartmentService().getByHighLight(IsHighLight.True, Constants.ROW_PER_PAGE);
    //     let listApartment: any = [];
    //     result?.data?.map((el: any, i: number) => {
    //         listApartment.push({ ...el, id: el._id })
    //     })
    //     return listApartment
    // }

    // getListApartmentHouse = async (category: string) => {
    //     const result = await new ApartmentService().getByCategory(category, Constants.ROW_PER_PAGE);
    //     let data: any = [];
    //     result.data?.map((el: any, i: number) => {
    //         data.push({ ...el, id: el._id })
    //     })
    //     return data
    // }

    // getListApartmentHouse = async() => {
    //     const result = await this.service.getAll();
    //     let listApartmentHouse: any = [];
    //     result?.map((el: any, i: number) => {
    //         listApartmentHouse.push({ ...el, id: el._id })
    //     })
    //     return listApartmentHouse
    // }

    onUpdate () {
        const {type} = this.getUrlParams(["type"]);
        if(type !== this.model.type){
            this.scrollToBottom(type);
            GlobalState.setFilter({
                ...GlobalState.filterObj, types: type, target: '0'
            });
            this.setModel({
                type 
            })
        }
    }
    scrollToBottom = (id: string) => {
        const headerHeight = 200; /* PUT HEADER HEIGHT HERE */
        const buffer = 25; /* MAY NOT BE NEEDED */
        const scrollToEl = document.getElementById(id);
        if (scrollToEl) {
            const topOfElement = window.pageYOffset + scrollToEl!.getBoundingClientRect().top - headerHeight - buffer;
            window.scroll({ top: topOfElement, behavior: "smooth" });
        }
    }
}
export default CommerceRentController;