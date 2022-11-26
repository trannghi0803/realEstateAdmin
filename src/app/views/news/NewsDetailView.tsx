import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import "../../../commons/styles/NewsDetailStyles.css";
import BaseView from "../base/BaseView";
import { NewsDetailController } from "../../controllers/news";
import NewsDetailService from "../../services/NewsService";
import NewsDetailModel from "../../models/NewsModel";
import { Resources, Strings } from "../../../constants";
import { Container, TitleLink, Row, Col, Text, Separator } from "../../../components";
import { Grid } from "@material-ui/core";
import { Helpers } from "../../../commons/utils";
import moment from "moment";
import ReactPlayer from "react-player";
import FileViewer from 'react-file-viewer';

@observer
export default class NewsDetailView extends BaseView<NewsDetailController, NewsDetailModel, NewsDetailService> {
    constructor(props: any) {
        super(props, NewsDetailController, NewsDetailModel, NewsDetailService);
    }

    public renderPage() {
        const categories = [
            {
                id: 1,
                type: Strings.News.DEALS_PROMOTIONS_TYPE,
                title: Strings.News.DEALS_PROMOTIONS_TITLE,
                date: Strings.News.DEALS_PROMOTIONS_DATE
            },
            {
                id: 2,
                type: Strings.News.DEALS_PROMOTIONS_TYPE,
                title: Strings.News.DEALS_PROMOTIONS_TITLE,
                date: Strings.News.DEALS_PROMOTIONS_DATE
            },
            {
                id: 3,
                type: Strings.News.DEALS_PROMOTIONS_TYPE,
                title: Strings.News.DEALS_PROMOTIONS_TITLE,
                date: Strings.News.DEALS_PROMOTIONS_DATE
            },
            {
                id: 4,
                type: Strings.News.DEALS_PROMOTIONS_TYPE,
                title: Strings.News.DEALS_PROMOTIONS_TITLE,
                date: Strings.News.DEALS_PROMOTIONS_DATE
            },
            {
                id: 5,
                type: Strings.News.DEALS_PROMOTIONS_TYPE,
                title: Strings.News.DEALS_PROMOTIONS_TITLE,
                date: Strings.News.DEALS_PROMOTIONS_DATE
            },
        ]
        console.log(this.model.newDetail);
        return (
            <Container>
                {/* <HomeHeader  /> */}
                
                {/* <img className="img-bg-news-detail" src={this.model.newDetail?.imageUrl ? this.model.newDetail?.imageUrl : Resources.Images.DEFAULT } />  */}
            
                <Grid className="standard-frame">
                    <Grid container>
                        <Grid item xs={12} md={8} className="p-4 pt-md-5 pl-md-0 pr-md-3">
                            {/* <Text className="news-type">{Helpers.getCodeName('typeNews', this.model.newDetail?.type)}</Text> */}
                            <Text className="top-title mt-16px">{this.model.newDetail?.title}</Text>
                            <Text className="mt-2r">
                                <div dangerouslySetInnerHTML={{
                                    __html: this.model.newDetail?.abstract || ''
                                }} />
                            </Text>
                            {/* <Text className="mt-2r date">
                                {Helpers.dateToString(moment((this.model.newDetail?.publishedTime || 0) * 1000).unix(), 'DD/MM/yyyy')}
                            </Text> */}
                            <Separator top={24} bottom={24} />
                            <Text className="ml-1r">
                                <div dangerouslySetInnerHTML={{
                                    __html: this.model.newDetail?.content || ''
                                }} />
                            </Text>
                        </Grid>
                        <Grid item xs={12} md={4} className="p-4 pt-md-5 pl-md-3 pr-md-0" >
                            <Grid className="related-post-container">
                                <TitleLink nameTitle={Strings.News.RELATED_NEWS} />
                                <Grid className="list-container">
                                    {this.model.relatedPosts?.map((item, index) => {
                                        return (
                                            <Grid>
                                                <Col>
                                                    {/* <Text className="news-type">{Helpers.getCodeName('typeNews', item?.type)}</Text> */}
                                                    <Text className="news-sub-title mt-8px" onClick={()=>this.controller.getDetail(item?._id)}>{item.title}</Text>
                                                    {/* <Text className="date mt-8px">
                                                        {moment((item.createdAt || 0) * 1000).format('DD/MM/YYYY')}
                                                    </Text> */}
                                                </Col>
                                                {index === categories.length - 1 ? null : <Separator top={16} bottom={16} />}
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                            <Separator top={26} bottom={30} />
                            <Row className="d-flex align-items-center">
                                <Col xs={6}>
                                    <Text className="news-sub-title">{Strings.News.SHARE_NEWS}</Text>
                                </Col>
                                <Col xs={6}>
                                    <Row className="justify-content-end">
                                        <img className="share-icon" src={Resources.Icon.LOGO_FB} />
                                        <img className="ml-16px share-icon" src={Resources.Icon.LOGO_TW} />
                                        <img className="ml-16px share-icon" src={Resources.Icon.LOGO_G_PLUS} />
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}
