import React, { useRef, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import "swiper/components/effect-fade/effect-fade.min.css";
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import { Constants, Resources } from "../../../constants";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

const StyledButton = withStyles({
    root: {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        display: "block",
        padding: "0",
        background: "#fffA",
        borderRadius: "5px",
        opacity: 0.6,
        zIndex: 5,
        "&:hover": {
            transition: ".5s all",
            backgroundColor: "#fff",
            opacity: 1,
        },
        "@media screen and (min-width: 640px)": {
            width: "48px",
            height: "56px !important",
        },
        "@media screen and (max-width: 640px)": {
            display: "none"
        }
    }
})(Button);

const BANNER_IMAGES = [
    {
        referenceUrl: "",
        imageUrl: Resources.Images.TEMP.BANNER1
    },
    {
        referenceUrl: "",
        imageUrl: Resources.Images.TEMP.BANNER2
    },
    {
        referenceUrl: "",
        imageUrl: Resources.Images.TEMP.BANNER3
    },
    {
        referenceUrl: "",
        imageUrl: Resources.Images.TEMP.BANNER4
    },
    {
        referenceUrl: "",
        imageUrl: Resources.Images.TEMP.BANNER5
    },
    {
        referenceUrl: "",
        imageUrl: Resources.Images.TEMP.BANNER6
    },
]


const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - ${theme.mixins.toolbar.minHeight}px - 16px)`,

        [theme.breakpoints.down("md")]: {
            height: "50vw",
        },
    },
    bannerImage: {
        objectFit: "fill !important" as any,
        width: "1480px",
        height: "650px",
        margin: "0",
        padding: "0",
        display: "block",
        cursor: "pointer",
        "@media only screen and (max-width: 1480px)": {
            width: "100%",
            height: "100%",
        }
    }
}));


const HomeBanner: React.FC = () => {
    const classes = useStyles();
    return (
        <Swiper
        className={classes.container}
            navigation= {true}
            slidesPerView={1}
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            autoplay={{
                "delay": 3000,
                "disableOnInteraction": false
            }}
            >
            {
                BANNER_IMAGES.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className={"custom-swiper-slide"}
                        style={{ backgroundColor: "#FFF" }}>
                        <LazyLoadImage
                            className={classes.bannerImage}
                            alt={"banner"}
                            effect="blur"
                            src={item.imageUrl}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default HomeBanner;