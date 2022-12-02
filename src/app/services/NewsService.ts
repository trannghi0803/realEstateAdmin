import { Constants } from "../../constants";
import BaseSevice from "./BaseService";

class NewsService extends BaseSevice {
    public getAll = async () => {
        const result = await this.api.get({
            path: Constants.ApiPath.NEWS,
        });
        return result.data;
    }

    public getPaged = async (data?: any) => {
        const result = await this.api.get({
            path: Constants.ApiPath.NEWS_GET_PAGED,
            data
        });
        return result.data;
    }

    public getDetail = async (id: string) => {
        const result = await this.api.get({
            path: `${Constants.ApiPath.NEWS}/${id}`,
        });
        return result.data;
    }
}

export default NewsService;