import React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import "../commons/styles/Styles.css";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            // width: "0rem"
        }
    }),
);

interface IProps extends GridProps {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    rootClassName?: string;
    a?: any;

}

export default function Col(props: IProps) {
    const classes = useStyles();
    return (
        // <div style={{
        //     marginTop: props.top ? `${props.top / 12}rem` : 0,
        //     marginLeft: props.left ? `${props.left / 12}rem` : 0,
        //     marginRight: props.right ? `${props.right / 12}rem` : 0,
        //     marginBottom: props.bottom ? `${props.bottom / 12}rem` : 0
        // }}
        //     className={`
        //         ${classes.root} 
        //         ${props.rootClassName ? props.rootClassName : ""}`
        //     }>
        <Grid item style={{
            marginTop: props.top ? `${props.top / 12}rem` : 0,
            marginLeft: props.left ? `${props.left / 12}rem` : 0,
            marginRight: props.right ? `${props.right / 12}rem` : 0,
            marginBottom: props.bottom ? `${props.bottom / 12}rem` : 0
            }} xs={props.xs} lg={props.lg} md={props.md} sm={props.sm} xl={props.xl} className={props.className} container >
            {/* }} xs={props.xs} className={props.className}> */}
            {props.children}
        </Grid>
        // </div>
    );
}