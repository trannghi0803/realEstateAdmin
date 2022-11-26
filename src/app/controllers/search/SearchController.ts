import { Strings } from "../../../constants";
import { TYPE_SEARCH } from "../../../constants/Enums";
import { SearchModel } from "../../models";
import { SearchService } from "../../services";
import { BaseController } from "../base";

class SearchController extends BaseController<SearchModel, SearchService> {

    intervalId: any;

    constructor(props: any) {
        super(props, SearchModel, SearchService);
    }
    async onStarted() {
        try {
            const { keyword } = this.getUrlParams(["keyword"]);
            if (keyword) {
                this.setModel({
                    keyword
                })
                this.commonSearch(keyword);
            }
        } catch (error) {
            this.hideLoading()
        }

    }

    onUpdate() {
        const { keyword } = this.getUrlParams(["keyword"]);
        if (keyword !== this.model.keyword) {
            this.setModel({ searchUrl: window.location.search });
            if (keyword) {
                this.setModel({
                    keyword
                })
                this.commonSearch(keyword);
            }
        }
    }

    commonSearch = async (key: string) => {
        try {
            this.showLoading();
            const result = await this.service.commonSearch(key);
            if (result) {
                this.setModel({
                    listData: result
                })
            }
            this.hideLoading()
        } catch (error) {
            this.hideLoading()

        }

    }
    getType = (type: number) => {
        switch (type) {
            case TYPE_SEARCH.PROJECT:
                return Strings.Search.PROJECT
            case TYPE_SEARCH.APARTMENT:
                return Strings.Search.APARTMENT
            case TYPE_SEARCH.NEWS:
                return Strings.Search.NEWS
        }
    }
    redirect = (id: string, type: number)=>{
        
    } 
}
export default SearchController;