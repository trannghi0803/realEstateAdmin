import { Constants, Screens } from "../../../constants";
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
            let data: any = {
                pageNumber: this.model.currentPage || 1,
                pageSize: Constants.ROW_PER_PAGE,
            }
            const news = await this.service.getPaged(data);
            if (news) {
                this.setModel({
                    listNews: news?.result,
                    currentPage: news.pageNumber,
                    totalPages: news?.totalPage,
                    totalCount: news?.totalCount,
                    renderKey: Date.now()
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
            console.log("pageNumeber", pageNumeber)
            if (pageNumeber !== this.model.currentPage) {
                this.showLoading();
                let data: any = {
                    pageNumber: pageNumeber || 1,
                    pageSize: Constants.ROW_PER_PAGE,
                }
                const news = await this.service.getPaged(data);
                if (news) {
                    this.setModel({
                        listNews: news?.result,
                        totalPages: news?.totalPage,
                        totalCount: news?.totalCount,
                        currentPage: pageNumeber,
                        renderKey: Date.now()
                    })
                }
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