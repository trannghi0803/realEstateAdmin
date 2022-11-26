import { IMenuItem, MenuAction } from "../../commons/utils";
import { Screens, Strings } from "../../constants";
import BaseSevice from "./BaseService";

class AuthService extends BaseSevice {
    public login = async (username: string, password: string) => {
        if (username === "1" && password === "1") {
            return {
                access_token: "123456789"
            };
        }
        return {};
    }

    public getMenuItem = async () => {
        const menu: IMenuItem[] = [
            {
                id: "1",
                tilte: Strings.User.TITLE,
                iconName: "account_circle_rounded",
                controller: Screens.ADMIN,
                action: MenuAction.MANAGEMENT
            }
        ]
        return menu;
    }
}

export default AuthService;