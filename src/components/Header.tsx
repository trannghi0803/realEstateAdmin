import { Collapse, Grid } from "@material-ui/core";
import { Constants, Resources, Screens, Strings } from "../constants";
import "./ComponentStyles.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useEffect, useState } from "react";
import { Helpers, IOptionSelect } from "../commons/utils";
import { GlobalState } from "../stores/GlobalState";
import { Link, useHistory, useLocation } from "react-router-dom";
import { signinRedirect, signoutRedirectCallback } from "../config";
import CloseIcon from '@material-ui/icons/Close';
import { ProcessSlider } from ".";
import { HomeService } from "../app/services";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';
import ControlAutocomplete from "./ControlAutocomplete";
import SelectCheckbox from "./SelectIcon";
import CommerceService from "../app/services/CommerceService";
import Cookies from 'universal-cookie';

const useStyles = makeStyles({
    menuDropdownSearch: {
        flexGrow: 1,
        width: '100%',
        padding: '1.5rem',
        boxShadow: '1px 1px 1px #aaa',
        height: 'calc(100vh - 60px)',
        overflowY: 'auto'
    },
    progressbar: {
        paddingBottom: '1rem'
    },
    button: {
        backgroundColor: '#C98511',
        color: 'white',
        minWidth: '100%',
        padding: '8px',
        marginTop: '10px',
        marginBottom: '10px',
        display: 'inline-block',
        borderRadius: '12px',
        border: 'none',
        textAlign: 'center',
        fontSize: '16px',
        paddingBottom: '15px',
        paddingTop: '15px',
    },
    searchtitle: {
        color: 'var(--default-text-color)',
        fontSize: 'var(--default-14px)',
        fontFamily: 'var(--default-font-600)',
    },
    menuDropdownRoot: {
        flexGrow: 1,
        width: '100%',
        padding: '1.5rem',
        boxShadow: '1px 1px 1px #aaa',
        height: 'auto',
    },
    menuDropdownSub: {
        flexGrow: 1,
        width: '100%',
        padding: '1.5rem',
        boxShadow: '1px 1px 1px #aaa',
        height: 'calc(100vh - 60px)',
        overflow: 'auto',
    },
    parentList: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'var(--default-text-color-yellow)',
        fontSize: 'var(--default-24px)',
        alignItems: 'center'

    },
    submenu: {
        fontSize: 'var(--default-14px)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    sub: {
        fontSize: 'var(--default-12px)',
        padding: '1rem 4rem',
    },
    label: {
        color: 'var(--default-text-color)',
        fontSize: 'var(--default-16px)',
        fontFamily: 'var(--default-font-600)',
        padding: '1rem 0rem',
        '&.seleted': {
            color: 'var(--default-text-color-yellow)',
        }
    },
    sublabel: {
        color: 'var(--default-text-color)',
        fontSize: 'var(--default-14px)',
        '&.seleted': {
            color: 'var(--default-text-color-yellow)',
        }
    },
    language: {
        display: 'flex',
        padding: '0.5rem',
        position: 'relative',
        transition: 'all 0.5s',
        borderRadius: '20px',
        cursor: 'pointer',
        transitionDelay: '0.7s',
        backgroundColor: '#f5dbb2',
        width: 'fit-content',
        height: '40px',
    },
    menubar: {
        display: 'flex'
    },
    inputFind: {
        background: 'transparent',
        border: 'none',
        width: '80%',
        outline: 'none',
        height: '100%'
    },
    boxInputFind: {
        height: '36px',
        width: '100%',
        background: 'rgb(247 236 219 / 78%) 10%',
        borderRadius: '20px',
        marginRight: '1rem',
        border: 'none',
        outline: 'none',
        padding: '0rem 1rem',
        color: '#000',
        display: 'flex',
        justifyContent: 'space-between'
    },
    "@media (max-width: 960px)": {
        language: {
            padding: '0rem 0.5rem',
            marginTop: '1rem',
            height: '35px',
        },
    },
    "@media only screen and (min-device-width: 481px) and (max-device-width: 960px) and (orientation: landscape)": {
        menuDropdownRoot: {
            height: 'calc(100vh - 60px)',
            overflowY: 'auto'
        }
    }
});

interface IProps {
}

