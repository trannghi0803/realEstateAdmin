import React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import "../commons/styles/Styles.css";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            display: "flex"
        },
        alignCenter: {
            alignItems: "center"
        },
        padding: {
            paddingLeft: "2rem",
            paddingRight: "2rem"
        },
        flexWrap: {
            flexWrap: "unset"
        }
    }),
);

interface IProps extends GridProps {
    alignCenter?: boolean;
    isPadding?: boolean;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    rootClassName?: string;
}

export default function Row(props: IProps) {
    const classes = useStyles();
    return (
        <div style={{ 
                marginTop: props.top ? `${props.top / 12}rem` : 0,
                marginLeft: props.left ? `${props.left / 12}rem` : 0,
                marginRight: props.right ? `${props.right / 12}rem` : 0,
                marginBottom: props.bottom ? `${props.bottom / 12}rem` : 0
            }}
            className={`
                ${classes.root} 
                ${props.alignCenter ? classes.alignCenter: ""} 
                ${props.isPadding ? classes.padding: ""} 
                ${props.rootClassName ? props.rootClassName: ""}`
            }>
            <Grid container direction={"row"} className={`${props.className} ${classes.flexWrap}`}>
                {props.children}
            </Grid>
        </div>
    );
}