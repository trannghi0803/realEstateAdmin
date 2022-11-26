import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import { ApartmentModel } from "../../models";
import { ApartmentService } from "../../services";
import { ApartmentController } from "../../controllers/apartment";
import {
    ControlButton,
    Collapse,
    CircleIcon,
    CardApartment,
    CardProduct,
    Row,
    Text,
    ControlRadioYellow,
    CardPriceString,
    ReadMore,
    TitleLink,
} from "../../../components";
import "../../../commons/styles/ApartmentStyles.css";
import "../../../commons/styles/Styles.css";
import { Constants, Resources, Screens, Strings } from "../../../constants";
import { CircularProgress, Grid, Hidden, Tooltip } from "@material-ui/core";
import { GlobalState } from "../../../stores/GlobalState";
import CustomModal from "../../../components/CustomModal";
import CardSliderAparment from "../../../components/CardSlickApartment";
import Inputs from "../../../components/Inputs";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SelectCheckbox from "../../../components/SelectIcon";
import { Helpers, IApartment, IFavorite } from "../../../commons/utils";
import PreviewImg from "../../../components/PreviewImg";
import Viewer from "react-viewer";
import ReactPlayer from "react-player";
import { FacebookShareButton } from "react-share";
import Image from 'material-ui-image';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import { Link } from "react-router-dom";
import ImgView from "../../../components/ImgView";
SwiperCore.use([Pagination]);
const optionTypeLoan = [
    { value: "1", label: Strings.Aparment.PRINCIPAL_PROFIT_DEVIDED_MONTHLY },
    { value: "2", label: Strings.Aparment.PRINCIPAL_PROFIT_DEVIDED_ANNUALLY },
];

const sliderUtilities = {
    slidesPerView: 2,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        // when window width is >= 480px
        600: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
    }
};
@observer
export default class ApartmentView extends BaseView<ApartmentController, ApartmentModel, ApartmentService> {
    constructor(props: any) {
        super(props, ApartmentController, ApartmentModel, ApartmentService);
    }

    getUImgView(listImg: Array<any>) {
        let result: Array<any> = [];
        listImg.forEach(el => {
            result.push({
                src: el,
                // caption: el?.attributeValue
            })
        })
        return result;
    }

