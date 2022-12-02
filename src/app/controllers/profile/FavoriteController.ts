import { RealEstateStatus } from "../../../constants/Enums";
import { GlobalState } from "../../../stores/GlobalState";
import ProfileModel from "../../models/ProfileModel";
import { ApartmentService, FavoriteService } from "../../services";
import ProfileService from "../../services/ProfileService";
import { BaseController } from "../base";

class FavoriteController extends BaseController<ProfileModel, ProfileService> {

    constructor(props: any) {
        super(props, ProfileModel, ProfileService);
    }
    async onStarted () {
        try {
            this.showLoading();
            const data = await new ApartmentService().getByUser();
            let listRealEstateActive: any[] = []
            let listRealEstateInactive: any[] = []
            data?.map((el: any) =>{
                if (el.status === RealEstateStatus.Active) {
                    listRealEstateActive.push({ ...el, id: el._id })
                } else {
                    listRealEstateInactive.push({ ...el, id: el._id })
                }
            })
            console.log("data", data)
            this.setModel({
                listRealEstateActive,
                listRealEstateInactive,
            })
            this.hideLoading();
        } catch (error) {
            this.hideLoading()
        }
    }
    // deleteFavorite = async (id: string)=>{
    //     await this.handleFavourite(id || '');
    //     const favorite = GlobalState.listFavorite;
    //     this.setModel({
    //         listProjectFavorite: favorite.filter((item: any)=> item.apartment === null),
    //         listApartmentFavorite: favorite.filter((item: any)=> item.apartment !== null),
    //     })
    // }
}
export default FavoriteController;