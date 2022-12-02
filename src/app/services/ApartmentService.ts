import { Constants } from "../../constants";
import BaseSevice from "./BaseService";

class ApartmentService extends BaseSevice {
    public getAll = async () => {
        const result = await this.api.get({
            path: Constants.ApiPath.REAL_ESTATE,
        });
        return result.data;
    }

    public getPaged = async (data?: any) => {
        const result = await this.api.get({
            path: Constants.ApiPath.REAL_ESTATE,
            query: data
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
            path: `${Constants.ApiPath.REAL_ESTATE}`,
            data
        });
        return result.data;
    }

    public update = async (data: any) => {
        const result = await this.api.put({
            path: `${Constants.ApiPath.REAL_ESTATE}/${data.id}`,
            data
        });
        return result.data;
    }

    public getByHighLight = async (type: number, limit: number) => {
        const result = await this.api.get({
            path: Constants.ApiPath.REAL_ESTATE_GET_BY_HIGHLIGHT + `${type}?limit=${limit}`,
        });
        return result.data;
    }

    public getByCategory = async (categoryId: string, limit: number) => {
        const result = await this.api.get({
            path: Constants.ApiPath.REAL_ESTATE_GET_BY_CATEGORY + `${categoryId}?limit=${limit}`,
        });
        return result.data;
    }

    public getByUser = async () => {
        const result = await this.api.get({
            path: Constants.ApiPath.REAL_ESTATE_BY_USER,
        });
        return result.data;
    }
}

export default ApartmentService;