import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import "../../../commons/styles/SearchStyle.css";
import { SearchModel } from "../../models";
import { Grid } from "@material-ui/core";
import "../../../components/ComponentStyles.css";
import SwiperCore, {
    Autoplay
} from 'swiper';
import SearchController from "../../controllers/search/SearchController";
import { SearchService } from "../../services";
import { ISearchCommone } from "../../../commons/utils";
import { Screens, Strings } from "../../../constants";
import { Link } from "react-router-dom";
import { TYPE_SEARCH } from "../../../constants/Enums";

SwiperCore.use([Autoplay]);
@observer
export default class SearchView extends BaseView<
SearchController,
SearchModel,
SearchService
> {
    constructor(props: any) {
        super(props, SearchController, SearchModel, SearchService);
    }
    card = (item: ISearchCommone) => {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {item.type === TYPE_SEARCH.PROJECT ?
                        <Link to={`${Screens.PROJECT}?&id=${item.id}`} className="text-yellow font-18">
                            {item.title}
                        </Link> : null}
                    {item.type === TYPE_SEARCH.APARTMENT ?
                        <Link to={`${Screens.APARTMENT}?&id=${item.id}`} className="text-yellow font-18">
                            {item.title}
                        </Link> : null}
                    {item.type === TYPE_SEARCH.NEWS ?
                        <Link to={`${Screens.NEWS_DETAIL}?&id=${item.id}`} className="text-yellow font-18">
                            {item.title}
                        </Link> : null}
                </Grid>
                <Grid item xs={12}>
                    <div dangerouslySetInnerHTML={{ __html: item.shortDescription }} />
                </Grid>
                <Grid item xs={12} className="font-italic">{this.controller.getType(item.type)}</Grid>
            </Grid>
        )

    }
    public renderPage() {
        return (
            <Grid className="standard-frame frame-result-search">
                <Grid>
                    Kết quả tìm kiếm của từ khóa: <span className="text-green font-italic">{this.model.keyword}</span>
                </Grid>
                {this.model.listData?.slice(0, this.model.numberShow || 5)?.map(el => {
                    return (
                        <Grid className="box-result">
                            {this.card(el)}
                        </Grid>
                    )
                })}
                <div className="w-100 d-flex justify-content-center mt-5 mb-4">
                    <button className="btn-view-commerce_1" onClick={() => this.setModel({
                        numberShow: (this.model.numberShow || 5) + 5
                    })}>
                        {Strings.Components.READ_MORE}
                    </button>
                </div>

            </Grid>
        );
    }
}