import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { Constants, Resources, Screens, Strings } from "../constants";
import "./ComponentStyles.css";
import { Link, useHistory } from "react-router-dom";
import { GlobalState } from "../stores/GlobalState";
import { Helpers, ISystem } from "../commons/utils";
import { CodeSystem } from "../constants/Enums";
import { HomeService } from "../app/services";
import moment from "moment";
interface IProps {
}

const useStyles = makeStyles((theme) => ({
    boxContainer: {
        background: `var(--default-gradient)`,
        padding: `1rem`,
        color: `#2f2f2f`,
        textAlign: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingBottom: '9rem'
    },
    content: {
        color: `#fff`,
        fontSize: `var(--default-14px)`,
        lineHeight: `var(--default-20px)`,
        alignItems: `flex-start`,
        margin: `1.33rem 0rem`,
    },
    hr: {
        borderTop: `1px solid rgba(255, 255, 255, 0.2)`,
        marginTop: `3.16rem`
    },
    exchange: {
        fontStyle: `normal`,
        fontWeight: `bold`,
        fontSize: `var(--default-14px)`,
        lineHeight: `var(--default-16px)`,
        color: `var(--default-text-color-green)`,
        textTransform: `uppercase`,
        marginBottom: 'var(--default-24px)',
        marginRight: 'var(--default-24px)',
    },
    language: {
        whiteSpace: 'nowrap',
        textTransform: 'capitalize',
        fontSize: 'var(--default-14px)'
    },
    imgLogo: {
        height: '15rem',
        marginBottom: '-3rem',
        marginTop: '-3rem'
    },
    imgBCT: {
        height: 'var(--default-40px)',
        marginRight: '2rem'
    },
    info: {
        margin: `1rem  0rem`,
        cursor: 'pointer',
        fontWeight: 'bold',
        zIndex: 1,
        position: 'relative',
    },
    bannerWeb: {
        position: 'relative',
        background: `var(--default-gradient);`,
        height: '100%',
        color: '#2f2f2f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    iconLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0
    },
    iconRight: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    contentWeb: {
        padding: `2rem 0rem`,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        margin: '2rem 8%',
        maxWidth: '110rem',
    },
    textAbout: {
        opacity: 0.5,
    },
    contentLeft: {
        marginRight: "2rem",
        display: 'flex',
        width: '60%'
    },
    iconFinal: {
        zIndex: 1,
        position: 'relative',
    },
    "@media (max-width: 1500px)": {
        contentWeb: {
            margin: '5rem 7rem',
        },
    },
    "@media (max-width: 1400px)": {
        contentWeb: {
            fontSize: '1.08rem'
        },
    },
    "@media (max-width: 1280px)": {
        contentWeb: {
            margin: '5rem 3rem',
            fontSize: '1.08rem'
        },
    },
}));
export default function Footer(props: IProps) {
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = React.useState<string>("");
    const [address, setAddress] = React.useState<string>("25/8K Nguyễn văn Linh, Hưng Lợi, Ninh Kiều, Cần Thơ");
    const [phoneNumber, setPhoneNumber] = React.useState<string>("0852010253");
    useEffect(() => {
    }, []);
    return (
        <Grid>
            {/* Web */}
            <Hidden smDown>
                <Grid className={classes.bannerWeb}>
                    <img className={classes.iconLeft} src={Resources.Images.LEFT_FOOTER} />
                    <img className={classes.iconRight} src={Resources.Images.RIGHT_FOOTER} />
                    <Grid className={classes.contentWeb}>
                        <Grid container className="mb-5">
                            <Grid item xs={12} className="">
                                <Grid className={`${classes.exchange} text-yellow text-uppercase mb-3 d-flex align-items-center`} >
                                    <img src={Resources.Icon.FLOWER} className="mr-2" />Sàn giao dịch
                                </Grid>
                            </Grid>
                            <Grid item xs={12} >
                                <Grid container spacing={1}>
                                    <Grid item lg={5} md={6} >
                                        <img className="mr-2" src={Resources.Icon.GREEN_MAP} />
                                        <a target="_blank"  href="#">
                                            {Strings.Footer.address1}
                                        </a>
                                    </Grid>
                                    <Grid item lg={4} md={6}>
                                        <img className="mr-2" src={Resources.Icon.GREEN_MAP} />
                                        <a target="_blank" href="#">
                                            {Strings.Footer.address2}
                                        </a>
                                    </Grid>
                                    <Grid item lg={3} md={6}>
                                        <img className="mr-2" src={Resources.Icon.GREEN_MAP} />
                                        <a target="_blank" href="#">
                                            {Strings.Footer.address3}
                                        </a>
                                    </Grid>
                                    <Grid item lg={5} md={6}>
                                        <img className="mr-2" src={Resources.Icon.GREEN_MAP} />
                                        <a target="_blank" href="#">
                                            {Strings.Footer.address4}
                                        </a>
                                    </Grid>
                                    <Grid item lg={4} md={6} >
                                        <img className="mr-2" src={Resources.Icon.GREEN_MAP} />
                                        <a target="_blank" href="#">
                                            {Strings.Footer.address5}
                                        </a>
                                    </Grid>
                                    <Grid item lg={3} md={6}>
                                        <img className="mr-2" src={Resources.Icon.GREEN_MAP} />
                                        <a target="_blank" href="#">
                                            {Strings.Footer.address6}
                                        </a>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="d-flex">
                            <Grid className={classes.contentLeft}>
                                <Grid className="mr-4 cursor-pointer" onClick={() => history.push(Screens.HOME)}>
                                    <img className={classes.imgLogo} src={Resources.Images.REAL_ESTATE_LOGO} />
                                </Grid>
                                <Grid >
                                    <Grid className="mb-3">
                                        <span className="font-weight-bold text-green font-18">
                                            {name}
                                        </span>
                                    </Grid>
                                    <Grid className="mb-3">
                                        <span className="font-weight-bold">
                                            {Strings.Components.HEADQUARTERS}
                                        </span>
                                        &nbsp;{address}
                                    </Grid>
                                    <Grid className="mb-3">
                                        <span className="font-weight-bold">
                                            {Strings.Components.PHONE}
                                        </span>
                                        &nbsp;{phoneNumber}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className="d-flex flex-column">
                                <Grid className="d-flex justify-content-between">
                                    <Grid>
                                        <Grid className={classes.exchange}>{Strings.Home.TYPE_REAL_ESTATE}</Grid>
                                        <Grid className={classes.info}>
                                            <Link color="inherit" to={'#'}>{Strings.Common.APARTMENT_URBAN_AREA}</Link>
                                        </Grid>
                                        <Grid className={classes.info}>
                                            <Link color="inherit" to={'#'}>{Strings.Common.PERSONAL_PROPERTY_HOUSE}</Link>
                                        </Grid>
                                        <Grid className={classes.info}>
                                            <Link color="inherit" to={'#'}>{Strings.Common.VILLAS}</Link>
                                        </Grid>
                                        <Grid className={classes.info}>
                                            <Link color="inherit" to={'#'}>{Strings.Common.LAND}</Link>
                                        </Grid>
                                    </Grid>
                                    <Grid className="z-index-1">
                                        <Grid className={classes.exchange}>{Strings.Home.INFO_HELPFUL}</Grid>
                                        <Grid className={classes.info} >
                                            <Link color="inherit" to='#'>
                                                {Strings.Home.ABOUT_US}
                                            </Link>
                                        </Grid>
                                        <Grid className={classes.info} >
                                            <Link color="inherit" to={Screens.LISTING_PROJECT}>
                                                {Strings.Home.PROJECT}
                                            </Link>
                                        </Grid>
                                        <Grid className={classes.info} >
                                            <Link color="inherit" to={Screens.NEWS}>
                                                {Strings.Home.NEWS_EVENT}
                                            </Link>
                                        </Grid>
                                        <Grid className={classes.info} >
                                            <Link color="inherit" to={Screens.COMMERCE}>
                                                {Strings.Home.SALE}
                                            </Link>
                                        </Grid>
                                        <Grid className={classes.info} >
                                            <div color="inherit" >
                                                {Strings.Footer.FAQ}
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="w-100 align-items-center justify-content-center d-flex">
                            <a target="_blank" href="#">
                                <img className="mr-2 img-38  cursor-pointer" src={Resources.Icon.LINK_IN} />
                            </a>
                            <a target="_blank" href="#">
                                <img className="mr-2 img-38  cursor-pointer" src={Resources.Icon.YOUTUBE} />
                            </a>
                            <a target="_blank" href="#">
                                <img className="img-38  cursor-pointer" src={Resources.Icon.FB} />
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            {/* Mobie */}
            <Hidden mdUp>
                <Grid className={classes.boxContainer}>
                    <Grid className="d-flex justify-content-between mt-4 flex-column">
                        <img className={classes.iconLeft} src={Resources.Images.LEFT_FOOTER} />
                        <img className={classes.iconRight} src={Resources.Images.RIGHT_FOOTER} />
                        <img className={classes.imgLogo} src={Resources.Images.REAL_ESTATE_LOGO} />
                        <Grid container className="mb-5">
                            <Grid item xs={12} className="">
                                <Grid className="text-yellow font-18 font-weight-bold mb-3">
                                    <img src={Resources.Icon.FLOWER} className="mr-2" />Sàn giao dịch
                                    <hr className={classes.hr} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} >
                                <Grid container spacing={1}>
                                    <Grid item xs={12} >
                                        <a target="_blank" href="/#">
                                            {Strings.Footer.address1}
                                        </a>
                                        <hr className={classes.hr} />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <a target="_blank" href="/#">
                                            {Strings.Footer.address2}
                                        </a>
                                        <hr className={classes.hr} />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <a target="_blank" href="#">
                                            {Strings.Footer.address3}
                                            <hr className={classes.hr} />
                                        </a>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <a target="_blank" href="#">
                                            {Strings.Footer.address4}
                                        </a>
                                        <hr className={classes.hr} />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <a target="_blank" href="#">
                                            {Strings.Footer.address5}
                                        </a>
                                        <hr className={classes.hr} />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <a target="_blank" href="#">
                                            {Strings.Footer.address6}
                                        </a>
                                        <hr className={classes.hr} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid >
                            <Grid className="mb-3">
                                <span className="font-weight-bold text-green font-18">
                                    {name}
                                </span>
                            </Grid>
                            <Grid className="mb-3">
                                <span className="font-weight-bold">
                                    {Strings.Components.HEADQUARTERS}
                                </span>
                                &nbsp;{Strings.Common.GROUND_FLOOR_HD_TOWER_BUILDING}
                                <br />{address}
                            </Grid>
                            <Grid className="mb-3">
                                <span className="font-weight-bold">
                                    {Strings.Components.PHONE}
                                </span>
                                &nbsp;{phoneNumber}
                            </Grid>
                        </Grid>
                    </Grid>
                    <hr className={classes.hr} />
                    <Grid className="text-green font-16 font-weight-bold">{Strings.Home.TYPE_REAL_ESTATE}</Grid>
                    <Grid className={classes.info}>
                        <Link color="inherit" to={'#'}>{Strings.Common.APARTMENT_URBAN_AREA}</Link>
                    </Grid>
                    <Grid className={classes.info}>
                        <Link color="inherit" to={'#'}>{Strings.Common.PERSONAL_PROPERTY_HOUSE}</Link>
                    </Grid>
                    <Grid className={classes.info}>
                        <Link color="inherit" to={'#'}>{Strings.Common.VILLAS}</Link>
                    </Grid>
                    <Grid className={classes.info}>
                        <Link color="inherit" to={'#'}>{Strings.Common.LAND}</Link>
                    </Grid>
                    <hr className={classes.hr} />
                    <Grid className="text-green font-16 font-weight-bold">{Strings.Home.INFO_HELPFUL}</Grid>
                    {/* <Grid className={classes.info} >
                        <Link color="inherit" to={`#`}>{Strings.Home.ABOUT_US}</Link>
                    </Grid> */}
                    {/* <Grid className={classes.info} >
                        <Link color="inherit" to={`${Screens.LISTING_PROJECT}`}>{Strings.Home.PROJECT}</Link>
                    </Grid> */}
                    <Grid className={classes.info} >
                        <Link color="inherit" to={`${Screens.NEWS}`}>{Strings.Home.NEWS_EVENT}</Link>
                    </Grid>
                    <Grid className={classes.info} >
                        <Link color="inherit" to={`${Screens.LISTING_APARTMENT}`}>{Strings.Home.REAL_ESTATE_FLOOR}</Link>
                    </Grid>
                    <Grid className={classes.info} >
                        <div color="inherit" >
                            {Strings.Footer.FAQ}
                        </div>
                    </Grid>
                    <Grid>
                        <a target="_blank" href="#">
                            <img className="mr-2 img-38  cursor-pointer" src={Resources.Icon.LINK_IN} />
                        </a>
                        <a className={classes.iconFinal} target="_blank" href="#">
                            <img className="mr-2 img-38  cursor-pointer" src={Resources.Icon.YOUTUBE} />
                        </a>
                        <a className={classes.iconFinal} target="_blank" href="#">
                            <img className="img-38  cursor-pointer" src={Resources.Icon.FB} />
                        </a>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>

    );
}
