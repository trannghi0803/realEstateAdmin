import { Screens } from "../../../constants";
import { NewsModel } from "../../models";
import NewsService from "../../services/NewsService";
import { BaseController } from "../base";

class NewsController extends BaseController<NewsModel, NewsService> {
    constructor(props: any) {
        super(props, NewsModel, NewsService);
    }

    async onStarted() {
        try {
            this.showLoading();
            const news = await this.service.getAll();
            if (news) {
                this.setModel({
                    listNews: news,
                    renderKey: Date.now()
                    // totalNews: post.result.totalPages,
                    // page: post.result.currentPage
                })
            }
            this.hideLoading();

        } catch (error) {
            this.hideLoading();
        }
    }
    view = (id: string) => {
        this.history.push({ pathname: Screens.NEWS_DETAIL, search: `?&id=${id}` })
    }
    onFinish() {
        setTimeout(() => {
            this.history.replace('/home')
        }, 3100);
    }
    handleChangePagination = async (event: React.ChangeEvent<unknown>, pageNumeber: number) => {
        try {
            if (pageNumeber !== this.model.page) {
                this.showLoading();
                // const post = await this.service.getPaged(`pageSize=5&PageNumber=${pageNumeber}&Orderby=post.isHighlight+DESC`);
                // if(post.result){
                //     this.setModel({
                //         listNews: post.result.items,
                //         page: post.result.currentPage
                //     })
                // }
                this.hideLoading();
            }
        } catch (error) {
            this.hideLoading();
        }
    }
    getTypes = async (type: number) => {
        try {
            // if(type !== this.model.typeNews){
            //     this.showLoading();
            //     const params = new URLSearchParams;
            //     if (type >= 0) {
            //         params.append('Type', type.toString());
            //     }
            //     params.append('pageSize', '5');
            //     params.append('PageNumber', '1');
            //     params.append('Orderby', 'post.isHighlight DESC')
            //     const post = await this.service.getPaged(params.toString());
            //     if(post.result){
            //         this.setModel({
            //             listNews: post.result.items,
            //             page: post.result.currentPage,
            //             totalNews: post.result.totalPages,
            //             typeNews: type
            //         })
            //     }
            //     this.hideLoading();
            // }
        } catch (error) {
            this.hideLoading();
        }
    }
    viewFile = (url: string) => {
        if (url.substring(url.lastIndexOf(".") + 1)) {
            this.setModel({
                fileType: url.substring(url.lastIndexOf(".") + 1),
                file: url,
                showModalVideo: true
            })
        }

    }
}
export default NewsController;