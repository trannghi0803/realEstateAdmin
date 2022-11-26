import React from "react";
import "../commons/styles/Styles.css";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        separator: {
            height: "1px",
            backgroundColor: "#EEEEEE",
            width: "100%",
            zIndex: 1,
        }
    }),
);

interface IProps {
    top?: number;
    bottom?: number;
}

export default function Separator(props: IProps) {
    const classes = useStyles();
    return (
        <div className={classes.separator}
            style={{ marginTop: props.top ? `${props.top / 12}rem` : 0,  marginBottom: props.bottom ? `${props.bottom / 12}rem` : 0 }}>
        </div>
    );
}