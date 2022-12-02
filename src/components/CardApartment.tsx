import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../commons/styles/HomeHeaderStyles.css";
import { Resources, Screens, Strings } from "../constants";
import Text from "./Text";
import { CircularProgress, Grid, Tooltip } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Helpers, IApartment, IFavorite } from "../commons/utils";
import { GlobalState } from "../stores/GlobalState";
import { CardPriceString } from ".";
import Image from 'material-ui-image'
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    cardApartment: {
        height: '33rem',
        width: `310px`,
        border: `1px solid #E9E9E9`,
        position: `relative`,
        borderRadius: `2rem`,
        boxShadow: `rgb(17 17 26 / 19%) 0px 20px 30px -20px`,
        backgroundColor: "white"
    },
    "@media (max-width: 320px)": {
        cardApartment: {
            width: '250px',
        },
    },
    imgApartment: {
        height: `16rem`,
        width: `100%`,
        borderRadius: `24px`,
        padding: `0.3rem`,
    },
    imgLike: {
        position: `absolute`,
        right: `0.8rem`,
        top: `0.8rem`,
        padding: `0.5rem`,
        opacity: `0.8`,
        borderRadius: `50%`,
        width: `auto !important`,
        fontSize: '3.2rem',
        color: '#fff',
    },
    apartmentType: {
        fontSize: "var(--default-18px)",
        fontStyle: `normal`,
        lineHeight: `16px`,
        display: `flex`,
        alignItems: `center`,
        color: `#C98511`,
        cursor: 'pointer',
        fontFamily: 'var(--default-font-600)',
    },
    apartmentName: {
        fontStyle: `normal`,
        fontWeight: 700,
        fontSize: "var(--default-20px)",
        // lineHeight: `20px`,
        display: `flex`,
        // alignItems: `center`,
        letterSpacing: `-0.444444px`,
        color: `#36393B`,
        marginBottom: `0.5rem`,
        marginTop: `0.67rem`,
        fontFamily: 'var(--default-font-600)',
        height: '30px',
        '& span': {
            maxWidth: 'var(--sectionWidth)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        }

    },
    apartmentPrice: {
        fontStyle: `normal`,
        lineHeight: `32px`,
        fontSize: "var(--default-20px)",
        color: `var(--default-text-color-yellow)`,
        fontWeight: 'bold',
    },
    apartmentBox: {
        height: '16rem',
        padding: `1.33rem`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    promoTextContainer: {
        zIndex: 1,
        marginTop: "2.83rem",
        position: "absolute",
        bottom: "2rem"
    },
    promoBanner: {
        backgroundImage: `url(${Resources.Images.PROMOTION_BANNER})`,
        width: "26rem",
        backgroundSize: "contain",
        height: "4rem",
        marginTop: "var(--default-18px)",
        padding: "var(--default-16px)",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        display: "flex"
    },
    voucher: {
        fontSize: "var(--default-14px)",
        fontWeight: 600,
    },
    remainDate: {
        fontSize: "var(--default-14px)",
        fontWeight: 400,
        color: "#D44333"
    },
    justifyEnd: {
        justifyContent: "flex-end"
    },
    iconStatus: {
        width: '2rem',
        marginRight: '0.5rem'
    },
    iconStatusHot: {
        width: '2rem',
        marginRight: '0.5rem',
        position: 'absolute',
        top: '1rem',
        left: '1rem'
    },
    textContent: {
        maxWidth: 'var(--sectionWidth)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },

}));
interface IProps {
    fontSizePrice?: string;
    onClick: () => void;
    onClickLike?: () => void;
    apartment?: any;
    voucherName?: string;
    remainDate?: number,
}

