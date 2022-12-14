import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import "../../../commons/styles/CommerceStyles.css";
import { CircularProgress, Grid, Link } from "@material-ui/core";
import CommerceController from "../../controllers/commerce/CommerceController";
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
import { CategoryTarget, CategoryType, IsHighLight } from "../../../constants/Enums";

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

export default class CommerceView extends BaseView<CommerceController, CommerceModel, CommerceService> {
    constructor(props: any) {
        super(
            props,
            CommerceController,
            CommerceModel,
            CommerceService
        );
    }
  
    // cardProject = (project?: IProject) => {
    //     let photoProject = project?.projectPhotos || [];
    //     const attributes: any = project?.attributes || {};
    //     const attrInvestmentOwner: any[] = Helpers.getAttributes(attributes, Constants.DISPLAY_TYPE.INVESTMENT_OWNER)?.projectAttributes || [];
    //     const pagination = {
    //         "clickable": true,
    //     }
    //     return (
    //         <Grid className="grid-project">
    //             <Swiper pagination={pagination} >
    //                 {photoProject?.map((img, index) => {
    //                     return (
    //                         <SwiperSlide key={`${index}photo`} className="grid-img" >
    //                             <Image onClick={() => this.history.push({
    //                                 pathname: Screens.PROJECT,
    //                                 search: `?&id=${project?.id}`
    //                             })} 
    //                             loading={<CircularProgress style={{color: 'var(--default-text-color-yellow)'}}/>} 
    //                             style={{ width: '100%', height: '100%', objectFit: 'cover', paddingTop: '0', borderRadius: '24px'}} 
    //                             src={img.photoUrl || Resources.Images.DEFAULT} 
    //                             />
    //                             {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
    //                          </SwiperSlide>

