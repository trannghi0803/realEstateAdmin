import { Constants } from "../../constants";
import BaseSevice from "./BaseService";

class CommerceService extends BaseSevice {
    public getAll = async () => {
        const result = await this.api.get({
            path: Constants.ApiPath.REAL_ESTATE,
        });
        return result.data;
    }
}

export default CommerceService;