import { Constants } from "../../constants";
import BaseSevice from "./BaseService";

class ProfileService extends BaseSevice {  
    public getProfile = async () => {
        const result = await this.api.get({
            path: Constants.ApiPath.getProfile,
        });
        return result.data;
    }

    public updateProfile = async (data: any) => {
        const result = await this.api.put({
            path: Constants.ApiPath.updateProfile,
            data
        });
        return result.data;
    }

    public getAllCategory = async () => {
        const result = await this.api.get({
            path: Constants.ApiPath.CATEGORY,
        });
        return result.data;
    }

    public getDetail = async (id: string) => {
        const result = await this.api.get({
            path: `${Constants.ApiPath.REAL_ESTATE}/${id}`,
        });
        return result.data;
    }

    public delete = async (id: string) => {
        const result = await this.api.delete({
            path: `${Constants.ApiPath.REAL_ESTATE}/${id}`,
        });
        return result.data;
    }

    public create = async (data: any) => {
        const result = await this.api.post({
            path: `${Constants.ApiPath.REAL_ESTATE_SUBMIT}`,
            data
        });
        return result.data;
    }

    public update = async (data: any) => {
        const result = await this.api.put({
            path: `${Constants.ApiPath.REAL_ESTATE_UPDATE}/${data.id}`,
            data
        });
        return result.data;
    }
}

export default ProfileService;