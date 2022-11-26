import React from "react";
import "../commons/styles/HomeHeaderStyles.css";
import { Slider, SliderProps } from "@material-ui/core";
import { Strings } from "../constants";
import { Helpers } from "../commons/utils";
interface IProps extends SliderProps  {
	valueDefault?: number | number[];
	handleChange: (value: any) => void;
	maxValue: number;
	minValue: number;
	unit?: string;
	step?: number;
}
function valuetext(value: number) {
	return `${value}°C`;
  }
export default function ProcessSlider(props: IProps) {
	const handleChange = (event: any, newValue: number | number[]) => {
		props.handleChange(newValue);
	};
	// useEffect(() => {
	// 	if(props.valueDefault){
	// 		props.handleChange(props.valueDefault);
	// 	}
	// },[props.valueDefault]);
	return (
		<div className="w-100">
			<Slider
				className="slider-progress"
				defaultValue={props.valueDefault}
				max={props.maxValue}
				min={props.minValue}
				onChange={handleChange}
				aria-labelledby="range-slider"
				getAriaValueText={valuetext}
				step={props.step}
			/>
			<div className="d-flex justify-content-between">
				<div>
					{Helpers.handleNumberString(props.minValue)}
				</div>
				<div>
					{Helpers.handleNumberString(props.maxValue)}
				</div>
			</div>
		</div>
	);
}
