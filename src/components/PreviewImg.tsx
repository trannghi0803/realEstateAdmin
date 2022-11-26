import {Grid} from "@material-ui/core";
import React from "react";
import { Resources } from "../constants";
import "./ComponentStyles.css";
interface IProps {
    children: React.ReactNode;
	onClick?: () => void;

}
export default function PreviewImg(props: IProps) {
    const { children } = props;
    const onClick = () => {
        if(props.onClick){
            props.onClick();
        }
	};
    return (
        <Grid className="container-preview-img">
            {children}
            <Grid className="middle-preview-img">
                <Grid className="text-preview-img" onClick={onClick}>
                    <img src={Resources.Icon.ZOOM_IN}/>
                </Grid>
            </Grid>
        </Grid>
    );
}
