import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import "../../../commons/styles/CommerceStyles.css";
import { CircularProgress, Grid, Link } from "@material-ui/core";
import CommerceModel from "../../models/CommerceModel";
import CommerceService from "../../services/CommerceService";
import { CardApartment } from "../../../components";
import { Constants, Resources, Screens, Strings } from "../../../constants";
import { Helpers, IProject } from "../../../commons/utils";
import CardSliderAparment from "../../../components/CardSlickApartment";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Tooltip from '@material-ui/core/Tooltip';
import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, {
    Pagination,
    Autoplay
  } from 'swiper';
  import Image from 'material-ui-image'
import { CategoryRentType, CategoryTarget, CategoryType } from "../../../constants/Enums";
import CommerceRentController from "../../controllers/commerce/CommerceRentController";

SwiperCore.use([Pagination,  Autoplay]);

const setting = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1024: {
            slidesPerView: 2,
        },
    }
}


@observer

export default class CommerceRentView extends BaseView<CommerceRentController, CommerceModel, CommerceService> {
    constructor(props: any) {
        super(
            props,
            CommerceRentController,
            CommerceModel,
            CommerceService
        );
    }
  
    public renderPage() {
        const autoplay = {
            delay: 2500,
        }
        return (
            <Grid>
                {/* <HomeHeader /> */}
                <Grid className="commerce-bg">
                    <Grid >
                        {(this.model.bannerImages || []).length > 0 ?
                            <Swiper autoplay={autoplay} loop={(this.model.bannerImages || [])?.length > 1 ? true : false} speed={1000}>
                               { this.model.bannerImages?.map((item, index) => {
                                    return (
                                        <SwiperSlide key={`${index}photo`} className="commerce-bg" >
                                            <a href={item.referenceUrl} target="_self">
                                                <Image loading={<CircularProgress style={{color: 'var(--default-text-color-yellow)'}}/>} style={{ width: '100%', height: '100%', objectFit: 'cover', paddingTop: '0', borderRadius: '24px'}}
                                                    src={item.imageUrl || Resources.Images.DEFAULT}
                                                    
                                                />
                                            </a>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                            :
                            <img
                                className="commerce-bg"
                                src={Resources.Images.COMMERCE_BANNER}
                            />
                        }
                    </Grid>
                </Grid>
                {/* project */}
                {/* <Grid className="standard-frame">
                    {(this.model.listProject || [])?.length > 0 && (
                        <>
                            <CardSliderAparment lengthCard={this.model.listProject?.length || 0} setting={setting} nameTitle={Strings.Commerce.PROJECT}>
                                {this.model.listProject?.map((el) => {
                                    return (
                                        <SwiperSlide key={el.id}>
                                            {this.cardProject(el)}
                                        </SwiperSlide>
                                    )
                                })}
                            </CardSliderAparment>
                            <Grid className="w-100 d-flex justify-content-center">
                                <button className="btn-view-commerce_1" onClick={() => this.history.push(Screens.LISTING_PROJECT)}>
                                    
                                    {Strings.Commerce.VIEW_MORE_PROJECTS}
                                </button>
                            </Grid>
                        </>
                    )}
                </Grid> */}
                {/* highlight */}
                <Grid className="bg-gold" id="-1">
                    <Grid className="standard-frame">
                        {(this.model.listRentOffice || []).length > 0 ?
                            <>
                                <CardSliderAparment classNameTitle="text-white" nameTitle={Strings.Common.OFFICE} lengthCard={(this.model.listRentOffice?.length || 0)}>
                                    {this.model.listRentOffice?.map((apartment, index) => {
                                        return (
                                            <SwiperSlide key={index + 'a'} className="swiper-card-project">
                                                <CardApartment
                                                    onClick={() => this.history.push({ pathname: Screens.APARTMENT, search: `?&id=${apartment._id}` })}
                                                    onClickLike={() => {}}
                                                    apartment={apartment}
                                                    voucherName={Strings.Common.VOUCHER_NAME}
                                                    remainDate={2}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                                </CardSliderAparment>
                                <Grid className="w-100 d-flex justify-content-center">
                                    <button className="btn-view-commerce" onClick={() => this.history.push(`${Screens.LISTING_APARTMENT}?types=${CategoryRentType.OFFICE}&target=${CategoryTarget.Rent}`)}>
                                        {Strings.Commerce.VIEW_ADD_PROJECT}
                                    </button>
                                </Grid>
                            </>
                            :
                            <CardSliderAparment nameTitle={Strings.Common.OFFICE} lengthCard={1}>
                                <Grid className="view-all-card">
                                    {Strings.Common.NOT_ITEM}
                                </Grid>
                            </CardSliderAparment>
                        }
                    </Grid>
                </Grid>

                {/* resort */}
                <Grid className="standard-frame" id={Constants.TYPE.RESORT}>
                    {(this.model.listRentUrbanArea || []).length > 0 ? (
                        <>
                            <CardSliderAparment lengthCard={(this.model.listRentUrbanArea?.length || 0)} nameTitle={Strings.Common.APARTMENT_URBAN_AREA_RENT}>
                                {this.model.listRentUrbanArea?.map((apartment, index) => {
                                    const apartmentPhotos: any[] = apartment.apartmentPhotos || [];
                                    return (
                                        <SwiperSlide key={index + 'a'} className="swiper-card-project">
                                            <CardApartment
                                                onClick={() => this.history.push({ pathname: Screens.APARTMENT, search: `?&id=${apartment._id}` })}
                                                onClickLike={() => {}}
                                                apartment={apartment}
                                                voucherName={Strings.Common.VOUCHER_NAME}
                                                remainDate={2}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </CardSliderAparment>
                            <Grid className="w-100 d-flex justify-content-center">
                                <button className="btn-view-commerce_1" onClick={() => this.history.push(`${Screens.LISTING_APARTMENT}?types=${CategoryRentType.URBAN_AREA}&target=${CategoryTarget.Rent}`)}>
                                    {Strings.Commerce.VIEW_ADD_PROJECT}
                                </button>
                            </Grid>
                        </>
                    )
                        :
                        <CardSliderAparment lengthCard={1} nameTitle={Strings.Common.APARTMENT_URBAN_AREA_RENT}>
                            <Grid className="view-all-card">
                                {Strings.Common.NOT_ITEM}
                            </Grid>
                        </CardSliderAparment>
                    }
                </Grid>
                
                {/* office */}
                <Grid className="bg-gold" id={Constants.TYPE.OFFICE}>
                    <Grid className="standard-frame">
                        {(this.model.listRentHouse || []).length > 0 ? (
                            <>
                                <CardSliderAparment lengthCard={(this.model.listRentHouse?.length || 0)} classNameTitle="text-white" nameTitle={Strings.Common.PERSONAL_PROPERTY_HOUSE_RENT}>
                                    {this.model.listRentHouse?.map((apartment, index) => {
                                        const apartmentPhotos: any[] = apartment.apartmentPhotos || [];
                                        return (
                                            <SwiperSlide key={index + 'a'} className="swiper-card-project">
                                                <CardApartment
                                                    onClick={() => this.history.push({ pathname: Screens.APARTMENT, search: `?&id=${apartment._id}` })}
                                                    onClickLike={() => {}}
                                                    apartment={apartment}
                                                    voucherName={Strings.Common.VOUCHER_NAME}
                                                    remainDate={2}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                                </CardSliderAparment>
                                <Grid className="w-100 d-flex justify-content-center">
                                    <button className="btn-view-commerce" onClick={() => this.history.push(`${Screens.LISTING_APARTMENT}?types=${CategoryRentType.URBAN_AREA}&target=${CategoryTarget.Rent}`)}>
                                        {Strings.Commerce.VIEW_ADD_PROJECT}
                                    </button>
                                </Grid>
                            </>
                        )
                            :
                            <CardSliderAparment lengthCard={1} classNameTitle="text-white" nameTitle={Strings.Common.PERSONAL_PROPERTY_HOUSE_RENT}>
                                <Grid className="view-all-card">
                                    {Strings.Common.NOT_ITEM}
                                </Grid>
                            </CardSliderAparment>
                        }
                    </Grid>
                </Grid>

                {/* house */}
                <Grid className="standard-frame" id={Constants.TYPE.HOUSE}>
                    {(this.model.listRentStore || []).length > 0 ? (
                        <>
                            <CardSliderAparment lengthCard={(this.model.listRentStore?.length || 0)} nameTitle={Strings.Common.STORE_RENT}>
                                {this.model.listRentStore?.map((apartment, index) => {
                                    const apartmentPhotos: any[] = apartment.images || [];
                                    return (
                                        <SwiperSlide key={index + 'a'} className="swiper-card-project">
                                            <CardApartment
                                                onClick={() => this.history.push({ pathname: Screens.APARTMENT, search: `?&id=${apartment._id}` })}
                                                onClickLike={() => { }}
                                                apartment={apartment}
                                                voucherName={Strings.Common.VOUCHER_NAME}
                                                remainDate={2}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </CardSliderAparment>
                            <Grid className="w-100 d-flex justify-content-center">
                                <button className="btn-view-commerce_1" onClick={() => this.history.push(`${Screens.LISTING_APARTMENT}?types=${CategoryRentType.STORE}&target=${CategoryTarget.Rent}`)}>
                                    {Strings.Commerce.VIEW_ADD_PROJECT}
                                </button>
                            </Grid>
                        </>
                    )
                        :
                        <CardSliderAparment lengthCard={1} nameTitle={Strings.Common.STORE_RENT}>
                            <Grid className="view-all-card">
                                {Strings.Common.NOT_ITEM}
                            </Grid>
                        </CardSliderAparment>
                    }
                </Grid>
            </Grid>
        )
    }
}
