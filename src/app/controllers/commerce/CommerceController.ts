import { Constants } from "../../../constants";
import { GlobalState } from "../../../stores/GlobalState";
import CommerceModel from "../../models/CommerceModel";
import CommerceService from "../../services/CommerceService";
import { BaseController } from "../base";
import { DisplayArea } from "../../../constants/Enums";

class CommerceController extends BaseController<CommerceModel, CommerceService> {
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
            const listApartmentHightLight: any =  [];
            const listApartmentResort:any =  [];
            const listApartmentHouse: any = await this.getListApartmentHouse();
            const listApartmentOffice: any = [];
            const listApartmentUrbanArea: any =  [];
            Promise.all([listApartmentHightLight, listApartmentHouse,  listApartmentResort, listApartmentOffice, listApartmentUrbanArea]).then((data) => {
                this.setModel({
                    listApartmentHightLight,
                    listApartmentHouse,
                    listApartmentResort,
                    listApartmentOffice,
                    listApartmentUrbanArea,
                });
            })
            this.hideLoading()
        } catch (error) {
            this.hideLoading()
        }
    }

    getListApartmentHouse = async() => {
        const result = await this.service.getAll();
        let listApartmentHouse: any = [];
        result?.map((el: any, i: number) => {
            listApartmentHouse.push({ ...el, id: el._id })
        })
        return listApartmentHouse
    }

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
export default CommerceController;