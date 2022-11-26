import userManager, { loadUserFromStorage, signinRedirect } from "../../../config";
import { Constants, Screens } from "../../../constants";
import { GlobalState } from "../../../stores/GlobalState";
import { AuthModel } from "../../models";
import { AuthService, UserService } from "../../services";
import { BaseController } from "../base";
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";
import { Helpers } from "../../../commons/utils";

class CallbackController extends BaseController<AuthModel, AuthService> {

    constructor(props: any) {
        super(props, AuthModel, AuthService);
    }

    public async onStarted() {
        // const searchParams = new URLSearchParams(window.location.search);
        // const hashParams = new URLSearchParams(window.location.hash.replace("#", "?"));
        // if (searchParams.get("code") ||
        //     searchParams.get("id_token") ||
        //     searchParams.get("session_state") ||
        //     hashParams.get("code") ||
        //     hashParams.get("id_token") ||
        //     hashParams.get("session_state")) {
        //     try {
        //         const user = await userManager.signinCallback();
        //         if (user) {
        //             GlobalState.setUser(user);
        //             const cookies = new Cookies();
        //             const decoded: any = jwt_decode(user.access_token);
        //             cookies.set(Constants.StorageKeys.TOKEN, user, { path: '/', expires: decoded?.ext});
        //             const path = sessionStorage.getItem(Constants.StorageKeys.PRE_SCREEN) || `${window.location.origin}${Screens.HOME}`;
        //             window.location.href = path;
        //         }
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        const searchParams = new URLSearchParams(window.location.search);
        const hashParams = new URLSearchParams(window.location.hash.replace("#", "?"));
        if (searchParams.get("code") ||
            searchParams.get("id_token") ||
            searchParams.get("session_state") ||
            hashParams.get("code") ||
            hashParams.get("id_token") ||
            hashParams.get("session_state")) {
            // register user loaded event
            userManager.events.addUserLoaded((user) => this.userLoaded(user, this));
            let user = await userManager.getUser();
            if (user) {
                this.userLoaded(user, this);
            } else {
                try {
                    user = await userManager.signinCallback();
                } catch (error) {
                    console.error(error);
                    this.history.push(Screens.HOME);
                }
            }
        }
        else {
            await signinRedirect();
        }
    }
    public userLoaded = async (user: any, self: any) => {
        try {
            if (user) {
                GlobalState.setUser(user);
                    const cookies = new Cookies();
                    const decoded: any = jwt_decode(user.access_token);
                    cookies.set(Constants.StorageKeys.TOKEN, user, { path: '/', expires: decoded?.ext});
                    const path = sessionStorage.getItem(Constants.StorageKeys.PRE_SCREEN) || `${window.location.origin}${Screens.HOME}`;
                    window.location.href = path;
            }
        } catch (error) {
            Helpers.showAlert("Xử lý đăng nhập không thành công. Xin vui lòng đăng nhập lại.",
                "error",
                async () => {
                    await signinRedirect();
                });
        }
    }
}

export default CallbackController;