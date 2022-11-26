import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Resources, Screens, Strings } from '../constants';
import "../commons/styles/Styles.css";
import Col from './Col';
import Row from './Row'
import Text from './Text';
import { Helpers } from '../commons/utils';
import { CircularProgress, Link } from '@material-ui/core';
import Image from 'material-ui-image';
import { PaymentStatus } from '../constants/Enums';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: "100%",
            height: "100%",
            backgroundColor: "white",
            borderRadius: "0 0 var(--default-12px) var(--default-12px)",
            margin: '1rem 0rem'
        },
        image: {

        },
        padding: {
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingTop: "2rem",
            margin: 0
        },
        textContainerWithoutQuantity: {
            flex: 1,
            paddingLeft: "2rem",
            justifyContent: "space-between"
        },
        textContainerWithQuantity: {
            flex: 1,
            paddingLeft: "2rem",
            justifyContent: "space-between"
        },
        type: {
            fontSize: "1.167rem",
            fontWeight: 400,
            width: "100%"
        },
        name: {
            fontSize: "var(--default-16px)",
            fontWeight: 'bold',
            fontFamily: "var(--default-font-400)",
            width: "100%",
            marginBottom: "0.67rem",
        },
        price: {
            fontSize: "1.67rem",
            width: "100%",
            color: "#C98511"
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
            marginTop: "var(--default-32px)"
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
        },
        quantityButton: {
            width: `2.67rem`,
            height: `2.67rem`,
            background: "white",
            border: "1px solid #E9E9E9",
            borderRadius: "0.17rem",
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
        },
        quantityContainer: {
            alignItems: "center",
            display: "flex",
            marginTop: "1rem"
        },
        quantityText: {
            color: "#36393B",
            fontSize: "var(--default-16px)",
            fontWeight: "bold",
            marginLeft: "1.33rem",
            marginRight: "1.33rem",
            width: "1.5rem"
        },
        deleteContainer: {
            flex: 1,
            textAlign: "right"
        },
        delete: {
            color: "#D44333",
            fontSize: "var(--default-14px)",
            fontWeight: 600,
            textDecoration: "underline"
        },
    }),
);

interface IProps {
    name: string;
    nameContent?: string;
    price: number;
    quantity?: number;
    image: string;
    typeName?: string,
    type?: number,
    idProject?: string;
    idApartment?: string;
}

export default function ProductItem(props: IProps) {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(props.quantity || 0);
    const renderWithQuantity = () => {
        return (
            <>
                <Text className={`${classes.name} wordWrap`}>{props.name}</Text>
                <Text className={`${classes.price} wordWrap`}>{Helpers.formatCurrency(props.price || 0)}</Text>
            </>
        )
    }
    const renderWithoutQuantity = () => {
        return (
            <Grid className="d-flex flex-column justify-content-between">
                {props.typeName && (<Text className={`${classes.type} wordWrap`}>{props.typeName.toUpperCase()}</Text>)}
                {props.name ?
                    <Grid className={`${classes.name} wordWrap`} >
                        <Link color="inherit" href={`${Screens.PROJECT}?&id=${props.idProject}`}>
                            {props.name}
                        </Link>
                    </Grid>
                    : null}
                {props.nameContent ?
                    <Grid className={`${classes.name} wordWrap`} >
                        <Link className={`${classes.name} wordWrap`} color="inherit" href={`${Screens.APARTMENT}?&id=${props.idProject}`}>
                            {props.nameContent}
                        </Link>
                    </Grid>
                    : null}
                    <Grid className={`${classes.price} wordWrap`}>
                    
                    
                    {Helpers.formatCurrency(props.price || 0)}
                    {props.type === PaymentStatus.Pending ?
                    <button className="btn-size-sm-yellow ">
                        {Strings.Profile.CONFIRMING}
                    </button>
                    : null
                }
                {props.type  === PaymentStatus.Success ?
                    <button className="btn-size-sm-green ">
                        {Strings.Profile.CONFIRMING}
                    </button>
                    : null
                }
                {props.type  === PaymentStatus.Canceled ?
                    <button className="btn-size-sm-red ">
                        {Strings.Profile.CONFIRMING}
                    </button>
                    : null
                }
                {props.type === PaymentStatus.Rejected ?
                    <button className="btn-size-sm-info ">
                        {Strings.Profile.CONFIRMING}
                    </button>
                    : null
                }
                    </Grid>
                
            </Grid>
        )
    }
    const up = () => {
        setQuantity(quantity + 1);
    }

    const down = () => {
        if (quantity - 1 === 0) {
            return;
        }
        setQuantity(quantity - 1);
    }
    return (
        <Grid className={classes.root}>
            <Row>
                <Image loading={<CircularProgress style={{ color: 'var(--default-text-color-yellow)' }} />} style={{ width: '10rem', height: '10rem', objectFit: 'cover', paddingTop: '0', background: 'rgb(247 238 223)', borderRadius: '12px' }} className={classes.image} src={props.image} />
                <Col className={props.quantity ? classes.textContainerWithQuantity : classes.textContainerWithoutQuantity}>
                    {props.quantity ? renderWithQuantity() : renderWithoutQuantity()}
                    {props.quantity ?
                        <Row className={classes.quantityContainer}>
                            <Grid className={classes.quantityButton} onClick={up}>
                                <img src={Resources.Icon.ADD} />
                            </Grid>
                            <Text className={classes.quantityText}>{quantity < 10 ? `0${quantity}` : quantity}</Text>
                            <Grid className={classes.quantityButton} onClick={down}>
                                <img src={Resources.Icon.MINUS} />
                            </Grid>
                            <Grid className={classes.deleteContainer}>
                                <Text className={classes.delete}>{Strings.Common.DELETE}</Text>
                            </Grid>
                        </Row> : null
                    }
                </Col>
            </Row>
        </Grid>
    );
}