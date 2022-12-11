import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import { ProjectModel } from "../../models";
import { ProjectService } from "../../services";
import { ProjectController } from "../../controllers/project";
import {
    ControlButton,
    Col,
    Row,
    Collapse,
    ReadMore,
    CircleIcon,
    CardApartment,
    Separator,
    Text,
    CardPriceString,
    PreviewImg,
    TitleLink,
} from "../../../components";
import "../../../commons/styles/ProjectStyles.css";
import "../../../commons/styles/Styles.css";
import { Constants, Resources, Screens, Strings } from "../../../constants";
import { CircularProgress, Grid, Hidden, Tooltip } from "@material-ui/core";
import CustomModal from "../../../components/CustomModal";
import { GlobalState } from "../../../stores/GlobalState";
import Inputs from "../../../components/Inputs";
import CardSliderAparment from "../../../components/CardSlickApartment";
import { Helpers, IFavorite } from "../../../commons/utils";
import CardProject from "../../../components/CardProject";
import Viewer from "react-viewer";
import ReactPlayer from "react-player";
import { FacebookShareButton } from "react-share";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'material-ui-image';
import SwiperCore, {
    Pagination,
  } from 'swiper/core';
import { Link } from "react-router-dom";
import ImgView from "../../../components/ImgView";
SwiperCore.use([Pagination]);


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
export default class ProjectView extends BaseView<ProjectController, ProjectModel, ProjectService> {

    constructor(props: any) {
        super(props, ProjectController, ProjectModel, ProjectService);
    }

    getUImgView(listImg: Array<any>){
        let result: Array<any> = [];
        listImg.forEach(el => {
            result.push({
                src: el?.projectAttributePhotos?.[0]?.photoUrl,
                caption: el?.attributeValue
            })
        })
        return result;
    }

    getImgView(listImg: Array<any>) {
        let result: Array<any> = [];
        listImg.forEach(el => {
            result.push(
                el?.photoUrl
            )
        })
        return result;
    }

