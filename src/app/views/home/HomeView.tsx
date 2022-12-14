import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import { HomeController } from "../../controllers/home";
import HomeService from "../../services/HomeService";
import "../../../commons/styles/HomeStyles.css";
import { Resources, Screens, Strings } from "../../../constants";
import { HomeModel } from "../../models";
import { Grid, Grow, Hidden, Link } from "@material-ui/core";
import "../../../components/ComponentStyles.css";
import CardSliderAparment from "../../../components/CardSlickApartment";
import CardProject from "../../../components/CardProject";
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation, Autoplay, EffectFade } from "swiper";

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import "swiper/components/effect-fade/effect-fade.min.css";
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import { Helpers } from "../../../commons/utils";
import HomeBanner from "./HomeBanner";

SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

@observer
export default class HomeView extends BaseView<HomeController, HomeModel, HomeService> {
    constructor(props: any) {
        super(props, HomeController, HomeModel, HomeService);
    }
    
    public renderPage() {
        return (
            <Grid>
                <Grid className="">
                    <HomeBanner />

                    {/* Project Hightlight */}
                    <Grid className="bg-green">
                        <Grid className="standard-frame">
                            {(this.model.projects || []).length > 0 ?
                                <CardSliderAparment nameTitle={Strings.Home.PROJECT_HIGHTLIGHT} lengthCard={(this.model.projects?.length || 0) + 1}>
                                    {this.model.projects?.map((item, index) => {
                                        const projectPhotos: any[] = item.projectPhotos || [];
                                        return (
                                            <SwiperSlide key={index + 'a'}
                                                className="swiper-card-project">
                                                <CardProject
                                                    maxPrice={item.maxPrice || 0}
                                                    imageProject={projectPhotos[0]?.photoUrl}
                                                    minPrice={item.minPrice || 0}
                                                    nameProject={Helpers.getName(item.name, item.nameContents)}
                                                    typeProject={item.type}
                                                    id={item.id || ''}
                                                    onClick={() => {this.history.push({ pathname: Screens.PROJECT, search: `?&id=${item.id}` })}}
                                                    onClickLike={() => {}}
                                                    area={item.siteArea}
                                                    status={item.status}
                                                    isHighlight={item.isHighlight}
                                                    addressFull={item.addressFull}
                                                    scale={item.scale}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                                    <SwiperSlide className="view-all-card" >
                                        <Link color="inherit" className="cursor-pointer" href={`${Screens.LISTING_PROJECT}?types=-1`}>
                                            {Strings.Common.VIEW_ALL}
                                        </Link>
                                    </SwiperSlide>
                                </CardSliderAparment>
                                :
                                <CardSliderAparment nameTitle={Strings.Home.PERSONAL_PROPERTY_HIGHTLIGHT} lengthCard={1} className="mt-3">
                                    <Grid className="view-all-card">
                                        {Strings.Common.NOT_ITEM}
                                    </Grid>
                                </CardSliderAparment>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}