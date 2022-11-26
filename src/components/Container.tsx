import React from "react";
import "../commons/styles/Styles.css";
import { DividerProps } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            // backgroundColor: "#F8F8F8",
            // height: `100%`,
        }
    }),
);

export default function Container(props: DividerProps) {
    const classes = useStyles();
    return (
        <div className={`${classes.container}`}>{props.children}</div>
    );
}