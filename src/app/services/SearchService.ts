import { Constants } from "../../constants";
import BaseSevice from "./BaseService";

class SearchService extends BaseSevice {
    public commonSearch = async (search: string) => {
        const result = await this.api.get({
            path: '',
            // path: Constants.ApiPath.CONTENT.COMMON_SEARCH + `?SearchText=${search}`,
        });

        return result.data.result;
    }
}

export default SearchService;