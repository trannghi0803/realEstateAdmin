import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Resources, Strings } from '../constants';
import "../commons/styles/Styles.css";
import "./ComponentStyles.css";
import { Helpers, ICart } from '../commons/utils';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: "100%",
            backgroundColor: "white",
            borderRadius: "0 0 var(--default-12px) var(--default-12px)",
            boxShadow: `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`,
        },
        image: {
            width: "10rem",
            height: "10rem",
            borderRadius: "1rem"
        },
        padding: {
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingTop: "2rem",
            margin: 0,
            background: '#fff'
        },
        textContainer: {
            flex: 1,
            paddingLeft: "2rem",
            paddingRight: "2rem"
        },
        type: {
            fontSize: "1.167rem",
            fontWeight: 400,
            width: "100%"
        },
        name: {
            fontSize: "var(--default-16px)",
            fontWeight: 'bold',
            marginTop: "1rem",
            fontFamily: `var(--default-font-400)`,
            width: "100%"
        },
        price: {
            fontSize: "1.67rem",
            marginTop: "var(--default-20px)",
            width: "100%"
        },
        addToCard: {
            flex: 1,
            display: "inline-flex",
            justifyContent: "space-between",
            marginLeft: "var(--default-20px)",
            alignItems: "center",
            marginRight: "var(--default-24px)",
        },
        buttonContainer: {
            display: "inline-flex",
            margin: "var(--default-32px) 0rem",
            marginRight: "var(--default-32px)",
            justifyContent: 'space-between',
            flexWrap: 'wrap',
        },
        leftButton: {
            width: "14.58rem",
            height: "4.33rem",
            border: "0.083rem solid #E9E9E9",
            borderRadius: "0.67rem",
            backgroundColor: "#FFFFFF!important",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            display: "flex"
        },
        leftText: {
            fontSize: "var(--default-16px)",
            fontWeight: 400,
            color: "#1F1F1F"
        },
        rightText: {
            fontSize: "var(--default-16px)",
            fontWeight: 400,
            color: "#FFFFFF"
        },
        rightButton: {
            width: "14.58rem",
            height: "4.33rem",
            border: "0.083rem solid #E9E9E9",
            borderRadius: "0.67rem",
            backgroundColor: "#05626A!important",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            display: "flex"
        },
        shoppingCart: {
            '&:hover': {
                fill: "#36393B",
             },
        },
        buttonSpacing: {
            width: "var(--default-16px)",
        },
        exitContainer: {
            width: `3rem`,
            justifyContent: "flex-end",
            display: "flex"
        }
    }),
);
interface IProps {
    shopingCart?: ICart[];
	typeProject?: any;
	name?: string;
    projectName?: string;
	price?: number;
	fontSizePrice?: string;
	onClick?: any;
    onExit?: () => void;
    onViewCart?: () => void;
    onPayment?: () => void;
}
export default function CardProduct(props: IProps) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid className="standard-frame">
                <Grid container spacing={3} direction="column" className={classes.padding}>
                    <Grid container direction="row">
                        <img src={Resources.Icon.CIRCLE_CHECKED} />
                        <div className={classes.addToCard}>
                            <div className={`wordWrap`}>{Strings.Components.ADDED_TO_CART}</div>
                            <div className={classes.exitContainer} onClick={props.onExit}>
                                <img src={Resources.Icon.EXIT} />
                            </div>
                        </div>
                    </Grid>
                    {props.shopingCart?.map((value, index)=>{
                                return(
                                    <Grid container direction="row" className="mt-1r" key={index + 'shopingCart'}>
                                        <img className={classes.image} src={value.img} />
                                        <Grid direction="column" className={classes.textContainer}>
                                            <div className={`${classes.type} wordWrap`}>{value.name}</div>
                                            <div className={`${classes.name} wordWrap`}>{value.projectName}</div>
                                            <div className={`${classes.price} wordWrap`}>{Helpers.formatCurrency(value.listPrice || 0)}</div>
                                        </Grid>
                                    </Grid>
                                )
                        
                    })}
                    <Grid  className={classes.buttonContainer} >
                        <Grid alignItems="center" justify="center">
                            <div className={`${classes.leftButton} button btn-action-gray mt-3`} onClick={props.onViewCart}>
                                <div className={`${classes.leftText} wordWrap`}>{Strings.Components.SHOW_VIEW_CART}</div>
                                <img className={`ml-1r`} src={Resources.Icon.SHOPPING_CART_BLACK} />
                            </div>
                        </Grid>
                        <div className={classes.buttonSpacing}></div>
                        <Grid alignItems="center" justify="center">
                            <div className={`${classes.rightButton} button btn-action-gray mt-3`} onClick={props.onPayment}>
                                <div className={`${classes.rightText} wordWrap`}>{Strings.Common.PAY}</div>
                                <img className={`ml-1r`} src={Resources.Icon.CREDIT_CARD} />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </div>
    );
}