export default function Header(this: any, props: IProps) {
    const classes = useStyles();
    const history = useHistory();
    const [isVisible, setIsVisible] = useState(false);
    const [defaultPrice, setDefaultPrice] = React.useState<Array<any>>([]);
    const [defaultArea, setDefaultArea] = React.useState<Array<any>>([]);
    const [key, setKey] = React.useState<number>(0);
    const [showMenu, setShowMenu] = React.useState<boolean>(false);
    const [indexMenu, setIndexMenu] = React.useState<number>();
    const [indexsubMenu, setIndexSubMenu] = React.useState<number>();
    const [showAccount, setShowAccount] = React.useState<boolean>(false);
    const [showSearch, setShowSearch] = React.useState<boolean>(false);
    const optionTarget: Array<any> = Helpers.getTarget();
    const optionType: IOptionSelect[] = Helpers.getOptionTypeProject();
    const optionProvince: IOptionSelect[] = Helpers.getProvince();
    const optionStatus: IOptionSelect[] = Helpers.getOptionStatusProject();
    const location = useLocation();
    const [optionDistrict, setOptionDistrict] = React.useState<Array<any>>([]);
    const [addressDataList, setAddressData] = React.useState<Array<any>>([]);
    const [districtName, setDistrictName] = React.useState<string>("");
    const [optionCity, setOptionCity] = React.useState<Array<any>>([]);
    const [HL, setHL] = React.useState<Array<any>>([]);
    const [valueSearch, setValueSearch] = React.useState<string>();

    useEffect(() => {
        const { province } = getUrlParams(["province"]);
        const { types } = getUrlParams(["types"]);
        const { status } = getUrlParams(["status"]);
        const { target } = getUrlParams(["target"]);
        const { minPrice } = getUrlParams(["minPrice"]);
        const { maxPrice } = getUrlParams(["maxPrice"]);
        const { minArea } = getUrlParams(["minArea"]);
        const { maxArea } = getUrlParams(["maxArea"]);
        const { district } = getUrlParams(["district"]);
        const { keyword } = getUrlParams(["keyword"]);
        setValueSearch(keyword)
        const codeList: string[] = [];
        optionProvince.forEach(async (city) => {
            codeList.push(city.value)
        });
        const params = new URLSearchParams;
        params.append('Orderby', 'apartment.isHighlight DESC')
        params.append('PageSize', '15');
        params.append('IsHighlight', '1');
        // const listApartmentHighlight = new CommerceService().getPageApartment(params.toString());
        if (maxPrice && minPrice) {
            setDefaultPrice([minPrice, maxPrice])
        }
        if (!Helpers.isNullOrEmpty(minArea) && !Helpers.isNullOrEmpty(maxArea)) {
            setDefaultArea([minArea, maxArea])
        }
        if (location.pathname !== Screens.LISTING_APARTMENT && location.pathname !== Screens.LISTING_PROJECT) {
            window.addEventListener("scroll", toggleVisibility);
        }

    }, []);

    const handleClose = (value: any, key: number) => {
        let filterObj: any = {
            target: GlobalState.filterObj?.target,
            types: GlobalState.filterObj?.types,
            province: GlobalState.filterObj?.province,
            status: GlobalState.filterObj?.status,
            minPrice: GlobalState.filterObj?.minPrice,
            maxPrice: GlobalState.filterObj?.maxPrice,
            minArea: GlobalState.filterObj?.minArea,
            maxArea: GlobalState.filterObj?.maxArea,
            district: GlobalState.filterObj?.district,
        }
        switch (key) {
            case 0:
                if (!Helpers.isNullOrEmpty(value)) {
                    filterObj.target = value;
                }
                break;
            case 1:
                if (value) {
                    filterObj.types = value;
                }
                break;
            case 2:
                if (value) {
                    if (filterObj.province !== value) {
                        filterObj.province = value;
                        filterObj.district = undefined;
                    }
                }
                break;
            case 3:
                if (value) {
                    filterObj.status = value;
                }
                break;
            case 4: {
                if (value) {
                    filterObj.minPrice = value[0];
                    filterObj.maxPrice = value[1];
                }
                break;
            }
            case 5: {
                if (value) {
                    filterObj.minArea = value[0];
                    filterObj.maxArea = value[1];
                }
                break;
            }
            case 6: {
                if (value) {
                    filterObj.province = value[0];
                    filterObj.district = value[1];
                }
                break;
            }
            default:
                break;
        }
        setKey(key => key + 1);
        GlobalState.setFilter(filterObj);
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handChangeIndex = (indexActive: number) => {
        if (indexActive === indexMenu) {
            setIndexMenu(-1)
        } else {
            setIndexMenu(indexActive)
        }
    }

    const handChangeSubIndex = (index: number) => {
        if (index === indexsubMenu) {
            setIndexSubMenu(-1)
        }
        else {
            setIndexSubMenu(index)
        }
    }

    const getUrlParams = (keys: string[]): any => {
        const params = new URLSearchParams(window.location.search);
        let datas: { [key: string]: string | undefined } = {};
        keys.forEach((key) => {
            datas[key] = params.get(key) || ""
        });
        return datas;
    }

    const handleSearch = () => {
        let params = new URLSearchParams;
        if (GlobalState.filterObj?.province) {
            params.append('province', GlobalState.filterObj?.province)
        }
        if (GlobalState.filterObj?.district) {
            params.append('district', GlobalState.filterObj?.district)
        }
        if (GlobalState.filterObj?.types) {
            params.append('types', GlobalState.filterObj?.types)
        }
        if (GlobalState.filterObj?.status) {
            params.append('status', GlobalState.filterObj?.status)
        }
        if (GlobalState.filterObj?.target) {
            params.append('target', GlobalState.filterObj?.target)
        }
        if (!Helpers.isNullOrEmpty(GlobalState.filterObj?.minPrice)) {
            params.append('minPrice', GlobalState.filterObj?.minPrice)
        }
        if (!Helpers.isNullOrEmpty(GlobalState.filterObj?.maxPrice)) {
            params.append('maxPrice', GlobalState.filterObj?.maxPrice)
        }
        if (!Helpers.isNullOrEmpty(GlobalState.filterObj?.minArea)) {
            params.append('minArea', GlobalState.filterObj?.minArea)
        }
        if (!Helpers.isNullOrEmpty(GlobalState.filterObj?.maxArea)) {
            params.append('maxArea', GlobalState.filterObj?.maxArea)
        }
        if (location.pathname === Screens.LISTING_APARTMENT) {
            history.push({
                pathname: Screens.LISTING_APARTMENT,
                search: `?${params.toString()}`,
            });
        } else {
            history.push({
                pathname: Screens.LISTING_PROJECT,
                search: `?${params.toString()}`,
            });
        }
    }

    const logout = () => {
        const cookies = new Cookies();
        Helpers.showConfirmAlert(
            Strings.Header.LOGOUT_CONFIRM_MESSAGE,
            async () => {
                try {
                    const result = await signoutRedirectCallback();
                    cookies.remove(Constants.StorageKeys.TOKEN, { path: '/' })
                    GlobalState.setUser();
                    setKey(key => key + 1);
                    if (result.error) {
                        return;
                    }
                } catch (error) {
                    // if (error) {
                    //     const message = error?.message?.Message || Strings.Message.ERROR;
                    //     Helpers.showAlert(message, "error");
                    // }
                }
            }
        );
    };

    const commonSearch = () => {
        history.push(`${Screens.SEARCH}?keyword=${valueSearch}`)
    }
    const onKeyDownEnter = (event: any) => {
        if (event.which === 13 || event.keyCode === 13) {
            commonSearch()
        }
    }
    const handleLogin = async () => {
        sessionStorage.setItem(Constants.StorageKeys.PRE_SCREEN, window.location.href);
        GlobalState.setModalLogin(false);
        await signinRedirect();
    }
    const renderLanguage =  () => {
        switch (GlobalState.language) {
            case Constants.Language.VN:
                return (
                    <>
                        <img src={Resources.Images.FLAG.VN} /> | VN
                    </>
                )
        }
    }
    return (
        <Grid id="header" className={`${isVisible ? 'advanced' : ''} ${location.pathname === Screens.HOME ? 'wrap-header-screen-home' : ''} wrap-header`}>
            {/* Web */}
            <Grid className="container-header">
                <Grid className="logo-header">
                    <Link to={`${Screens.HOME}`}>
                        <img className={`${isVisible ? 'cursor-pointer' : ''}`} src={Resources.Images.REAL_ESTATE_LOGO} />
                    </Link>
                </Grid>
                <Grid className="main-header" >
                    {/* Order */}
                    <Grid className="scope-over">
                        <Grid container>
                            <Grid className="field-search">
                                <ul className="wsmenu-list">
                                    {/* Target */}
                                    <li className="frame-menu-order">
                                        <Grid className="item-menu-over">
                                            {Strings.Header.TARGET}
                                            <Grid className="value-filter">
                                                {GlobalState.filterObj?.target ?
                                                    <span>
                                                        {Helpers.getCodeName('target', GlobalState.filterObj?.target)}
                                                        <CloseIcon className="icon-close-value" onClick={() => { GlobalState.setFilter({ ...GlobalState.filterObj, target: undefined }); setKey(key => key + 1) }} />
                                                    </span>
                                                    : Strings.Header.COMMERCE_OR_FOR_RENT
                                                }
                                            </Grid>
                                        </Grid>
                                        <ul className="wsmenu-submenu">
                                            {optionTarget?.map((item, index) => {
                                                return (
                                                    <li key={`sale${index}`} onClick={() => handleClose(item.value, 0)}
                                                        className={`${GlobalState.filterObj?.target === item.value ? 'drop-item-active' : ''} drop-items-yellow`}>{item.label}</li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                    {/* Type */}
                                    <li className="frame-menu-order">
                                        <Grid className="item-menu-over">
                                            {Strings.Header.PROPERTY_TYPE}
                                            <Grid className="value-filter">
                                                {GlobalState.filterObj?.types ?
                                                    <span>
                                                        {Helpers.getCodeName('type', GlobalState.filterObj?.types)}
                                                        <CloseIcon className="icon-close-value" onClick={() => { GlobalState.setFilter({ ...GlobalState.filterObj, types: undefined }); setKey(key => key + 1) }} />
                                                    </span>

                                                    : Strings.Header.CHOOSE_PROPERTY_TYPE
                                                }
                                            </Grid>
                                        </Grid>
                                        <ul className="wsmenu-submenu">
                                            {optionType?.map((item, index) => {
                                                return (
                                                    <li key={`type${index}`} onClick={() => handleClose(item.value, 1)}
                                                        className={`${GlobalState.filterObj?.types === item.value ? 'drop-item-active' : ''} drop-items-yellow`}>
                                                        {item.label}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                    {/* Location */}
                                    <li className="frame-menu-order">
                                        <Grid className="item-menu-over">
                                            {Strings.Header.LOCATION}
                                            <Grid className="value-filter">
                                                {GlobalState.filterObj?.province ?
                                                    <>
                                                        {`${Helpers.getCodeName('province', GlobalState.filterObj?.province)}${districtName ? "/" + districtName : ""}`}
                                                        <CloseIcon className="icon-close-value" onClick={() => {
                                                            GlobalState.setFilter({ ...GlobalState.filterObj, province: undefined, district: undefined });
                                                            setDistrictName(''); setKey(key => key + 1)
                                                        }} />
                                                    </>
                                                    : Strings.Header.PROVINCE_DISTRICT_WARD
                                                }
                                            </Grid>
                                        </Grid>
                                        <ul className="wsmenu-submenu">
                                            {optionProvince?.map((item, index) => {
                                                return (
                                                    <li
                                                        key={`province${index}`}
                                                        onClick={() => handleClose(item.value, 2)}
                                                        className={`${GlobalState.filterObj?.province === item.value ? 'drop-item-active' : ''} drop-items-yellow`}
                                                    >
                                                        {item.label}
                                                        <ul className="wsmenu-submenu-1 list-container">
                                                            {addressDataList.find((a: any) => a.code === item.value)?.provinceList.map((province: any, index: number) => {
                                                                return (
                                                                    <li
                                                                        key={province.value}
                                                                        id={`#${index}`}
                                                                        className="drop-items-yellow"
                                                                        onClick={() => {
                                                                            handleClose([item.value, province.value], 6);
                                                                            setDistrictName(province.label);
                                                                        }}
                                                                    >
                                                                        {province.label}
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                    {/* Price range */}
                                    <li className="frame-menu-order">
                                        <Grid className="item-menu-over">
                                            {Strings.Header.PRICE_RANGE}
                                            <Grid className="value-filter">
                                                {GlobalState.filterObj?.minPrice ?
                                                    <Grid>
                                                        <span className="mr-2">
                                                            {GlobalState.filterObj?.minPrice / 1000000000} {Strings.Common.BILLION} -  &nbsp;
                                                            {GlobalState.filterObj?.maxPrice / 1000000000} {Strings.Common.BILLION}
                                                        </span>
                                                        <CloseIcon
                                                            onClick={() => { GlobalState.setFilter({ ...GlobalState.filterObj, minPrice: 1000000000, maxPrice: 100000000000 }); setKey(key => key + 1) }} />
                                                    </Grid>
                                                    : Strings.Header.SEARCH_BY_PRICE
                                                }
                                            </Grid>
                                        </Grid>
                                        <ul className="wsmenu-submenu" >
                                            <li className="width-24rem pt-4 p-3" key={defaultPrice.length}>
                                                <Grid className="font-12 text-secondary mb-3">{Strings.Header.PRICE_BILION_RANGE}</Grid>
                                                <ProcessSlider
                                                    step={1000000000}
                                                    minValue={1000000000}
                                                    maxValue={100000000000}
                                                    valueDefault={defaultPrice.length > 0 ? defaultPrice : [1000000000, 100000000000]}
                                                    handleChange={(value) => { handleClose(value, 4) }}
                                                />
                                            </li>
                                        </ul>
                                    </li>
                                    {/* Area */}
                                    <li className="frame-menu-order">
                                        <Grid className="item-menu-over">
                                            {Strings.Header.AREA}
                                            <Grid className="value-filter">
                                                {!Helpers.isNullOrEmpty(GlobalState.filterObj?.minArea) ?
                                                    <Grid>
                                                        <span className="mr-2">
                                                            {GlobalState.filterObj?.minArea} {Strings.Common.SQUARE_METTER} -&nbsp;
                                                            {GlobalState.filterObj?.maxArea} {Strings.Common.SQUARE_METTER}
                                                        </span>
                                                        <CloseIcon
                                                            onClick={() => { GlobalState.setFilter({ ...GlobalState.filterObj, maxArea: undefined, minArea: undefined }); setKey(key => key + 1) }} />
                                                    </Grid>
                                                    : Strings.Header.SEARCH_BY_AREA
                                                }
                                            </Grid>
                                        </Grid>
                                        <ul className="wsmenu-submenu">
                                            <li className="width-24rem pt-4 p-3" key={defaultArea.length}>
                                                <Grid className="font-12 text-secondary mb-3"> {Strings.Header.AREA_SQUARE_METTER_RANGE}  </Grid>
                                                <ProcessSlider
                                                    step={1}
                                                    minValue={0}
                                                    maxValue={600}
                                                    valueDefault={defaultArea.length > 0 ? defaultArea : [0, 600]}
                                                    handleChange={(value) => { handleClose(value, 5) }}
                                                />
                                            </li>
                                        </ul>
                                    </li>
                                    {/* Status */}
                                    <li className="frame-menu-order">
                                        <Grid className="item-menu-over">
                                            {Strings.Header.STATUS}
                                            <Grid className="value-filter">
                                                {GlobalState.filterObj?.status ?
                                                    <span>
                                                        {Helpers.getCodeName('status', GlobalState.filterObj?.status)}
                                                        <CloseIcon className="icon-close-value" onClick={() => {
                                                            GlobalState.setFilter({ ...GlobalState.filterObj, status: undefined });
                                                            setKey(key => key + 1)
                                                        }} />
                                                    </span>
                                                    : Strings.Header.CHOOSE_STATUS
                                                }
                                            </Grid>
                                        </Grid>
                                        <ul className="wsmenu-submenu">
                                            {optionStatus?.map((item, index) => {
                                                return (
                                                    <li key={`status${index}`} onClick={() => handleClose(item.value, 3)} className={`${GlobalState.filterObj?.status === item.value ? 'drop-item-active' : ''} drop-items-yellow`}>{item.label}</li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                        <Grid className="icon-filter" onClick={handleSearch}>
                            <img src={Resources.Icon.SEARCH} />
                        </Grid>
                    </Grid>
                    {/* Under */}
                    <Grid className="scope-under" id="header">
                        <Grid className="d-flex">
                            <ul className="wsmenu-list">
                                <li className={`${location.pathname === Screens.COMMERCE ? 'active' : ''} d-flex align-items-center menu-header-ancestor`}>
                                    <Grid className="item-menu-under">
                                        <img className="icon-header-under" src={Resources.Icon.SALE} />
                                        <Grid>
                                            <Link to="/commerce">
                                                {Strings.Home.SALE}
                                            </Link>
                                            <ExpandMoreIcon />
                                        </Grid>
                                    </Grid>
                                    <ul className="wsmenu-submenu">
                                        <li >
                                            <Link className="drop-items-yellow" to="/commerce?type=-1">{Strings.Common.PERSONAL_PROPERTY_HIGHTLIGHT}</Link>
                                            <ul className="wsmenu-submenu-1 list-container">
                                                {HL.map((a: any, index: number) => {
                                                    return (
                                                        <li>
                                                            <Link className="drop-items-yellow" to={`/apartment?&id=${a.id}`}>{a.name}</Link>
                                                        </li>
                                                    )

                                                })}

                                            </ul>
                                        </li>
                                        <li >
                                            <Link className="drop-items-yellow" to={`/commerce?type=${Constants.TYPE.RESORT}`}>{Strings.Common.PERSONAL_PROPERTY_RESORT}</Link>
                                        </li>
                                        <li >
                                            <Link className="drop-items-yellow" to={`/commerce?type=${Constants.TYPE.HOUSE}`}>{Strings.Common.PERSONAL_PROPERTY_HOUSE}</Link>
                                        </li>
                                        <li >
                                            <Link className="drop-items-yellow" to={`/commerce?type=${Constants.TYPE.OFFICE}`}>{Strings.Common.PERSONAL_PROPERTY_OFFICE}</Link>
                                        </li>
                                        <li >
                                            <Link className="drop-items-yellow" to={`/commerce?type=${Constants.TYPE.URBAN_AREA}`}>{Strings.Common.PERSONAL_PROPERTY_URBAN_AREA}</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="d-flex align-items-center menu-header-ancestor ">
                                    <Grid className="item-menu-under">
                                        <img className="icon-header-under" src={Resources.Icon.RENT} />
                                        {Strings.Home.FOR_RENT}
                                    </Grid>
                                </li>
                                <li className={`${location.pathname === Screens.NEWS ? 'active' : ''} d-flex align-items-center menu-header-ancestor`}>
                                    <Grid className="item-menu-under">
                                        <img className="icon-header-under" src={Resources.Icon.MAIL} />
                                        <Link to="/news">{Strings.Home.NEWS_EVENT}</Link>
                                    </Grid>
                                </li>
                            </ul>
                        </Grid>
                        <Grid className="login-register">
                            <Grid className="search-container">
                                <Grid className={classes.boxInputFind}>
                                    <input onKeyDown={onKeyDownEnter} defaultValue={valueSearch} onChange={(event) => setValueSearch(event.target.value)} className={classes.inputFind} type="text" placeholder="Tìm kiếm..." />
                                    <img className="cursor-pointer" style={{ width: '2rem' }} src={Resources.Icon.SEARCH_YELLOW} onClick={commonSearch} />
                                </Grid>
                            </Grid>
                            <ul className="wsmenu-list">
                                <li className="menu-header-ancestor flag-header language">
                                    {renderLanguage()}
                                    <ul className="wsmenu-submenu menu-language">
                                        <li className="mt-3 mb-3 mr-3"  onClick={() => { GlobalState.setLanguage(Constants.Language.VN); window.location.reload() }}>
                                            <img src={Resources.Images.FLAG.VN} /> | VN
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <Grid className="dropdown">
                                <button className="menu-header-user" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <MenuIcon className="font-28" />
                                    <AccountCircleIcon className="font-28" />
                                </button>
                                <Grid className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    {GlobalState.user ?
                                        <>
                                            <Grid className="drop-items-yellow" onClick={() => history.push(Screens.PROFILE)}>{Strings.Profile.PROFILE}</Grid>
                                            <Grid className="drop-items-yellow" onClick={() => history.push(Screens.FAVORITE)}>{Strings.Common.FAVORITE}</Grid>
                                            <Grid className="drop-items-yellow" onClick={logout}> {Strings.Common.LOGOUT}</Grid>
                                        </>
                                        :
                                        <>
                                            <Grid className="drop-items-yellow" onClick={() => GlobalState.setModalLogin(true)}>
                                                {Strings.Common.LOGIN}
                                            </Grid>
                                            <Grid className="drop-items-yellow" onClick={() => GlobalState.setModalRegister(true)}>
                                                {Strings.Common.REGISTER}
                                            </Grid>
                                        </>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* Mobie */}
            <Grid className="container-header-mobie">
                <img className="cursor-pointer img-header-mobie" src={Resources.Images.REAL_ESTATE_LOGO} onClick={() => history.push(Screens.HOME)} />
                <Grid className={classes.menubar}>

                    {GlobalState.user ?
                        <Grid className="wrap-menu">
                            <Grid className={`${showAccount ? 'close-menu' : 'show-menu'} wrap-button-menu`}
                                onClick={() => { setShowSearch(false); setShowMenu(false); setShowAccount(!showAccount) }}>
                                <img style={{ width: '26px' }} src={Resources.Icon.HEART_YELLOW} onClick={() => history.push(Screens.FAVORITE)} />
                            </Grid>
                            <Grid className={`${showAccount ? 'show-menu' : 'close-menu'} wrap-button-menu`} onClick={() => setShowAccount(!showAccount)}>
                                <img className="img-16" src={Resources.Icon.CLOSE_YELLOW} />
                            </Grid>
                        </Grid>
                        : null
                    }
                    <Grid className="wrap-menu">
                        <Grid className={`${showSearch ? 'close-menu' : 'show-menu'} wrap-button-menu`}
                            onClick={() => { setShowMenu(false); setShowAccount(false); setShowSearch(!showSearch) }}>
                            <img className="img-28" src={Resources.Icon.SEARCH_YELLOW} />
                        </Grid>
                        <Grid className={`${showSearch ? 'show-menu' : 'close-menu'} wrap-button-menu`} onClick={() => setShowSearch(!showSearch)}>
                            <img className="img-16" src={Resources.Icon.CLOSE_YELLOW} />
                        </Grid>
                    </Grid>

                    <Grid className="wrap-menu">
                        <Grid className={`${showMenu ? 'close-menu' : 'show-menu'} wrap-button-menu`}
                            onClick={() => { setShowSearch(false); setShowAccount(false); setShowMenu(!showMenu) }}>
                            <img className="img-28" src={Resources.Icon.FILTER} />
                        </Grid>
                        <Grid className={`${showMenu ? 'show-menu' : 'close-menu'} wrap-button-menu`} onClick={() => setShowMenu(!showMenu)}>
                            <img className="img-16" src={Resources.Icon.CLOSE_YELLOW} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Collapse in={showMenu}>
                <Grid className="bg-white w-100">
                    <Grid className={indexsubMenu === 10 ? classes.menuDropdownSub : classes.menuDropdownRoot}>
                        {/* Sale */}
                        <Grid>
                            <Grid className={classes.parentList} onClick={() => handChangeIndex(1)}>
                                <Grid onClick={(e: any) => { e.preventDefault(); history.push(Screens.COMMERCE) }} className={`${classes.label} ${indexMenu === 1 ? 'seleted' : ''}`}>
                                    {Strings.Home.SALE}
                                </Grid>
                                {indexMenu === 1 ? <ExpandLessIcon color="inherit" fontSize="inherit" /> : <ExpandMoreIcon fontSize="inherit" color="inherit" />}
                            </Grid>
                            {/*Colapse for apartment highlight */}
                            <Collapse in={indexMenu === 1} timeout="auto" >
                                <Grid className={classes.submenu} onClick={() => handChangeSubIndex(10)}>
                                    <Grid onClick={(e: any) => { e.preventDefault(); history.push("/commerce?type=-1") }} className={`${classes.sublabel} ${indexsubMenu === 10 ? 'seleted' : ''}`}>
                                        {Strings.Common.PERSONAL_PROPERTY_HIGHTLIGHT}
                                    </Grid>
                                    {indexsubMenu === 10 ? <ExpandLessIcon color="inherit" fontSize="inherit" /> : <ExpandMoreIcon fontSize="inherit" color="inherit" />}
                                </Grid>
                                <Collapse in={indexsubMenu === 10} timeout="auto" unmountOnExit>
                                    {HL.map((a: any, index: number) => {
                                        return (
                                            <Grid className={classes.sub}>
                                                <Link to={`/apartment?&id=${a.id}`}>{a.name}</Link>
                                            </Grid>
                                        )

                                    })}
                                </Collapse>
                                <Grid className={classes.submenu}>
                                    <Link to="/commerce?type=0">{Strings.Common.PERSONAL_PROPERTY_RESORT}</Link>
                                </Grid>
                                <Grid className={classes.submenu}>
                                    <Link to="/commerce?type=1">{Strings.Common.PERSONAL_PROPERTY_HOUSE}</Link>
                                </Grid>
                                <Grid className={classes.submenu}>
                                    <Link to="/commerce?type=2">{Strings.Common.PERSONAL_PROPERTY_OFFICE}</Link>
                                </Grid>
                                <Grid className={classes.submenu}>
                                    <Link to="/commerce?type=3">{Strings.Common.PERSONAL_PROPERTY_URBAN_AREA}</Link>
                                </Grid>
                            </Collapse>
                        </Grid>
                        {/* FOR_RENT */}
                        <Grid className={classes.parentList}>
                            <Grid className={`${classes.label}`}>
                                {Strings.Home.FOR_RENT}
                            </Grid>
                        </Grid>
                        {/* News */}
                        <Grid className={classes.parentList}>
                            <Grid className={`${classes.label}`}>
                                <Link to="/news">{Strings.Home.NEWS_EVENT}</Link>
                            </Grid>
                        </Grid>
                        {GlobalState.user ?
                            <>
                                <Grid className={classes.label} onClick={() => history.push(Screens.PROFILE)}>{Strings.Profile.PROFILE}</Grid>
                                <Grid className={classes.label} onClick={logout}> {Strings.Common.LOGOUT}</Grid>
                            </>
                            :
                            <Grid className="d-flex">
                                <Grid className={`${classes.label} border-right pr-3 `} onClick={() => GlobalState.setModalLogin(true)}>
                                    {Strings.Common.LOGIN}
                                </Grid>
                                <Grid className={`${classes.label} pl-3`} onClick={() => GlobalState.setModalRegister(true)}>
                                    {Strings.Common.REGISTER}
                                </Grid>
                            </Grid>
                        }
                          <Grid className={`${classes.boxInputFind} mb-4 mt-3 w-75`}>
                            <input onKeyDown={onKeyDownEnter} defaultValue={valueSearch} onChange={(event) => setValueSearch(event.target.value)} className={classes.inputFind} type="text" placeholder="Tìm kiếm..." />
                            <img className="cursor-pointer" style={{ width: '2rem' }} src={Resources.Icon.SEARCH_YELLOW} onClick={commonSearch} />
                         </Grid>
                        <Grid className={classes.language}>
                            <Grid className="flag-header justify-content-center">
                                <img src={Resources.Images.FLAG.VN} onClick={() => { GlobalState.setLanguage(Constants.Language.VN); window.location.reload() }} />
                            </Grid>
                        </Grid>
                      
                    </Grid>
                </Grid>
            </Collapse>
            <Collapse in={showAccount}>
                <Grid container className="bg-white">

                </Grid>
            </Collapse>
            <Collapse in={showSearch} >
                <Grid container className="bg-white ">
                    <Grid className={classes.menuDropdownSearch}>
                        <Grid>
                            {/*Mục đích */}
                            <Grid>
                                <SelectCheckbox
                                    onChangeValue={(value) => {
                                        GlobalState.setFilter({
                                            ...GlobalState.filterObj, target: value
                                        });
                                        setKey(key + 1)

                                    }}
                                    variant="filled"
                                    placeholder={Strings.Header.TARGET}
                                    options={optionTarget || []}
                                    selected={optionTarget?.find(el => el.value === GlobalState.filterObj?.target)}
                                />
                            </Grid>
                            {/*Loai hinh bat dong san */}
                            <Grid>
                                <SelectCheckbox
                                    onChangeValue={(value) => {
                                        GlobalState.setFilter({
                                            ...GlobalState.filterObj, types: value
                                        });
                                        setKey(key + 1)
                                    }}
                                    variant="filled"
                                    placeholder={Strings.Home.TYPE_PERSONAL_PROPERTY}
                                    options={optionType || []}
                                    selected={optionType?.find(el => el.value === GlobalState.filterObj?.types)}
                                />
                            </Grid>
                            {/*Vi tri */}
                            <Grid>
                                <ControlAutocomplete
                                    label={Strings.Home.PROVINCE_CT}
                                    onChangeValue={(value) => {
                                        GlobalState.setFilter({
                                            ...GlobalState.filterObj,
                                            province: value,
                                            district: undefined
                                        });
                                        setOptionDistrict(addressDataList.find((a: any) => a.code === value)?.provinceList);
                                        setKey(key + 1);
                                    }}
                                    data={optionCity || []}
                                    // defaulValue={GlobalState.filterObj.province}
                                    defaulValue={optionCity?.find(el => el.value === GlobalState.filterObj?.province)}


                                />
                            </Grid>
                            <Grid>
                                <ControlAutocomplete
                                    onChangeValue={(value) => {
                                        GlobalState.setFilter({
                                            ...GlobalState.filterObj,
                                            district: value,
                                        });
                                        setKey(key + 1);
                                    }}

                                    label={Strings.Home.DISTRICT}
                                    data={optionDistrict || []}
                                    defaulValue={optionDistrict?.find(el => el.value === GlobalState.filterObj?.district)}

                                />
                            </Grid>
                            {/*Trang thai */}
                            <Grid>
                                <SelectCheckbox
                                    onChangeValue={(value) => {
                                        GlobalState.setFilter({
                                            ...GlobalState.filterObj,
                                            status: value
                                        });
                                        setKey(key + 1)
                                    }}
                                    variant="filled"
                                    placeholder={Strings.Home.STATUS_PROJECT}
                                    options={optionStatus || []}
                                    selected={optionStatus?.find(el => el.value === GlobalState.filterObj?.status)}

                                />
                            </Grid>
                            {/*Khoang gia */}
                            <Grid className={classes.progressbar}>
                                <label className={classes.searchtitle}>{Strings.Header.PRICE_BILION_RANGE}</label>
                                <Grid className="value-filter">
                                    {GlobalState.filterObj?.minPrice ?
                                        <Grid>
                                            <span className="mr-2">
                                                {GlobalState.filterObj?.minPrice / 1000000000} {Strings.Common.BILLION} - &nbsp;
                                                {GlobalState.filterObj?.maxPrice / 1000000000} {Strings.Common.BILLION}
                                            </span>
                                        </Grid>
                                        : Strings.Header.SEARCH_BY_PRICE
                                    }
                                </Grid>
                                {GlobalState.filterObj?.minPrice ?
                                    <ProcessSlider
                                        step={1000000000}
                                        minValue={1000000000}
                                        maxValue={100000000000}
                                        valueDefault={defaultPrice.length > 0 ? defaultPrice : [GlobalState.filterObj?.minPrice, GlobalState.filterObj?.maxPrice]}
                                        handleChange={(value) => { handleClose(value, 4) }}
                                    />
                                    :
                                    <ProcessSlider
                                        step={1000000000}
                                        minValue={1000000000}
                                        maxValue={100000000000}
                                        valueDefault={defaultPrice.length > 0 ? defaultPrice : [1000000000, 100000000000]}
                                        handleChange={(value) => { handleClose(value, 4) }}
                                    />
                                }
                            </Grid>
                            {/*Diện tích */}
                            <Grid className={classes.progressbar}>
                                <label className={classes.searchtitle}>{Strings.Header.AREA_SQUARE_METTER_RANGE}</label>
                                <Grid className="value-filter">
                                    {!Helpers.isNullOrEmpty(GlobalState.filterObj?.minArea) ?
                                        <Grid >
                                            <span className="mr-2">
                                                {GlobalState.filterObj?.minArea} {Strings.Common.SQUARE_METTER} - &nbsp;
                                                {GlobalState.filterObj?.maxArea} {Strings.Common.SQUARE_METTER}
                                            </span>
                                        </Grid>
                                        : Strings.Header.SEARCH_BY_AREA
                                    }
                                </Grid>
                                {!Helpers.isNullOrEmpty(GlobalState.filterObj?.minArea) ?
                                    <ProcessSlider
                                        step={1}
                                        minValue={0}
                                        maxValue={600}
                                        valueDefault={defaultArea.length > 0 ? defaultArea : [GlobalState.filterObj?.minArea, GlobalState.filterObj?.maxArea]}
                                        handleChange={(value) => { handleClose(value, 5) }}
                                    />
                                    :
                                    <ProcessSlider
                                        step={1}
                                        minValue={0}
                                        maxValue={600}
                                        valueDefault={defaultArea.length > 0 ? defaultArea : [0, 600]}
                                        handleChange={(value) => { handleClose(value, 5) }}
                                    />
                                }

                            </Grid>
                            <Grid className="container d-flex justify-content-center mb-5">
                                <button className={classes.button} type="submit" onClick={handleSearch}>{Strings.Common.FIND}</button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Collapse>
        </Grid>
    );
}

