import APIAccessor from "../../commons/api/APIAccessor";
import { Constants } from "../../constants";

class BaseService {
    public readonly api = APIAccessor;
    public getProvince = async () => {
        const result = await this.api.get({
            path: Constants.ApiPath.ADDRESS.GET_PROVINCE,
        });
        return result.data;
    }

    public getDistrictsByCityCode = async (code: string) => {
        const result = await this.api.get({
            path: Constants.ApiPath.ADDRESS.GET_DISTRICT_BY_PROVINCE + `${code}`,
        })
        return result.data;
    }

    public getWardByDistrictCode = async (code: string) => {
        const result = await this.api.get({
            path: Constants.ApiPath.ADDRESS.GET_WARD_BY_DISTRICT + `${code}`,
        })
        return result.data;
    }
    
}

export default BaseService;