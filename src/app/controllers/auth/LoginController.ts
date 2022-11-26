import { Strings } from "../../../constants";
import { AuthModel } from "../../models";
import { AuthService } from "../../services";
import { BaseController } from "../base";

class LoginController extends BaseController<AuthModel, AuthService> {

    constructor(props: any) {
        super(props, AuthModel, AuthService);
    }

    public onLoginClick = async (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        const username = this.model.username || "";
        const password = this.model.password || "";
        const isValid = this.validate(username, password);
        // if (!isValid) {
        //     return;
        // } 
        // this.showLoading();
        // const result = await this.service.login(username, password);
        // if (result.access_token) {
        //     sessionStorage.setItem(Constants.StorageKeys.ACCESS_TOKEN, result.access_token);
        //     sessionStorage.setItem(Constants.StorageKeys.DISPLAY_NAME, username);
        //     const menuItem = await this.service.getMenuItem();
        //     const strMenuItem = JSON.stringify(menuItem);
        //     sessionStorage.setItem(Constants.StorageKeys.MENU_ITEM, strMenuItem);
        //     sessionStorage.setItem(Constants.StorageKeys.MENU_INDEX, "1");
        // }
        // this.hideLoading();
    }

    public validate = (username: string, password: string) => {
        let isValid = true;
        if (!username) {
            this.setModel({
                errUsername: Strings.Validation.REQUIRED,
            });
            isValid = false;
        }
        if (!password) {
            this.setModel({
                errPassword: Strings.Validation.REQUIRED,
            });
            isValid = false;
        }
        return isValid;
    }
}

export default LoginController;