    public renderPage() {
        const pagination = {
            "clickable": true,
        }
        const project: any = this.model.project || {};
        const projectPhotos: any[] = project.projectPhotos || [];
        const attrInfo: any[] = Helpers.getAttributes(project.attributes, Constants.DISPLAY_TYPE.INFO).projectAttributes || [];
        const attrUtilities: any[] = Helpers.getAttributes(project.attributes, Constants.DISPLAY_TYPE.UTILITIES).projectAttributes || [];
        const attrPremises: any[] = Helpers.getAttributes(project.attributes, Constants.DISPLAY_TYPE.PREMISES).projectAttributes || [];
        const attrLocation: any[] = Helpers.getAttributes(project.attributes, Constants.DISPLAY_TYPE.LOCATION).projectAttributes || [];
        const attrLink360: any[] = Helpers.getAttributes(project.attributes, Constants.DISPLAY_TYPE.LINK_360).projectAttributes || [];
        const attrLinkProject: any[] = Helpers.getAttributes(project.attributes, Constants.DISPLAY_TYPE.LINK_PROJECT).projectAttributes || [];
        const attrLinkYoutube: any[] = Helpers.getAttributes(project.attributes, Constants.DISPLAY_TYPE.LINK_YOUTUBE).projectAttributes || [];
        const attrInvestmentOwner: any[] = Helpers.getAttributes(project.attributes, Constants.DISPLAY_TYPE.INVESTMENT_OWNER).projectAttributes || [];
        const attrDoc: any[] = Helpers.getAttributes(project.attributes, Constants.DISPLAY_TYPE.DOCUMENT).projectAttributes || [];
        const minPrice = project.minPrice || 0;
        const maxPrice = project.maxPrice || 0;
        // let listUImg: any[] = this.getUImgView(attrUtilities);

        return (
            <Grid className="page-container">
                {/* <HomeHeader /> */}
                <Grid className=" standard-frame bg-white">
                    {/* background image */}
                    <Grid className="wrap-img-item">
                        <Hidden smDown>
                            <Row className="wrapper-img-banner-apm">
                                <Grid className="img-banner-left"
                                    onClick={() => this.setModel({ isView: true, imageNumber: 0, urlImg: projectPhotos?.[0]?.photoUrl || Resources.Images.DEFAULT})}>
                                    <Image 
                                        loading={ <CircularProgress style={{color: 'var(--default-text-color-yellow)'}}/>} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', paddingTop: '0', background: 'rgb(247 238 223)', borderRadius: '1.67rem 0 0 1.67rem' }} 
                                        className="img-background cursor-pointer" 
                                        src={projectPhotos?.[0]?.photoUrl || Resources.Images.DEFAULT} 
                                    />
                                </Grid>
                                <Grid className="img-banner-right bg-black">
                                    <Grid className="img-background-sub">
                                        <Image 
                                            loading={<CircularProgress style={{color: 'var(--default-text-color-yellow)'}}/>} 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', paddingTop: '0', background: 'rgb(247 238 223)',borderRadius: '0 1.67rem 1.67rem 0'  }} 
                                            onClick={() => this.setModel({ isView: true, imageNumber: 1 , urlImg: projectPhotos[1]?.photoUrl || Resources.Images.DEFAULT })}
                                            className="cursor-pointer" src={projectPhotos[1]?.photoUrl || Resources.Images.DEFAULT} 
                                        />
                                    </Grid>

                                    <Grid className="img-background-sub">
                                        <Image 
                                            loading={<CircularProgress style={{color: 'var(--default-text-color-yellow)'}}/>} 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', paddingTop: '0', background: 'rgb(247 238 223)',borderRadius: '0 1.67rem 1.67rem 0' }} 
                                            onClick={() => this.setModel({ isView: true, imageNumber: 2, urlImg: projectPhotos[2]?.photoUrl || Resources.Images.DEFAULT })} 
                                            className="cursor-pointer" src={projectPhotos[2]?.photoUrl || Resources.Images.DEFAULT} 
                                        />
                                    </Grid>

                                </Grid>
                            </Row>
                        </Hidden>
                        <Hidden mdUp >
                            <Grid className="img-bg-mobile">
                                <Swiper className="pro-swiper" pagination={pagination}   spaceBetween={10}>
                                    {projectPhotos.map((a: any)=> {
                                        return(
                                            <SwiperSlide>
                                                <Image loading={<CircularProgress style={{color: 'var(--default-text-color-yellow)'}}/>} style={{ width: '100%', height: '100%', objectFit: 'cover', paddingTop: '0', background: 'rgb(247 238 223)' }} className="img-background" src={a.photoUrl || Resources.Images.DEFAULT} />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </Grid>
                        </Hidden>
                        <Grid className="wrapper-icon-banner-left ">
                            <CircleIcon icon={Resources.Icon.CHEVRON_LEFT} onClick={() => this.history.go(-1)} />
                        </Grid>
                        <Grid className="wrapper-icon-banner-right">
                            <Tooltip title={Strings.Common.FAVORITE} placement="left" arrow>
                                <Grid>
                                    <CircleIcon
                                        onClick={() => {}}
                                        icon={GlobalState.listFavorite?.find((item: IFavorite) => item.projectId === this.model.project?.id) ? Resources.Icon.HEART_ACTIVE : Resources.Icon.HEART} />
                                </Grid>
                            </Tooltip>
                            <Tooltip title={Strings.Common.SHARE} placement="left" arrow>
                                <FacebookShareButton url={window.location.href}>
                                    <CircleIcon icon={Resources.Icon.UPLOAD} />
                                </FacebookShareButton>
                            </Tooltip>
                            <Tooltip title={Strings.Common.VIEW_360} placement="left" arrow>
                                {attrLink360?.[0]?.attributeValue ?
                                    <a href={`${attrLink360?.[0]?.attributeValue ? attrLink360?.[0].attributeValue : null}`} target="_blank">
                                        <CircleIcon icon={Resources.Icon.DEGREE_360} />
                                    </a>
                                    :
                                    <Grid>
                                        <CircleIcon icon={Resources.Icon.DEGREE_360} />
                                    </Grid>
                                }
                            </Tooltip>
                            <Tooltip title={Strings.Common.VIEW_VIDEO} placement="left" arrow>
                                <Grid onClick={() => this.setModel({ showModelVideo: true })}>
                                    <CircleIcon icon={Resources.Icon.YOUTUBE_LINEAL} />
                                </Grid>
                            </Tooltip>
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
                                    <Text className="img-number">{projectPhotos.length}</Text>
                                </Grid> : null
                            } */}
                        </Grid>
                    </Grid>
                    <Grid className="content-apm">
                        <Grid container >
                            {/* form info */}
                            <Grid item xs={12} md={8}>
                                {/* basic info */}
                                <Grid className="project-container">
                                    <Grid className="project-banner-container">
                                        <Text className="banner-t">{Helpers.getCodeName('status', this.model.project?.status)}</Text>
                                    </Grid>
                                    <Row className="type-container">
                                        <Text className="type">{Helpers.getCodeName('type', this.model.project?.type)}</Text>
                                    </Row>
                                    <Text className="apartment-name wordWrap">
                                        {attrLinkProject?.[0]?.attributeValue ?
                                            <a href={`${attrLinkProject?.[0]?.attributeValue ? attrLinkProject?.[0].attributeValue : null}`} target="_blank">
                                                {Helpers.getName(project.projectName, project.nameContents)}
                                            </a>
                                            :
                                            <Grid>
                                                {Helpers.getName(project.projectName, project.nameContents)}
                                            </Grid>
                                        }
                                    </Text>
                                    <Grid container className="align-items-center mt-1dot5r">
                                        {(minPrice > 0 && maxPrice > 0) ?
                                            <Grid item xs={12} sm={6}>
                                                <Row className="project-price-container " data-aos="flip-up" data-aos-duration="1000" data-aos-once={true}>
                                                    <Text className="price-from">{Strings.Project.PRICE_FROM}</Text>
                                                    <img className="ml-1r" src={Resources.Icon.HELP} />
                                                    <div className="ml-1r">
                                                        {maxPrice === minPrice ?
                                                            <CardPriceString number={[maxPrice]} unit={Strings.Common.SQUARE_METTER} />
                                                            :
                                                            <CardPriceString number={[minPrice, maxPrice]} unit={Strings.Common.SQUARE_METTER} />
                                                        }

                                                    </div>
                                                    <Text className="ml-1r unit"></Text>
                                                </Row>
                                            </Grid> :
                                            <Grid className="text-yellow">
                                                {Strings.Project.PRICE_REPORT}
                                            </Grid>
                                        }
                                    </Grid>
                                    <Hidden mdUp >
                                        <ControlButton
                                            id="buttonPlaceholder"
                                            top={24}
                                            text={Strings.Common.PLACEHOLDER}
                                            image={Resources.Icon.RESERVATION}
                                            onClick={() =>{}}
                                        />
                                        <button
                                            className={`${this.model.showButtonDepositHeader ? 'active' : ''} button-placeholder-floating`}
                                            onClick={() =>{}}
                                        >
                                            {Strings.Common.PLACEHOLDER}
                                        </button>
                                    </Hidden>
                                </Grid>
                                <Grid className="wrap-menu-property">
                                    <Grid className="list-horizontal">
                                        <Grid id="menu-list">
                                            {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.GENERAL) ?
                                                <Grid className={`menu-text text-dark ${0 === this.model.menuIndex ? "menu-text-active " : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 0 }); this.controller.scrollToBottom('#frame1') }}>
                                                    {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.GENERAL)}
                                                </Grid>
                                                : ''}

                                            {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.INFO) ?
                                                <Grid className={`menu-text text-dark  ${1 === this.model.menuIndex ? "menu-text-active " : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 1 }); this.controller.scrollToBottom('#frame2') }}>
                                                    {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.INFO)}
                                                </Grid>
                                                : ''}
                                            {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.LOCATION) ?
                                                <Grid className={`menu-text text-dark ${2 === this.model.menuIndex ? "menu-text-active" : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 2 }); this.controller.scrollToBottom('#frame3') }}>
                                                    {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.LOCATION)}
                                                </Grid>
                                                : ''}
                                            {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.UTILITIES) ?
                                                <Grid className={`menu-text text-dark ${3 === this.model.menuIndex ? "menu-text-active" : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 3 }); this.controller.scrollToBottom('#frame4') }}>
                                                    {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.UTILITIES)}
                                                </Grid>
                                                : ''}

                                            {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.PREMISES) ?
                                                <Grid className={`menu-text text-dark ${4 === this.model.menuIndex ? "menu-text-active" : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 4 }); this.controller.scrollToBottom('#frame5') }}>
                                                    {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.PREMISES)}
                                                </Grid>
                                                : ''}
                                            {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.INVESTMENT_OWNER) ?
                                                <Grid className={`menu-text text-dark ${5 === this.model.menuIndex ? "menu-text-active" : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 5 }); this.controller.scrollToBottom('#frame6') }}>
                                                    {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.INVESTMENT_OWNER)}
                                                </Grid>
                                                : ''}
                                            {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.DOCUMENT) ?
                                                <Grid className={`menu-text text-dark ${6 === this.model.menuIndex ? "menu-text-active" : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 6 }); this.controller.scrollToBottom('#frame7') }}>
                                                    {this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.DOCUMENT)}
                                                </Grid>
                                                : ''}
                                            {(this.model.apartments || [])?.length > 0 ?
                                                <Grid className={`menu-text text-dark ${7 === this.model.menuIndex ? "menu-text-active" : ""}`}
                                                    onClick={() => { this.setModel({ menuIndex: 7 }); this.controller.scrollToBottom('#frame8') }}>
                                                    {Strings.Aparment.PRODUCT}
                                                </Grid>
                                                : ''}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* GENERAL - tổng quan */}
                                <Grid className={this.controller.getValue(Constants.VALUE_KEY.ATTR_VALUE, Constants.DISPLAY_TYPE.GENERAL) ? "mt-2r" : "d-none"} id="#frame1" >
                                    <Collapse title={this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.GENERAL)} >
                                        <ReadMore>
                                            <Grid className="text-justify text-description">
                                                <Text>
                                                    <div dangerouslySetInnerHTML={{ __html: this.controller.getValue(Constants.VALUE_KEY.ATTR_VALUE, Constants.DISPLAY_TYPE.GENERAL) }} />
                                                </Text>
                                            </Grid>
                                        </ReadMore>
                                    </Collapse>
                                </Grid>
                                {/* INFO- Quy mô */}
                                <Grid className={attrInfo.length > 0 ? "mt-2r" : "d-none"} id="#frame2">
                                    <Collapse title={this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.INFO)}>
                                        {attrInfo.map((item, index) => {
                                            return (
                                                <Grid key={item.id}>
                                                    <Row className="wrapper-project-sizing">
                                                        <Col className="wrapper-project-sizing-type align-items-start d-flex ">
                                                            <img className="img-16 mr-2" src={item?.projectAttributePhotos?.[0]?.photoUrl || Resources.Icon.LEAVES} />
                                                            <Text className="key">
                                                                {Helpers.getName(item?.attributeValueTitle,item?.attributeValueTitleContents)}
                                                            </Text>
                                                        </Col>
                                                        <Col>
                                                            <Text className="i-value">
                                                                {Helpers.getName(item?.attributeValue,item?.attributeValueContents)}
                                                            </Text>
                                                        </Col>
                                                    </Row>
                                                    {index < attrInfo.length - 1 ? <Separator top={20} bottom={20} /> : null}
                                                </Grid>
                                            )
                                        })}
                                    </Collapse>
                                </Grid>
                                {/* LOCATION- vị trí */}
                                <Grid className={this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.LOCATION) ? 'mt-2r' : 'd-none'} id="#frame3">
                                    <Collapse title={this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.LOCATION)}>
                                        <Grid>
                                            {attrLocation.length > 0 && attrLocation?.map((el) => {
                                                /* console.log(el.projectAttributePhotos) */
                                                return (
                                                    <>
                                                        {(el.projectAttributePhotos || []).length > 0 ?
                                                            <Swiper navigation={true} spaceBetween={10}>
                                                                {el.projectAttributePhotos?.map((img: any) => {
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
                                                    <div dangerouslySetInnerHTML={{ __html: this.controller.getValue(Constants.VALUE_KEY.ATTR_VALUE, Constants.DISPLAY_TYPE.LOCATION) }} />
                                                </Text>
                                            </Row>
                                        </Grid>
                                    </Collapse>
                                </Grid>
                                {/* UTILITIES- tiện ích */}
                                <Grid className={this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.UTILITIES) ? 'mt-2r' : 'd-none'} id="#frame4">
                                    <TitleLink nameTitle={this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.UTILITIES)}/>
                                    {attrUtilities.length > 0 && (
                                        <Swiper {...sliderUtilities} >
                                            {attrUtilities?.map((utilitie, index:number) => {
                                                return (
                                                    <SwiperSlide key={utilitie.id}>
                                                        <Grid className="wrapper-utilities">
                                                        
                                                            <PreviewImg onClick={() => this.setModel({
                                                                imageNumber: index,
                                                                isShowViewImg: true
                                                                })                                          
                                                            }>
                                                                <img
                                                                    src={(utilitie?.projectAttributePhotos || [])?.[0]
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
                                </Grid>
                                {/*PREMISES Mặt bằng*/}
                                <Grid className={this.controller.getValue(Constants.VALUE_KEY.TITLE, Constants.DISPLAY_TYPE.PREMISES) ? 'mt-2r' : 'd-none'} id="#frame5">
                                    <Collapse
                                        title={this.controller.getValue(
                                            Constants.VALUE_KEY.TITLE,
                                            Constants.DISPLAY_TYPE.PREMISES
                                        )}
                                    >
                                        <Grid >
                                            {attrPremises.length > 0 && attrPremises?.map((el) => {
                                                return (
                                                    <>
                                                        {(el.projectAttributePhotos || []).length > 0 ?
                                                            <Swiper spaceBetween={10} navigation={true} >
                                                                {el.projectAttributePhotos?.map((img: any) => {
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
                                            <Row top={16} className="align-items-center">
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
                                </Grid>
                                {/* owner-CHỦ ĐẦU TƯ  */}
                                <Grid className={attrInvestmentOwner.length > 0 ? "mt-2r" : 'd-none'} id="#frame6">
                                    <Collapse title={Strings.Project.INVESTOR}>
                                        <Grid className="border-frame-padding">
                                            {attrInvestmentOwner.map((investmentOwner, index) => {
                                                return (
                                                    <Row top={index === 0 ? 0 : 16} className="invest-container" key={investmentOwner.id}>
                                                        <Grid className="invest-img-container">
                                                            <img className="invest-img" src={(investmentOwner?.projectAttributePhotos || [])?.[0]?.photoUrl || Resources.Images.DEFAULT} />
                                                        </Grid>
                                                        <Col bottom={16} left={16}>
                                                            <Text className="invest-owner-name mt-1r wordWrap">
                                                                {Helpers.getName(investmentOwner?.attributeValueTitle,investmentOwner?.attributeValueTitleContents)}
                                                            </Text>
                                                            <Text className="invest-job mt-1r wordWrap">
                                                                {Helpers.getName(investmentOwner?.attributeValue,investmentOwner?.attributeValueContents)}
                                                            </Text>
                                                        </Col>
                                                    </Row>
                                                )
                                            })}
                                        </Grid>
                                    </Collapse>
                                </Grid>
                                {/* document-tài liệu */}
                                <Grid className={attrDoc.length ? "mt-2r" : 'd-none'} id="#frame7">
                                    <Collapse title={Strings.Project.DOCUMENT} id="triger-6">
                                        <Grid className="border-frame-padding">
                                            {attrDoc.map((doc, index) => {
                                                return (
                                                    <Row key={doc.id} top={index === 0 ? 16 : 12} className="doc-container">
                                                        <img className="doc-icon" src={Resources.Icon.DOC} />
                                                        <Grid className="d-flex justify-content-between w-100 align-items-center">
                                                            <Text className="doc-text wordWrap">
                                                                {doc.attributeValueContents?.find((element: any) => element.language === GlobalState.language)?.value}
                                                            </Text>
                                                            <Grid className="d-flex align-items-center">
                                                                <a download
                                                                    href={`${Constants.Api.BASE_ASSETS_URL}${doc.attributeValue}`} >{Strings.Common.DOWN_DOCUMENT}
                                                                    <img className="ml-1r" src={Resources.Icon.DOWNLOAD} />
                                                                </a>
                                                            </Grid>
                                                        </Grid>
                                                    </Row>
                                                )
                                            })}
                                        </Grid>
                                    </Collapse>
                                </Grid>
                            </Grid>
                            {/* form deposit */}
                            <Hidden smDown>
                                <Grid item md={4} className="position-relative">
                                    <Grid className="form-search-project">
                                        <Grid className="search-content" key={this.model.keyIndex}>
                                            <ControlButton
                                                id="buttonPlaceholder"
                                                text={Strings.Common.PLACEHOLDER.toUpperCase()}
                                                image={Resources.Icon.RESERVATION}
                                                onClick={()=>{}}
                                            />
                                            <Separator top={16} bottom={16} />
                                            <Grid className="search-title">
                                                {Strings.Project.REQUEST_COUNSELLING}
                                            </Grid>
                                            <Inputs
                                                defaultValue={this.model.fullName?.value}
                                                required
                                                label={Strings.Common.FULLNAME}
                                                errorMessage={this.model.fullName?.error}
                                                onChangeValue={(value) => this.setModel({ fullName: { value } })} />
                                            <Inputs
                                                required
                                                label={Strings.Common.PHONE_NUMBER}
                                                errorMessage={this.model.phoneNumber?.error}
                                                onChangeValue={(value) => this.setModel({ phoneNumber: { value } })} />
                                            <Inputs
                                                required
                                                label={Strings.Common.EMAIL}
                                                errorMessage={this.model.email?.error}
                                                onChangeValue={(value) => this.setModel({ email: { value } })} />
                                            <Inputs
                                                label={Strings.Project.MES}
                                                onChangeValue={(value) => this.setModel({ description: { value } })} />
                                            <button className="btn-search-project" onClick={this.controller.onsubmitAdvisory}>
                                                {Strings.Common.SEND_REQUEST}
                                            </button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Hidden>
                        </Grid>
                        {/* apartment */}
                        {(this.model.apartments || []).length > 0 && (
                            <Grid className="wrap-item-care" id="#frame8">
                                <Grid className="standard-frame apartments-of-project">
                                    <CardSliderAparment nameTitle={Strings.Project.ITEM_PROJECT} lengthCard={(this.model.apartments?.length || 0) + 1}>
                                        {this.model.apartments?.map((apartment, index) => {
                                            return (
                                                <SwiperSlide
                                                    className="swiper-card-project"
                                                    key={index + "a"}
                                                >
                                                    <CardApartment
                                                        onClick={() => {
                                                            this.history.push({ pathname: Screens.APARTMENT, search: `?&id=${apartment.id}` })
                                                        }}
                                                        onClickLike={() => {}}
                                                        apartment={apartment}
                                                        voucherName={Strings.Common.VOUCHER_NAME}
                                                        remainDate={2}
                                                    />
                                                </SwiperSlide>
                                            );
                                        })}
                                        <SwiperSlide className="view-all-card" >
                                            <Link color="inherit" className="cursor-pointer" to={`${Screens.LISTING_APARTMENT}?projectId=${this.model.project?.id}`}>
                                                {Strings.Common.VIEW_ALL}
                                            </Link>
                                        </SwiperSlide>
                                    </CardSliderAparment>
                                </Grid>
                            </Grid>
                        )}
                        {/* Projects */}
                        <Grid style={{ margin: '5.33rem 0rem' }}>
                            {(this.model.projects || [])?.length > 0 && (
                                <CardSliderAparment nameTitle={Strings.Project.SAME_PRODUCTS} lengthCard={(this.model.projects?.length || 0) + 1}>
                                    {this.model.projects?.map((projectItem, index) => {
                                        const photos: any[] = projectItem.projectPhotos || [];
                                        return (
                                            <SwiperSlide key={`projects ${index}`} className="swiper-card-project">
                                                <CardProject
                                                    maxPrice={projectItem.maxPrice || 0}
                                                    minPrice={projectItem.minPrice || 0}
                                                    imageProject={photos?.[0]?.photoUrl || Resources.Images.DEFAULT}
                                                    nameProject={Helpers.getName(projectItem.name, projectItem.nameContents)}
                                                    typeProject={projectItem.type}
                                                    onClick={() =>{}}
                                                    onClickLike={() => {}}
                                                    id={projectItem.id || ''}
                                                    status={projectItem.constructionStatus}
                                                    isHighlight={projectItem.isHighlight}
                                                    addressFull={projectItem.addressFull}
                                                    scale={project?.scale}
                                                />
                                            </SwiperSlide>
                                        )
                                    })}
                                    <SwiperSlide className="view-all-card" >
                                        <Link color="inherit" className="cursor-pointer" to={`${Screens.LISTING_PROJECT}?types=${this.model.project?.type}`}>
                                            {Strings.Common.VIEW_ALL}
                                        </Link>
                                    </SwiperSlide>
                                </CardSliderAparment>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
                {/* Modal View video */}
                <CustomModal
                    sizeModal="large"
                    show={this.model.showModelVideo || false}
                    onClose={(value) => {
                        this.setModel({ showModelVideo: value });
                    }}
                >
                    <Grid className="view-video-youtube">
                        {attrLinkYoutube?.[0]?.attributeValue ?
                            <ReactPlayer controls className="w-100 h-100" url={`${attrLinkYoutube?.[0]?.attributeValue ? attrLinkYoutube?.[0].attributeValue : null}`} />
                            :
                            <h2 className="text-yellow">
                                {Strings.Common.NO_VIDEO_YET}
                            </h2>
                        }
                    </Grid>
                </CustomModal>
                {/* Img Project */}
                <ImgView imgList={this.model.listImg}
                curImg={this.model.imageNumber}
                viewerIsOpen={this.model.isView} onClose={(value)=>this.setModel({isView: value})}/>

                {/* Img UTILITIES */}
                <ImgView imgList={[]}
                curImg={this.model.imageNumber}
                viewerIsOpen={this.model.isShowViewImg} onClose={(value)=>this.setModel({isShowViewImg: value})}/>
            </Grid >
        );
    }

}
