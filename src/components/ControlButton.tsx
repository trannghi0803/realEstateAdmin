import { Button} from "@material-ui/core";
import React from "react";
import "./ComponentStyles.css";
// interface IProps extends DividerProps {
//     text: string;
//     image?: any;
//     classText?: any;
//     classImg?: any;
//     classButton?: any;
// }
export default function ControlButton(props: any) {
    return (
        <Button id={props.id} style={{ marginTop: `${(props.top || 0) / 12}rem` }} variant="contained" color="default" className={`button btn-action ${props.classButton ? props.classButton : ""}`} onClick={props.onClick}>
            {props.image ? <img src={props.image} className={props.classImg}/> : null}
            <span className={`b-text ${props.image ? "ml-3" : ""} ${props.classText ? props.classText : ""}`}>{props.text}</span>
        </Button>
    );
}
