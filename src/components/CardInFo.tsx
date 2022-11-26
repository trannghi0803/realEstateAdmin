import React from "react";
import "./ComponentStyles.css";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    img:{
        height: `3.33rem`,
        width: `3.33rem`,
    },
    card:{
        display: `flex`,
        flexDirection: `column`,
        flexWrap: `nowrap`,
        justifyContent: `center`,
        alignItems: `center`,
        alignContent: `stretch`,
        width: `100%`,
        padding: `3.33rem`
    },
    title:{
        fontStyle: `normal`,
        fontWeight: `bold`,
        fontSize: `2rem`,
        lineHeight: `2.66rem`,
        textAlign: `center`,
        textTransform: `uppercase`,
        color: `#FFFFFF`,
        marginTop: `3.33rem`,
        marginBottom: `2rem`,
    },
    content: {
        color: '#fff',
        marginBottom: `3.33rem`
    }
}));
interface IProps {
    image?: string
    background?: string;
    content?: string;
    title?: string;
    children: React.ReactNode;
}
export default function CardInfo(props: IProps) {
    const classes = useStyles();
    const { children } = props;
    return (
        <div className={classes.card} style={{background: props.background}}>
            <img src={props.image}/>
            <div className={classes.title}>
                {props.title}
            </div>
            <div className={classes.content}>
                {props.content}
            </div>
            <div {...props}>
                {children}
            </div>
        </div>
        
    );
}
