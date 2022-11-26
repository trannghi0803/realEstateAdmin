import { INews } from "../../../commons/utils";
import { NewsModel } from "../../models";
import NewsService from "../../services/NewsService";
import { BaseController } from "../base";

class NewsDetailController extends BaseController<NewsModel, NewsService> {
    constructor(props: any) {
        super(props, NewsModel, NewsService);
    }
    async onStarted() {
        try {
            this.showLoading();
            const {id} = this.getUrlParams(["id"]);
            const detail = await this.service.getDetail(id);
            const result = await this.service.getAll();
            this.setModel({
                newDetail: detail,
                relatedPosts: result?.filter((item: any)=>item._id !== id)
            })
            this.hideLoading();
        } catch (error) {
            this.hideLoading();
        }
        
    }
    onFinish(){
        setTimeout(() => {
            this.history.replace('/home')
         },3100);
    }
    getDetail= async (id: string)=>{
        try {
            this.showLoading();
            const detail = await this.service.getDetail(id);
            const result = await this.service.getAll();
            this.setModel({
                newDetail: detail,
                relatedPosts: result?.filter((item: any) => item._id !== id)
            })
            this.hideLoading();
        } catch (error) {
            this.hideLoading();
            console.log("error", error)
        }
    }
    getTypeFile = (name: String)=>{
        if(name.lastIndexOf('.')){
           let tmp = name.slice(name.lastIndexOf('.') +1, name.length);
            return tmp
        }
    }
}
export default NewsDetailController;