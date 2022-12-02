import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import "../../../commons/styles/NewsStyles.css";
import BaseView from "../base/BaseView";
import { NewsController } from "../../controllers/news";
import NewsService from "../../services/NewsService";
import NewsModel from "../../models/NewsModel";
import { Resources, Screens, Strings } from "../../../constants";
import { Container, TitleLink } from "../../../components";
import { Grid, Modal } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Helpers } from "../../../commons/utils";
import moment from "moment";
import Pagination from "@material-ui/lab/Pagination";
import ReactPlayer from 'react-player/lazy';
import FileViewer from 'react-file-viewer';
@observer
export default class NewsView extends BaseView<NewsController, NewsModel, NewsService> {
    constructor(props: any) {
        super(props, NewsController, NewsModel, NewsService);
    }

    public renderPage() {
        return (
            <Container>
                {/* <HomeHeader  /> */}
                <Grid className="standard-frame" >
                    <Grid item className="pt-5">
                        <TitleLink nameTitle={"Tin tức - Sự kiện"} />
                        
                        <Grid className="wrap-news">
                            {this.model.listNews?.map((item, index) => {
                                return (
                                    <Grid className="wrap-news-list" key={`news${index}`}>
                                        <Grid className="item-news">
                                            <Grid className="img">
                                                <Grid className="bg-img" style={{ backgroundImage: `url('${item.imageThumb || Resources.Images.DEFAULT}')` }}>
                                                </Grid>
                                                <img src={Resources.Images.NEW_GIF} />
                                                <Grid className="view-news-detail" onClick={() => this.controller.view(item._id)}>
                                                    {item.link ? <img className="img-64" src={Resources.Icon.YOUTUBE_PLAY} /> : Strings.News.SHOW_NEWS}
                                                </Grid>
                                            </Grid>
                                            <Grid className="content-news">
                                                <Grid className="text-news" onClick={() => this.history.push({ pathname: Screens.NEWS_DETAIL, search: `?&id=${item._id}&type=${item.type}` })}>
                                                    {item.title}
                                                </Grid>
                                                <Grid className="text-danger">
                                                    {item.contentThumb}
                                                </Grid>

                                                {/* <Grid className="text-secondary text-right">
                                                    {moment((item.createdAt || 0) * 1000).format('DD/MM/yyyy')}
                                                </Grid> */}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                    {/* {(this.model.totalNews || 0) > 0 ?
                        <Grid className="w-100 d-flex justify-content-center mt-4 mb-4">
                            <Pagination count={this.model.totalNews} page={this.model.page} onChange={this.controller.handleChangePagination} />
                        </Grid> : ''
                    } */}
                    {(this.model.listNews || [])?.length > 0 ?
                        <Grid className="w-100 wrap-pagination">
                            <Pagination className="custom-pagination" count={this.model.totalPages} page={this.model.currentPage} onChange={this.controller.handleChangePagination} />
                        </Grid> :
                        <Grid className="w-100 wrap-pagination">
                            Không có dữ liệu
                        </Grid>
                    }
                </Grid>
                {/* <Modal
                    open={this.model.showModalVideo || false}
                    onClose={() => this.setModel({
                        showModalVideo: false
                    })}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className="d-flex align-items-center justify-content-center"
                >
                    <Grid className="h-75 w-75 bg-white" >
                        <FileViewer
                            fileType={this.model.fileType}
                            filePath={this.model.file}
                        />
                    </Grid>
                </Modal> */}
            </Container>

        );
    }
}