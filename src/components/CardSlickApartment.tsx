import React, { useRef } from "react";
import "../commons/styles/HomeHeaderStyles.css";
import "./ComponentStyles.css";
import { Resources } from "../constants";
import { Grid } from "@material-ui/core";
import TitleLink from "./TitleLink";
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
interface IProps {
	children?: React.ReactNode;
	widthItem?: string;
	optionSlider?: any;
	className?: string;
	classNameTitle?: string;
	nameTitle?: string;
	setting?: any;
	lengthCard?: number;
	onClick?: () => void;
}
export default function CardSliderAparment(props: IProps) {
	const optionsOwl = {
		spaceBetween: 20,
		slidesPerView: 'auto',
		autoHeight: true
	}
	const setting = props.setting || optionsOwl;
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<Grid className={`${props.className} frame-container-owl-car ${props.onClick ? "cursor-pointer" : ""}`}>
			<Grid className="title-owl-car d-flex justify-content-between">
				<TitleLink className={props.classNameTitle ? props.classNameTitle : ''} nameTitle={(props.nameTitle || '')} onClick={props.onClick ? props.onClick : () => {}}></TitleLink>
				<Grid className="d-none d-md-block">
					<button className="btn-prev-next" ref={prevRef} >
						<img className="img-24" src={Resources.Icon.LEFT} />
					</button>
					<button className="btn-prev-next" ref={nextRef} >
						<img className="img-24" src={Resources.Icon.RIGHT} />
					</button>
				</Grid>
			</Grid>
			<Grid className="content-owl">
				<Swiper   
					navigation={{
						prevEl: prevRef.current ? prevRef.current : undefined,
						nextEl: nextRef.current ? nextRef.current : undefined,
					}}
					onInit={(swiper: any) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.update();
					}}
	  				{...setting} >
					{props.children}
				</Swiper>
			</Grid>
		</Grid>
	);
}