    //                     )
    //                 })}
    //             </Swiper>
    //             <Grid className="grid-content">
    //                 <Grid className='grid-project-name'>
    //                     <Link color="inherit" href={`${Screens.PROJECT}?&id=${project?.id}`} >
    //                         {project?.name}
    //                     </Link>
    //                 </Grid>
    //                 <Grid container className="grid-project-info" spacing={1}>
    //                     <Grid item xs={4} className="d-flex align-items-center">
    //                         <FiberManualRecordIcon fontSize="small" className="font-12 mr-2" />
    //                         {Strings.Commerce.PRICE}
    //                     </Grid>
    //                     <Grid item xs={8} className="font-weight-bold">
    //                         <span className="text-yellow">
    //                             {Strings.Commerce.CONTACT_FOR_PRICE}
    //                         </span>
    //                     </Grid>
    //                     <Grid item xs={4} className="d-flex align-items-center">
    //                         <FiberManualRecordIcon className="mr-2 font-12" />
    //                         {Strings.Commerce.ADDRESS}
    //                     </Grid>
    //                     <Grid item xs={8} className="font-weight-bold ">
    //                         {/* {project?.provinceName} */}
    //                         <Tooltip title={project?.addressFull || ''} placement="bottom-start" arrow>
    //                             <Grid className="info-data">{project?.addressFull}</Grid>
    //                         </Tooltip>
    //                     </Grid>
    //                     <Grid item xs={4} className="d-flex align-items-center">
    //                         <FiberManualRecordIcon fontSize="small" className="font-12 mr-2" />
    //                         {Strings.Commerce.TYPE}
    //                     </Grid>
    //                     <Grid item xs={8} className="font-weight-bold">
    //                         {Helpers.getCodeName('type', project?.type)}
    //                     </Grid>
    //                     <Grid item xs={4} className="d-flex align-items-center">
    //                         <FiberManualRecordIcon fontSize="small" className="font-12 mr-2" />
    //                         {Strings.Commerce.TOTAL_AREA}
    //                     </Grid>
    //                     <Grid item xs={8} className="font-weight-bold">
    //                         {/* 264,13 ha */}
    //                         {Helpers.handleUnitArea(project?.siteArea || 0)}
    //                     </Grid>
    //                     <>
    //                         <Grid item xs={4} className="d-flex align-items-center">
    //                             <FiberManualRecordIcon fontSize="small" className="font-12 mr-2" />
    //                             {Strings.Commerce.PROJECT_SCALE}
    //                         </Grid>
    //                         <Grid item xs={8} className="font-weight-bold">
    //                             <span>
    //                                 {project?.scale ? project?.scale : '--'}
    //                             </span>
    //                         </Grid>
    //                     </>
    //                     <Grid item xs={4} className="d-flex align-items-center">
    //                         <FiberManualRecordIcon fontSize="small" className="font-12 mr-2" />
    //                         {Strings.Commerce.INVESTOR}
    //                     </Grid>
    //                     <Grid item xs={8}>
    //                         {attrInvestmentOwner?.map((el, index) => {
    //                             return (
    //                                 <span>
    //                                     {el.attributeValue}
    //                                     {index < (attrInvestmentOwner.length - 1) ? ' & ' : null}
    //                                 </span>
    //                             )
    //                         })}
    //                     </Grid>
    //                     <Grid className="grid-view cursor-pointer">
    //                         <Link color="inherit" href={`${Screens.PROJECT}?&id=${project?.id}`} >
    //                             {Strings.Commerce.VIEW_PROJECT}
    //                         </Link>
    //                         <ChevronRightIcon className="ml-3" />
    //                     </Grid>
    //                 </Grid>
    //             </Grid>
    //         </Grid>
    //     )
    // }
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
                        {(this.model.listApartmentHightLight || []).length > 0 ?
                            <>
                                <CardSliderAparment classNameTitle="text-white" nameTitle={Strings.Home.PERSONAL_PROPERTY_HIGHTLIGHT} lengthCard={(this.model.listApartmentHightLight?.length || 0)}>
                                    {this.model.listApartmentHightLight?.map((apartment, index) => {
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
                                    <button className="btn-view-commerce" onClick={() => this.history.push(`${Screens.LISTING_APARTMENT}?isHighLight=${IsHighLight.True}&target=${CategoryTarget.Sell}`)}>
                                        {Strings.Commerce.VIEW_ADD_PROJECT}
                                    </button>
                                </Grid>
                            </>
                            :
                            <CardSliderAparment nameTitle={Strings.Home.PERSONAL_PROPERTY_HIGHTLIGHT} lengthCard={1}>
                                <Grid className="view-all-card">
                                    {Strings.Common.NOT_ITEM}
                                </Grid>
                            </CardSliderAparment>
                        }
                    </Grid>
                </Grid>

                {/* resort */}
                <Grid className="standard-frame" id={Constants.TYPE.RESORT}>
                    {(this.model.listApartmentVillas || []).length > 0 ? (
                        <>
                            <CardSliderAparment lengthCard={(this.model.listApartmentVillas?.length || 0)} nameTitle={Strings.Common.VILLAS}>
                                {this.model.listApartmentVillas?.map((apartment, index) => {
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
                                <button className="btn-view-commerce_1" onClick={() => this.history.push(`${Screens.LISTING_APARTMENT}?types=${Constants.VILLAS}&target=${CategoryTarget.Sell}`)}>
                                    {Strings.Commerce.VIEW_ADD_PROJECT}
                                </button>
                            </Grid>
                        </>
                    )
                        :
                        <CardSliderAparment lengthCard={1} nameTitle={Strings.Common.VILLAS}>
                            <Grid className="view-all-card">
                                {Strings.Common.NOT_ITEM}
                            </Grid>
                        </CardSliderAparment>
                    }
                </Grid>
                {/* Ads */}
                {/* <Grid className="commerce-advisory standard-frame">
                    <Swiper className="commerce-slide-img">
                        {this.model.bannerImages?.map((item, index) => {
                            return (
                                <SwiperSlide className='promote'>
                                    <Grid className="info-promote">
                                        <Grid className="grid-promote">
                                            <Grid className="title-promote">
                                                {Strings.Commerce.DEPOSIT_PROPERTY}
                                            </Grid>
                                            <Grid>
                                                {Strings.Commerce.CONTENT_INFO_PROMOTE}
                                            </Grid>
                                            <button className="btn-view-commerce" onClick={() => { }}>
                                                {Strings.Commerce.DISCOVERY_MORE_INFO}
                                            </button>
                                        </Grid>

                                    </Grid>
                                    <a href={item.referenceUrl} target="_self">
                                        <img src={item.imageUrl} />
                                    </a>
                                </SwiperSlide>
                            );
                        })}

                    </Swiper>

                </Grid> */}
                
                {/* office */}
                <Grid className="bg-gold" id={Constants.TYPE.OFFICE}>
                    <Grid className="standard-frame">
                        {(this.model.listApartmentUrbanArea || []).length > 0 ? (
                            <>
                                <CardSliderAparment lengthCard={(this.model.listApartmentUrbanArea?.length || 0)} classNameTitle="text-white" nameTitle={Strings.Common.APARTMENT_URBAN_AREA}>
                                    {this.model.listApartmentUrbanArea?.map((apartment, index) => {
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
                                    <button className="btn-view-commerce" onClick={() => this.history.push(`${Screens.LISTING_APARTMENT}?types=${Constants.APARTMENT_URBAN_AREA}&target=${CategoryTarget.Sell}`)}>
                                        {Strings.Commerce.VIEW_ADD_PROJECT}
                                    </button>
                                </Grid>
                            </>
                        )
                            :
                            <CardSliderAparment lengthCard={1} classNameTitle="text-white" nameTitle={Strings.Common.APARTMENT_URBAN_AREA}>
                                <Grid className="view-all-card">
                                    {Strings.Common.NOT_ITEM}
                                </Grid>
                            </CardSliderAparment>
                        }
                    </Grid>
                </Grid>

                {/* house */}
                <Grid className="standard-frame" id={Constants.TYPE.HOUSE}>
                    {(this.model.listApartmentHouse || []).length > 0 ? (
                        <>
                            <CardSliderAparment lengthCard={(this.model.listApartmentHouse?.length || 0)} nameTitle={Strings.Common.PERSONAL_PROPERTY_HOUSE}>
                                {this.model.listApartmentHouse?.map((apartment, index) => {
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
                                <button className="btn-view-commerce_1" onClick={() => this.history.push(`${Screens.LISTING_APARTMENT}?types=${Constants.APARTMENT_HOUSE}&target=${CategoryTarget.Sell}`)}>
                                    {Strings.Commerce.VIEW_ADD_PROJECT}
                                </button>
                            </Grid>
                        </>
                    )
                        :
                        <CardSliderAparment lengthCard={1} nameTitle={Strings.Common.PERSONAL_PROPERTY_HOUSE}>
                            <Grid className="view-all-card">
                                {Strings.Common.NOT_ITEM}
                            </Grid>
                        </CardSliderAparment>
                    }
                </Grid>

                {/* URBAN AREA */}
                <Grid className="bg-gold" id={Constants.TYPE.URBAN_AREA}>
                    {(this.model.listApartmentLand || []).length > 0 ? (
                        <>
                            <CardSliderAparment lengthCard={(this.model.listApartmentLand?.length || 0)} nameTitle={Strings.Common.LAND}>
                                {this.model.listApartmentLand?.map((apartment, index) => {
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
                                <button className="btn-view-commerce_1" onClick={() => this.history.push(`${Screens.LISTING_APARTMENT}?types=${Constants.REAL_ESTATE_LAND}&target=${CategoryTarget.Sell}`)}>
                                    {Strings.Commerce.VIEW_ADD_PROJECT}
                                </button>
                            </Grid>
                        </>
                    )
                        :
                        <CardSliderAparment lengthCard={1} nameTitle={Strings.Common.LAND}>
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
