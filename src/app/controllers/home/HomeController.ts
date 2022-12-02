import { Helpers, IProject } from "../../../commons/utils";
import { Constants, Resources, Strings } from "../../../constants";
import { DisplayArea, IsHighLight } from "../../../constants/Enums";
import { GlobalState } from "../../../stores/GlobalState";
import { HomeModel } from "../../models";
import { ApartmentService } from "../../services";
import HomeService from "../../services/HomeService";
import { BaseController } from "../base";

class HomeController extends BaseController<HomeModel, HomeService> {
    
    intervalId: any;

    constructor(props: any) {
        super(props, HomeModel, HomeService);
    }
    async onStarted() {
        let { active_token } = this.getUrlParams(["active_token"]);
        console.log("id", active_token)
        if(active_token) {
            this.activeAccount(active_token);
        }
        let listItemHighLight = await this.getByHighLight();
        this.setModel({
            listItemHighLight
        })
    }

    public activeAccount = async (active_token: string) => {
        fetch(`${Constants.Api.BASE_URL}${Constants.ApiPath.ACTIVE_ACCOUNT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': GlobalState.user.accessToken
            },
            body: JSON.stringify({ active_token })
        })
            .then(response => response.json())
            .then(response => {
                console.log("response", response);
                if (response.statusCode === Constants.ApiCode.SUCCESS) {
                    Helpers.showAlert(Strings.Home.ACTIVE_SUCCESS, "success");
                } else {
                    console.log("result err", response)
                    Helpers.showAlert(response.msg, "error");
                }
            })
            .catch(error => {
                console.log("result err", error)
                Helpers.showAlert(error.msg, "error");
            })
    }

    getByHighLight = async () => {
        const result = await new ApartmentService().getByHighLight(IsHighLight.True, Constants.ROW_PER_PAGE);
        let listApartment: any = [];
        result?.data?.map((el: any, i: number) => {
            listApartment.push({ ...el, id: el._id })
        })
        return listApartment
    }

    
}
export default HomeController;