import { Helpers,  IFavorite, IResult } from "../../../commons/utils";
import {  Constants, Resources, Strings } from "../../../constants";
import { MessageApi } from "../../../constants/Enums";
import { GlobalState, ModelStorage } from "../../../stores/GlobalState";
import { UserService } from "../../services";
import jwt_decode from "jwt-decode";

class BaseController<TModel, TService> {
    public model: TModel;
    public readonly service: TService;
    public history :any;

    constructor(props: any, model: any, service: any) {
        this.model = new model();
        this.service = new service();
        Helpers.copyProperties(props.location.state, this.model);
    }

    public historys(history: any){
        this.history = history;
    }
    
    public onDidFocus() { }
     
    public onBefore() {
    }

    public onStarted() {}

    public onFinish() { }

    public onStop() {}

    public onUpdate(){}

    /**
     * Update only a property to model object.
     * If model object contains more than one property, a runtime error will occur.
     *
     * @param {object} model Model data
     */
    public setModel = (model: TModel) => {
        // call setModel for set model to global
        this.updateModel(model);
        ModelStorage.setModel(model);
    }

    public updateModel = (model: TModel) => {
        for (const key in model) {
            if (this.model[key] !== model[key]) {
                this.model[key] = model[key];
            }
        }
    }

    public eventListener = () => {
    }

    public evenRemovetListener = () => {
    }

    public showLoading = () => {
        GlobalState.showLoading();
    }

    public hideLoading = () => {
        GlobalState.hideLoading();
    }

    public checkLogin = async ()=>{
        if(GlobalState.user){
            const user = await new UserService().getUser();
            if (user.result.id) {
                return true 
            }else{
                return false 
            }
        }
        return false 
    }

    getProductInfoList(bedroom: number, bathroom: number, area: number) {
        const productInfoList = [
            {
                icon: Resources.Icon.GREEN_SQUARE,
                text: `${area} ${Strings.Common.SQUARE_METTER}`,
            },
            {
                icon: Resources.Icon.SMALL_GREEN_BED,
                text: bedroom,
            },
            {
                icon: Resources.Icon.GREEN_BATH,
                text: bathroom,
            },
        ];
        return productInfoList;
    }
   
    getFavorite = async ()=>{
        const user = await this.checkExp();
        // if(user){
        //     if(!GlobalState.listFavorite){
        //         const result: IResult = await new FavoriteService().getFavorite();
        //         if (result.result) {
        //             GlobalState.setListFavorite(result.result)
        //         }
        //     }
        // }else{
        //     GlobalState.setListFavorite()
        // }
    }

    public getUrlParams = (keys: string[]): any => {
        const params = new URLSearchParams(window.location.search);
        let datas: { [key: string]: string | undefined } = {};
        keys.forEach((key) => {
            datas[key] = params.get(key) || ""
        });
        return datas;
    }

    checkExp = ()=>{
        const user = GlobalState.user;
        if(user){
            const decoded: any = jwt_decode(user.access_token);
            if(decoded?.exp){
                if (Date.now() > new Date(decoded?.exp * 1000).getTime()) { // endTime
                    GlobalState.setUser(undefined);
                    return false
                }
                return true
            }
        }
        return false
    }
   
}

export default BaseController;