    getImgView(listImg: Array<any>) {
        let result: Array<any> = [];
        listImg.forEach(el => {
            result.push(el)
        })
        return result;
    }
    public renderPage() {
        const pagination = {
            "clickable": true,
        }
        const apartment: any = this.model.apartment || ({} as any);
        console.log("apartment", apartment);
        const apartments: any[] = this.model.apartments || [];
        const apartmentPhotos: any[] = apartment.images || [];
        // const attrPremises: any[] = Helpers.getAttributes(apartment.attributes, Constants.DISPLAY_TYPE.PREMISES).apartmentAttributes || [];
        // const attrLocation: any[] = Helpers.getAttributes(apartment.attributes, Constants.DISPLAY_TYPE.LOCATION).apartmentAttributes || [];

        // const attrLink360: any[] = Helpers.getAttributes(apartment.attributes, Constants.DISPLAY_TYPE.LINK_360).apartmentAttributes || [];
        // const attrLinkYoutube: any[] = Helpers.getAttributes(apartment.attributes, Constants.DISPLAY_TYPE.LINK_YOUTUBE).apartmentAttributes || [];

        // const attrUtilities: any[] =
        //     Helpers.getAttributes(
        //         apartment.attributes,
        //         Constants.DISPLAY_TYPE.UTILITIES
        //     ).apartmentAttributes || [];
        // let listUImg: any[] = this.getUImgView(attrUtilities);

        return (
            <Grid className="page-container">
                {/* {this.model.showProductCart && (
                    <Grid
                        className="card-product"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-once={true}
                        id="trigger-load"
                    >
                        <CardProduct
                            shopingCart={this.model.shopingCart}
                            onViewCart={this.controller.buyOnline}
                            onPayment={this.controller.buyOnline}
                            onExit={() => this.setModel({ showProductCart: false })}
                        />
                    </Grid>
                )} */}
                {/* Info */}
                <Grid className="standard-frame bg-white ">
                    <Grid className="wrap-img-item">
                        <Hidden smDown>
                            <Row className="wrapper-img-banner-apm">
                                <Grid className="img-banner-left"
                                    onClick={() => this.setModel({ isView: true, imageNumber: 0, urlImg: (apartmentPhotos?.[0] || Resources.Images.DEFAULT) })}>
                                    <Image loading={<CircularProgress style={{ color: 'var(--default-text-color-yellow)' }} />} style={{ width: '100%', height: '100%', objectFit: 'cover', paddingTop: '0', background: 'rgb(247 238 223)', borderRadius: '1.67rem 0 0 1.67rem' }} className="img-background cursor-pointer" src={apartmentPhotos?.[0] || Resources.Images.DEFAULT} />
                                </Grid>
                                <Grid className="img-banner-right bg-black">
                                    <Grid className="img-background-sub">
                                        <Image loading={<CircularProgress style={{ color: 'var(--default-text-color-yellow)' }} />} style={{ width: '100%', height: '100%', objectFit: 'cover', paddingTop: '0', background: 'rgb(247 238 223)', borderRadius: '0 1.67rem 1.67rem 0' }} onClick={() => this.setModel({ isView: true, imageNumber: 1, urlImg: apartmentPhotos[1] || Resources.Images.DEFAULT })} className="cursor-pointer" src={apartmentPhotos[1] || Resources.Images.DEFAULT} />
                                    </Grid>
                                    <Grid className="img-background-sub">
                                        <Image loading={<CircularProgress style={{ color: 'var(--default-text-color-yellow)' }} />} style={{ width: '100%', height: '100%', objectFit: 'cover', paddingTop: '0', background: 'rgb(247 238 223)', borderRadius: '0 1.67rem 1.67rem 0' }} onClick={() => this.setModel({ isView: true, imageNumber: 2, urlImg: apartmentPhotos[2] || Resources.Images.DEFAULT })} className="cursor-pointer" src={apartmentPhotos[2] || Resources.Images.DEFAULT} />
                                    </Grid>
                                </Grid>

                            </Row>
                        </Hidden>
                        <Hidden mdUp>
                            <Grid className="img-bg-mobile">
                                <Swiper pagination={pagination} className="pro-swiper" spaceBetween={10}>
                                    {apartmentPhotos.map((a: any) => {
                                        return (
                                            <SwiperSlide>
                                                <Image loading={<CircularProgress style={{ color: 'var(--default-text-color-yellow)' }} />} style={{ width: '100%', height: '100%', objectFit: 'cover', paddingTop: '0', background: 'rgb(247 238 223)' }} className="img-background" src={a || Resources.Images.DEFAULT} />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </Grid>
                        </Hidden>
                        <Grid className="wrapper-icon-banner-left">
                            <CircleIcon icon={Resources.Icon.CHEVRON_LEFT} onClick={() => this.history.go(-1)} />
                        </Grid>
                        <Grid className="wrapper-icon-banner-right">
                            <Tooltip title={Strings.Common.FAVORITE} placement="left" arrow>
                                <Grid>
                                    <CircleIcon
                                        onClick={() => { }}
                                        icon={GlobalState.listFavorite?.find((item: IFavorite) => item.projectId === this.model.apartment?.id) ? Resources.Icon.HEART_ACTIVE : Resources.Icon.HEART} />
                                </Grid>
                            </Tooltip>
                            <Tooltip title={Strings.Common.SHARE} placement="left" arrow>
                                <FacebookShareButton url={window.location.href}>
                                    <CircleIcon icon={Resources.Icon.UPLOAD} />
                                </FacebookShareButton>
                            </Tooltip>
                            {/* <Tooltip title={Strings.Common.VIEW_360} placement="left" arrow>
                                    {attrLink360?.[0]?.attributeValue ? 
                                        <a href={`${attrLink360?.[0]?.attributeValue ? attrLink360?.[0].attributeValue :null }`} target="_blank">
                                            <CircleIcon icon={Resources.Icon.DEGREE_360} />
                                        </a>
                                    :
                                    <Grid>
                                        <CircleIcon icon={Resources.Icon.DEGREE_360} />
                                    </Grid>
                                    }
                                </Tooltip> */}
                            {/* <Tooltip title={Strings.Common.VIEW_VIDEO} placement="left" arrow>
                                    <Grid onClick={()=>this.setModel({showModelVideo: true})}>
                                        <CircleIcon icon={Resources.Icon.YOUTUBE_LINEAL} />
                                    </Grid>
                                </Tooltip> */}
                            {/* {(this.model.listImg || [])?.length > 0 ?
                                <Grid
                                    className="d-flex img-number-container"
                                    onClick={() => {
                                        this.setModel({
                                            isView: true,
                                            imageNumber: 0
                                        });
                                    }
                                    }>
                                    <img src={Resources.Icon.IMAGE} />
                                    <Text className="img-number">{apartmentPhotos.length}</Text>
                                </Grid> : null
                            } */}
                        </Grid>
                    </Grid>
                    {/* Info Total */}
                    <Grid className="content-apm">
                        <Grid container >
                            <Grid item xs={12} md={8} className="content-attribute-apm">
                                <Grid className="apartment-container">
                                    <Text className="apartment-name wordWrap font-24 text-green">
                                        {apartment.title}
                                    </Text>
                                    {/* <Text className="type  ">
                                        Tên dự án: {(apartment?.projectName || "")}
                                    </Text> */}
                                    <Grid className="d-flex align-items-start mt-3">
                                        <img src={Resources.Icon.GREEN_MAP} />
                                        <Text >
                                            {`${apartment?.address?.addressLine}, ${apartment?.address?.wardName}, ${apartment?.address?.districtName}, ${apartment?.address?.provinceName}`}
                                        </Text>
                                    </Grid>
                                    {/* <Text className="apartment-id">{Strings.Aparment.ID} {apartment.code}</Text> */}
                                    <Grid className="project-price-container">
                                        <Text className="price-from">{Strings.Aparment.LISTED_PRICE}</Text>
                                        <img className="ml-1r" src={Resources.Icon.HELP} />
                                        <div className="ml-1r line-height-1 d-flex align-items-end">
                                            <Grid className="mr-4">
                                                {/* <CardPriceString number={[apartment.price || 0]} /> */}
                                                {apartment.price}
                                            </Grid>
                                            {/* <CardPriceString classNumber="text-dark font-18 line-height-1" number={[(apartment.listPrice || 0) / (apartment.area || 1)]} unit={Strings.Common.SQUARE_METTER} /> */}
                                        </div>
                                    </Grid>

                                    {/* <Text className=" mt-3 wordWrap">{apartment.categoryName}</Text> */}

                                    <Grid container className="mt-3 wrap-list-info-apartment">
                                        {/* Bath */}
                                        {apartment.bathroom ?
                                            <Grid item xs={3} className="wrap-info-apartment d-flex align-items-center">
                                                <img className="h-100" src={Resources.Icon.GREEN_BATH} />
                                                <Grid className="d-flex flex-column ml-3 wrap-info-apartment-details">
                                                    <Grid className="quanlity-info-apartment">
                                                        {apartment.bathroom}
                                                    </Grid>
                                                    <Grid className="text-info-apartment">
                                                        {Strings.Aparment.BATH}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            : null}
                                        {/* Bed */}
                                        {apartment.bedroom ?
                                            <Grid item xs={3} className="wrap-info-apartment d-flex align-items-center">
                                                <img className="h-100" src={Resources.Icon.GREEN_BED} />
                                                <Grid className="d-flex flex-column ml-3 wrap-info-apartment-details">
                                                    <Grid className="quanlity-info-apartment">
                                                        {apartment.bedroom}
                                                    </Grid>
                                                    <Grid className="text-info-apartment">
                                                        {Strings.Aparment.BED}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            : null}
                                        {/* Long */}
                                        {apartment.long ?
                                            <Grid item xs={3} className="wrap-info-apartment d-flex align-items-center">
                                                <img className="h-100" src={Resources.Icon.GREEN_LONG} />
                                                <Grid className="d-flex flex-column ml-3 wrap-info-apartment-details">
                                                    <Grid className="quanlity-info-apartment">
                                                        {apartment.long}{Strings.Common.METTER}
                                                    </Grid>
                                                    <Grid className="text-info-apartment">
                                                        {Strings.Aparment.LONG}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            : null}
                                        {/* Width */}
                                        {apartment.width ?
                                            <Grid item xs={3} className="wrap-info-apartment d-flex align-items-center">
                                                <img className="h-100" src={Resources.Icon.GREEN_WIDTH} />
                                                <Grid className="d-flex flex-column ml-3 wrap-info-apartment-details">
                                                    <Grid className="quanlity-info-apartment">
                                                        {apartment.width}{Strings.Common.METTER}
                                                    </Grid>
                                                    <Grid className="text-info-apartment">
                                                        {Strings.Aparment.WIDTH}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            : null}
                                        {/* Area */}
                                        {apartment.area ?
                                            <Grid item xs={3} className="wrap-info-apartment d-flex align-items-center">
                                                <img className="h-100" src={Resources.Icon.GREEN_SQUARE} />
                                                <Grid className="d-flex flex-column ml-3 wrap-info-apartment-details">
                                                    <Grid className="quanlity-info-apartment">
                                                        {apartment.area}{Strings.Common.SQUARE_METTER}
                                                    </Grid>
                                                    <Grid className="text-info-apartment">
                                                        {Strings.Aparment.AREA}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            : null}
                                        {/* Buildup Area */}
                                        {apartment.buildupArea ?
                                            <Grid item xs={3} className="wrap-info-apartment d-flex align-items-center">
                                                <img className="h-100" src={Resources.Icon.GREEN_BUILDUP_AREA} />
                                                <Grid className="d-flex flex-column ml-3 wrap-info-apartment-details">
                                                    <Grid className="quanlity-info-apartment">
                                                        {apartment.buildupArea}{Strings.Common.SQUARE_METTER}
                                                    </Grid>
                                                    <Grid className="text-info-apartment">
                                                        {Strings.Aparment.BUILDUP_AREA}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            : null}
                                        {/* Carpet Area */}
                                        {apartment.carpetArea ?
                                            <Grid item xs={3} className="wrap-info-apartment d-flex align-items-center">
                                                <img className="h-100" src={Resources.Icon.GREEN_CARPET_AREA} />
                                                <Grid className="d-flex flex-column ml-3 wrap-info-apartment-details">
                                                    <Grid className="quanlity-info-apartment">
                                                        {apartment.carpetArea}{Strings.Common.SQUARE_METTER}
                                                    </Grid>
                                                    <Grid className="text-info-apartment">
                                                        {Strings.Aparment.CARPET_AREA}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            : null}
                                        {/* Orientation */}
                                        {!Helpers.isNullOrEmpty(apartment.orientation) ?
                                            <Grid item xs={3} className="wrap-info-apartment d-flex align-items-center">
                                                <img className="h-100" src={Resources.Icon.GREEN_ORIENTATION} />
                                                <Grid className="d-flex flex-column ml-3 wrap-info-apartment-details">
                                                    <Grid className="quanlity-info-apartment">
                                                        {Helpers.getCodeName('orientation', apartment.orientation)}
                                                    </Grid>
                                                    <Grid className="text-info-apartment">
                                                        {Strings.Aparment.ORIENTATION}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            : null}

                                    </Grid>
                                    <Grid className="wrap-buttons-apartment d-md-none">
                                        <ControlButton
                                            id="buttonOnline"
                                            text={Strings.Common.PLACEHOLDER}
                                            image={Resources.Icon.SHOPPING_CART}
                                            onClick={() => { }}
                                        />
                                        <button
                                            className={`${this.model.showButtonBuyHeader ? 'active' : ''} button-placeholder-floating`}
                                            onClick={() => { }}
                                        >
                                            {Strings.Common.PLACEHOLDER}
                                        </button>
                                    </Grid>
                                </Grid>
                                {/* Menu property*/}
                                <Grid className="wrap-menu-property">
                                    <Grid className="list-horizontal">
                                        <Grid id="menu-list">
                                            {
                                                <Grid className={`menu-text text-dark ${0 === this.model.menuIndex ? "menu-text-active " : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 0 }); this.controller.scrollToBottom('general') }}>
                                                    {Strings.Aparment.GENERAL}
                                                </Grid>
                                            }
                                            {
                                                <Grid className={`menu-text text-dark ${1 === this.model.menuIndex ? "menu-text-active " : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 1 }); this.controller.scrollToBottom('utilities') }}>
                                                    {Strings.Aparment.ATTRIBUTE}
                                                </Grid>
                                            }
                                            {/* {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.LOCATION) ?
                                                <Grid className={`menu-text text-dark ${1 === this.model.menuIndex ? "menu-text-active" : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 1 }); this.controller.scrollToBottom('location') }}>
                                                    {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.LOCATION)}
                                                </Grid>
                                                : ''} */}
                                            {/* {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.PREMISES) ?
                                                <Grid className={`menu-text text-dark ${2 === this.model.menuIndex ? "menu-text-active " : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 2 }); this.controller.scrollToBottom('premises') }}>
                                                    {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.PREMISES)}
                                                </Grid>
                                                : ''}
                                            {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.UTILITIES) ?
                                                <Grid className={`menu-text text-dark  ${3 === this.model.menuIndex ? "menu-text-active " : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 3 }); this.controller.scrollToBottom('utilities') }}>
                                                    {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.UTILITIES)}
                                                </Grid>
                                                : ''} */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* General */}
                                <Grid id="general" >
                                    <Collapse title={Strings.Aparment.GENERAL}>
                                        <ReadMore>
                                            <Grid className="text-justify text-description">
                                                <Text>
                                                    <div dangerouslySetInnerHTML={{ __html: apartment.description }} />
                                                </Text>
                                            </Grid>
                                        </ReadMore>
                                    </Collapse>
                                </Grid>
                                <Grid id="attributes" >
                                    <Collapse title={Strings.Aparment.ATTRIBUTE}>
                                        <ReadMore>
                                            <Grid className="text-justify text-description">
                                                <Text>
                                                    <div dangerouslySetInnerHTML={{ __html: apartment.attributes }} />
                                                </Text>
                                            </Grid>
                                        </ReadMore>
                                    </Collapse>
                                </Grid>
                                {/* Location */}
                                {/* <Grid className="mt-2r" id="location">
                                    <Collapse
                                        title={this.controller.getValue(
                                            Constants.VALUE_KEY.TITLE,
                                            Constants.DISPLAY_TYPE.LOCATION
                                        )}
                                    >
                                        <Grid className="border-frame-padding">
                                            {attrLocation.length > 0 && attrLocation?.map((el) => {
                                                return (
                                                    <>
                                                        {(el.apartmentAttributePhotos || []).length > 0 ?
                                                            <Swiper navigation={true} spaceBetween={10} >
                                                                {el.apartmentAttributePhotos?.map((img: any) => {
                                                                    return (
                                                                        <SwiperSlide className="d-flex justify-content-center img-premises">
                                                                            <Image  loading={<CircularProgress style={{color: 'var(--default-text-color-yellow)'}}/>} style={{ width: '100%', height: '100%', objectFit: 'cover', paddingTop: '0', borderRadius: '24px'}} src={img.photoUrl || Resources.Images.DEFAULT} />
                                                                        </SwiperSlide>
                                                                    )
                                                                })}
                                                            </Swiper>
                                                            : null}
                                                    </>
                                                )
                                            })}
                                            <Row top={16} className="align-items-start">
                                                <img src={Resources.Icon.PIN} />
                                                <Text className="ml-1r">
                                                    <div dangerouslySetInnerHTML={{
                                                        __html: this.controller.getValue(
                                                            Constants.VALUE_KEY.ATTR_VALUE,
                                                            Constants.DISPLAY_TYPE.LOCATION
                                                        )
                                                    }} />
                                                </Text>
                                            </Row>
                                        </Grid>
                                    </Collapse>
                                </Grid> */}

                                {/* PREMISES */}
                                {/* <Grid className={this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.PREMISES) ? 'mt-2r' : 'd-none'} id="premises">
                                    <Collapse
                                        title={this.controller.getValue(
                                            Constants.VALUE_KEY.TITLE,
                                            Constants.DISPLAY_TYPE.PREMISES
                                        )}
                                    >
                                        <Grid className="border-frame-padding">
                                            {attrPremises.length > 0 && attrPremises?.map((el)=>{
                                                return (
                                                    <>
                                                        {(el.apartmentAttributePhotos || []).length > 0 ?
                                                            <Swiper spaceBetween={10} navigation={true} >
                                                                {el.apartmentAttributePhotos?.map((img: any) => {
                                                                    return (
                                                                        <SwiperSlide className="d-flex justify-content-center img-premises">
                                                                            <Image  loading={<CircularProgress style={{color: 'var(--default-text-color-yellow)'}}/>} style={{ width: '100%', height: '100%', objectFit: 'cover', paddingTop: '0', borderRadius: '24px'}} src={img.photoUrl || Resources.Images.DEFAULT} />
                                                                        </SwiperSlide>
                                                                    )
                                                                })}
                                                            </Swiper>
                                                        : null}
                                                    </>
                                                )
                                            })}
                                            <Row top={16} className="align-items-start">
                                                <img src={Resources.Icon.GREEN_DEGREE} />
                                                <Text className="ml-1r">
                                                    <div dangerouslySetInnerHTML={{
                                                        __html: this.controller.getValue(
                                                            Constants.VALUE_KEY.ATTR_VALUE,
                                                            Constants.DISPLAY_TYPE.PREMISES,
                                                        )
                                                    }} />
                                                </Text>
                                            </Row>
                                        </Grid>
                                    </Collapse>
                                </Grid> */}
                                {/* Utilitied */}
                                {/* <Grid className={this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.UTILITIES) ? 'mt-2r' : 'd-none'}  id="utilities">
                                    <TitleLink nameTitle={this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.UTILITIES)}/>
                                    {attrUtilities.length > 0 && (
                                        <Swiper {...sliderUtilities} >
                                            {attrUtilities.reverse().map((utilitie, index: number) => {
                                                return (
                                                    <SwiperSlide key={utilitie.id}>
                                                        <Grid className="wrapper-utilities">
                                                            <PreviewImg onClick={() => this.setModel({
                                                             imageNumber: index,
                                                             isShowViewImg: true
                                                            })}>
                                                             <img
                                                                 src={(utilitie?.apartmentAttributePhotos || [])?.[0]
                                                                     ?.photoUrl || Resources.Images.DEFAULT}
                                                             />
                                                            </PreviewImg>
                                                            <Text className="type-utilities">
                                                                {Helpers.getName(utilitie?.attributeValue,utilitie?.attributeValueContents)}
                                                            </Text>
                                                        </Grid> 
                                                    </SwiperSlide>
                                                );
                                            })}
                                        </Swiper>
                                    )}
                                </Grid> */}

                            </Grid>
                            {/* disposit */}
                            {/* <Hidden smDown>
                                <Grid item md={4} className="position-relative">
                                    <Grid className="form-search-project">
                                        <Grid className="search-content" key={this.model.keyIndex}>
                                            <ControlButton
                                                text={Strings.Common.PLACEHOLDER}
                                                image={Resources.Icon.SHOPPING_CART}
                                                onClick={()=>{}}
                                            />

                                            <Grid className="search-title" >
                                                {Strings.Aparment.REQUEST_COUNSELLING}
                                            </Grid>
                                            <Inputs
                                                defaultValue={this.model.fullName?.value}
                                                required
                                                errorMessage={this.model.fullName?.error}
                                                label={Strings.Common.FISTNAME}
                                                onChangeValue={(value) =>
                                                    this.setModel({ fullName: { value } })
                                                }
                                            />
                                            <Inputs
                                                defaultValue={this.model.phoneNumber?.value}
                                                required
                                                label={Strings.Common.PHONE_NUMBER}
                                                errorMessage={this.model.phoneNumber?.error}
                                                onChangeValue={(value) =>
                                                    this.setModel({ phoneNumber: { value } })
                                                }
                                            />
                                            <Inputs
                                                defaultValue={this.model.email?.value}
                                                required
                                                errorMessage={this.model.email?.error}
                                                label={Strings.Common.EMAIL}
                                                onChangeValue={(value) =>
                                                    this.setModel({ email: { value } })
                                                }
                                            />
                                            <Inputs
                                                defaultValue={this.model.description?.value}
                                                label={Strings.Common.MESSAGE}
                                                onChangeValue={(value) =>
                                                    this.setModel({ description: { value } })
                                                }
                                            />
                                            <button
                                                className="btn-search-project"
                                                onClick={this.controller.onsubmitAdvisory}
                                            >
                                                {Strings.Common.SEND_REQUEST}
                                            </button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Hidden> */}
                        </Grid>
                    </Grid>
                </Grid>
                {/* Similar products */}
                <Grid className="wrap-item-care" >
                    <Grid className="standard-frame">
                        {apartments.length > 0 && (
                            <CardSliderAparment lengthCard={apartments.length} nameTitle={Strings.Aparment.SAME_PRODUCTS}>
                                {apartments.map((apartment, index) => {
                                    return (
                                        <SwiperSlide
                                            className="swiper-card-project"
                                            key={index + "a"}
                                        >
                                            <CardApartment
                                                onClick={() => this.history.push({ pathname: Screens.APARTMENT, search: `?&id=${apartment.id}` })}
                                                onClickLike={() => {}}
                                                apartment={apartment}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                                <SwiperSlide className="view-all-card" >
                                    <Link color="inherit" className="cursor-pointer" to={`${Screens.LISTING_APARTMENT}?types=${this.model.apartment?.type}`}>
                                        {Strings.Common.VIEW_ALL}
                                    </Link>
                                </SwiperSlide>

                            </CardSliderAparment>
                        )}
                    </Grid>
                </Grid>
                
                {/* Img Apartment */}
                <ImgView imgList={this.model.listImg}
                    curImg={this.model.imageNumber}
                    viewerIsOpen={this.model.isView} onClose={(value) => this.setModel({ isView: value })} />
                {/* Img Project */}
                {/* <ImgView imgList={listUImg}
                curImg={this.model.imageNumber}
                viewerIsOpen={this.model.isShowViewImg} onClose={(value)=>this.setModel({isShowViewImg: value})}/> */}
            </Grid>
        );
    }
}
