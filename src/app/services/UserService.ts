import { Constants } from "../../constants";
import BaseSevice from "./BaseService";

class UserService extends BaseSevice {
    public getUser = async () => {
        const result = await this.api.get({
            path: `Constants.ApiPath.USER_INFO`,
        });
        return result.data;
    }

    public register = async (data: any) =>{
        const result = await this.api.post({
            path: Constants.ApiPath.REGISTER,
            data
        });
        return result.data;
    }

    public activeAccount = async (data: any) => {
        const result = await this.api.post({
            path: Constants.ApiPath.ACTIVE_ACCOUNT,
            data
        });
        return result.data;
    }

    public logout = async () => {
        const result = await this.api.get({
            path: Constants.ApiPath.LOGOUT,
        });
        return result.data;
    }
}

export default UserService;