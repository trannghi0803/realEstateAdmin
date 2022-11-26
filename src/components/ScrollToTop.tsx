import { Dialog, DialogContent, Fade, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Resources,  Strings } from "../constants";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import "./ComponentStyles.css";
import { GlobalState } from "../stores/GlobalState";
import {    Helpers, IInput, IOptionSelect, IProject, IResult, ISystem } from "../commons/utils";
import { CodeSystem, MessageApi } from "../constants/Enums";
import Inputs from "./Inputs";
import { ControlButton } from ".";
import CloseIcon from '@material-ui/icons/Close';
import { Autocomplete } from "@material-ui/lab";
import { ProjectService } from "../app/services";
import ReCAPTCHA from "react-google-recaptcha";
interface IProps {
}
const useStyles = makeStyles(() => ({
    scroll: {
        transition: `all 1s linear`,
    },
    floatingButton: {
        display: `flex`,
        flexDirection: `column`,
        position: `fixed`,
        bottom: `1.25rem`,
        right: `1rem`,
        alignItems: "flex-end",
        transition: `all 1s ease-out`,
        zIndex: 10,
    },
    img: {
        width: `5.75rem`,
        height: `5.75rem`,
        // margin: `0.2rem 0rem`,
        marginRight: "0.58rem",
        marginBottom: "0.8rem",
        transition: `all 0.5s`,
        animationName: `$shakeAnim1`,
        animationDuration: '1s',
        animationIterationCount: `infinite`,
        animationTimingFunction: `ease-in`,
        '&:hover': {
            animation: 'unset'
        },
    },
    arrow: {
        transition: `all 0.5s`,
        width: "4rem",
        height: "4rem",
        borderRadius: "50px",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginTop: "0.2rem",
        border: '2px solid #cb9b48',
        color: 'var(--default-text-color-yellow)',
        fontSize: '2.2rem'
    },
    "@keyframes shakeAnim": {
        "0%": { opacity: `1` },
        "10%": { opacity: `1` },
        "20%": { opacity: `1` },
        "30%": { opacity: `1` },
        "40%": { opacity: `1` },
        "50%": { opacity: `0` },

    },
    "@keyframes shakeAnim1": {
        "0%": { transform: `scale(1)` },
        "50%": { transform: `scale(1.2)` },
        "100%": { transform: `scale(1)` },
    },
    "@media (max-width: 789px)": {
        arrow: {
            width: `3.5rem`,
            height: `3.5rem`,
        },
    },
    imgRightModel: {
        position: 'absolute',
        bottom: '0rem',
        right: '0rem',
        opacity: '0.7',
        zIndex: 0,
    },
    autocomplete:{
        '& .MuiInputBase-input':{
            fontSize: `var(--default-14px)`
        },
        '& .MuiInputLabel-outlined':{
            width: 'fit-content',
            fontSize: `var(--default-14px)`
        },
        '& .MuiFormControl-marginNormal':{
            margin: '0rem'
        }
        
    }
}));
export default function ScrollToTop(props: IProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isShowText, setShowText] = React.useState<boolean>(true); 

    const toggleVisibility = () => {
        if (window.pageYOffset > 10) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        setInterval(() => {
            setShowText( !isShowText)
        }, 6000);
    }, []);
    const classes = useStyles();
    
    return (
        <div>
            <div className={classes.floatingButton}>
                <div className={`wrap-contract`}>
                    <div className="text-contract"> <span>{Strings.Components.CONTACT_CONSULTANTS}</span> </div>
                    <a onClick={() =>{}}>
                        <img className="icon-contract" src={Resources.Icon.CUSTOMER_SERVICE} />
                    </a>
                </div>
                <div className={`wrap-contract`}>
                    <div className="text-contract"> <span>{Strings.Components.CHAT_WITH_US}</span> </div>
                    <a className="cursor-pointer" href="#">
                        <img className="icon-contract" src={Resources.Icon.ZALO} />
                    </a>
                </div>
                <div className={`${isShowText ? 'show-text' : ''} wrap-contract`}>
                    <div className="text-contract">{Strings.Components.HOTLINE}{GlobalState.contacts?.find((el: ISystem) => el.settingCode === CodeSystem.HOTLINE_INFO_SYSTEM_CODE)?.setting}</div>
                    <a href={`tel:${GlobalState.contacts?.find((el: ISystem) => el.settingCode === CodeSystem.HOTLINE_INFO_SYSTEM_CODE)?.setting}`}><img className="icon-contract" src={Resources.Icon.PHONE} /></a>
                </div>
                <Fade in={isVisible}>
                    <div className={classes.scroll + ' ' + classes.arrow} onClick={scrollToTop}>
                        <ExpandLessIcon fontSize="inherit" />
                    </div>
                </Fade>
            </div>
            
        </div>
    );
}