export default function CardApartment(props: IProps) {
    const classes = useStyles();
    //let status = props.apartment?.constructionStatus ? props.apartment?.constructionStatus : 0;
    const apartmentPhotos: any[] = props.apartment?.images || [];
    const onClickLike = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        if (props.onClickLike) {
            props.onClickLike();
        }
    }
    return (
        <Grid className={`${classes.cardApartment} cursor-pointer`} >
            <span onClick={props.onClick}>
                <Image loading={<CircularProgress style={{ color: 'var(--default-text-color-yellow)' }} />} style={{ width: '100%', height: '50%', objectFit: 'cover', paddingTop: '0', borderRadius: '24px' }} className={(classes.imgApartment) + " cursor-pointer"} src={apartmentPhotos[0] || Resources.Images.DEFAULT} />
                <img className={`${props.apartment?.isHighlight ? classes.iconStatusHot : 'd-none'} animated`} src={Resources.Icon.STATUS.HOT_1} />
            </span>
            {/* {GlobalState.listFavorite?.find((item: IFavorite) => item.apartmentId === props.apartment?.id) !== undefined ?
                <FavoriteIcon onClick={onClickLike} style={{ color: 'red' }} className={`${classes.imgLike} cursor-pointer`} />
                :
                <FavoriteBorderIcon className={`${classes.imgLike} cursor-pointer`} onClick={onClickLike} />
            } */}
            <Grid className={classes.apartmentBox}>
                <Grid className="d-flex">
                    {props.apartment?.isHighlight &&
                        <img className={classes.iconStatus} src={Resources.Icon.STATUS.HOT} />
                        // :
                        // <>
                        //     <img className={`${status === 0 ? classes.iconStatus : 'd-none'}`} src={Resources.Icon.STATUS.ON_SALE} />
                        //     <img className={`${status === 1 ? classes.iconStatus : 'd-none'}`} src={Resources.Icon.STATUS.OPENED_SALE} />
                        //     <img className={`${status === 2 ? classes.iconStatus : 'd-none'}`} src={Resources.Icon.STATUS.SOLD} />
                        // </>
                    }

                    {/* <Text className={classes.apartmentType}>
                        <Link color="inherit" className="cursor-pointer" to={`${Screens.PROJECT}?id=${props.apartment?.projectId}`}>
                            {Helpers.getName(props.apartment?.projectName, props.apartment?.projectNameContents)}
                        </Link>
                    </Text>  */}
                </Grid>
                <div onClick={props.onClick}>
                    <Grid className={classes.apartmentName}>
                        <Tooltip title={props.apartment?.title || ''} placement="top-start" arrow>
                            <span>
                                {props.apartment?.title}
                            </span>
                        </Tooltip>
                    </Grid>
                </div>
                <Grid className={classes.apartmentPrice} style={{ fontSize: props.fontSizePrice }} >
                    {/* {props.apartment?.listPrice ?
                        <Grid className="d-flex justify-content-between align-items-end mb-3">
                            <CardPriceString number={[props.apartment.listPrice]} />
                            <CardPriceString classNumber="font-16 line-height-1 text-dark" number={[(props.apartment?.price || 0) / (props.apartment?.area || 1) || 0]} unit={Strings.Common.SQUARE_METTER} />
                        </Grid>
                        :
                        Strings.Common.NOT_SALE_YET
                    } */}
                    {/* {props.apartment?.price ? */}
                    <Grid className="d-flex justify-content-between align-items-end mb-3">
                        {props.apartment?.price ?
                            <Grid className="d-flex align-items-center white-space-nowrap">
                                <Tooltip title={`${Strings.Components.AREA}`} placement="bottom-start" arrow>
                                    <img className="img-24 mr-2" src={Resources.Icon.DONG_GREEN} />
                                </Tooltip>
                                <CardPriceString number={[props.apartment.price || 0]} />
                                {/* {props.apartment.price} */}
                            </Grid> : Strings.Common.NOT_SALE_YET
                        }
                        {props.apartment?.area ?
                            <Grid className="d-flex align-items-center white-space-nowrap">
                                <Tooltip title={`${Strings.Components.AREA}`} placement="bottom-start" arrow>
                                    <img className="img-24 mr-2" src={Resources.Icon.GREEN_SQUARE} />
                                </Tooltip>
                                {props.apartment.area} {Strings.Common.SQUARE_METTER}
                            </Grid>
                            : null}
                    </Grid>

                    {/* } */}
                </Grid>
                <Grid className="d-flex justify-content-start">
                    <img src={Resources.Icon.GREEN_MAP} />
                    <Tooltip title={(`${props.apartment?.address?.addressLine}, ${props.apartment?.address?.wardName}, ${props.apartment?.address?.districtName}, ${props.apartment?.address?.provinceName}` || '')} placement="left" arrow>
                        <span className={classes.textContent}>
                            {`${props.apartment?.address?.addressLine}, ${props.apartment?.address?.wardName}, ${props.apartment?.address?.districtName}, ${props.apartment?.address?.provinceName}` || '--'}
                        </span>
                    </Tooltip>
                </Grid>
                {/* <Grid className="d-flex mt-3 justify-content-between">
                    {props.apartment?.area ?
                        <Grid className="d-flex align-items-center white-space-nowrap">
                            <Tooltip title={`${Strings.Components.AREA}`} placement="bottom-start" arrow>
                                <img className="img-24 mr-2" src={Resources.Icon.GREEN_SQUARE} />
                            </Tooltip>
                            {props.apartment.area} {Strings.Common.SQUARE_METTER}
                        </Grid>
                        : null}
                    {props.apartment?.bedroom ?
                        <Grid className="d-flex align-items-center white-space-nowrap">
                            <Tooltip title={`${Strings.Components.BED}`} placement="bottom-start" arrow>
                                <img className="img-24 mr-2" src={Resources.Icon.GREEN_BED} />
                            </Tooltip>
                            {props.apartment.bedroom}
                        </Grid>
                        : null}
                    {props.apartment?.bathroom ?
                        <Grid className="d-flex align-items-center white-space-nowrap">
                            <Tooltip title={`${Strings.Components.BATH}`} placement="bottom-start" arrow>
                                <img className="img-24 mr-2" src={Resources.Icon.GREEN_BATH} />
                            </Tooltip>
                            {props.apartment.bathroom}
                        </Grid>
                        : null}
                    {!Helpers.isNullOrEmpty(props.apartment?.orientation) ?
                        <Grid className="d-flex align-items-center white-space-nowrap">
                            <Tooltip title={`${Strings.Components.DIRECTIONS}`} placement="bottom-start" arrow>
                                <img className="img-24 mr-2" src={Resources.Icon.GREEN_ORIENTATION} />
                            </Tooltip>
                            {Helpers.getCodeName('orientation', props.apartment?.orientation)}

                        </Grid>
                        : null}
                </Grid> */}
                {/* <Voucher
                    top={18}
                    voucherName={props.voucherName}
                    remainDate={props.remainDate}
                /> */}
            </Grid>
        </Grid>
    );
}
