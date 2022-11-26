import React from "react";
import "../commons/styles/Styles.css";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Text from "./Text";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        iconInfo: {
            width: "var(--default-16px)!important",
            height: "var(--default-16px)",
        },
        textInfo: {
            fontFamily: `var(--default-font-400)`,
            fontSize: "var(--default-14px)",
            color: "#4F4F4F",
            marginLeft: "0.75rem",
            whiteSpace: "nowrap"
        },
        ml17px: {
            marginLeft: "1.417rem"
        },
        wrap:{
            zIndex: 2,
            display: 'flex',
            marginRight: '0.5rem',
            alignItems: 'flex-end'
        }
    }),
);

interface IProps {
    productInfoList: First[];
    className?: any;
}
interface First {
    text?: any;
    icon: string;
}

export default function ProductInfo(props: IProps) {
    const classes = useStyles();
    const productInfoList: First[] = props.productInfoList || [{} as First];
    return (
        <Grid className={`${props.className || ""} d-flex`}>
                {productInfoList.map((item, index)=>{
                    return(
                        <Grid className={classes.wrap} key={`${index}product`}>
                            <img className={classes.iconInfo} src={item.icon} />
                            <Text className={classes.textInfo}>{item.text}</Text>
                         </Grid>
                    )
                })}
        </Grid>
    );
}