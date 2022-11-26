import React from "react";
import { Strings } from "../constants";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import "./ComponentStyles.css";
import { Grid } from "@material-ui/core";
import { Helpers } from "../commons/utils";
interface IProps {
    unit?: string;
    number: Array<number>;
    classNumber?: string;
    classUnit?: string;
}
const useStyles = makeStyles(() =>
    createStyles({
        number: {
            fontSize: `2rem`,
            fontWeight: 700,
            color: `var(--default-text-color-yellow)`,
            lineHeight: 1
        },
        suffix: {
            marginLeft: `2px`,
            fontSize: `var(--default-14px)`,
            fontWeight: 400,
            fontFamily: `var(--default-font-400)`,
            color: '#87898B',
            lineHeight: 1
        }
    }),
);

export default function CardPriceString(props: IProps) {
    const classes = useStyles();
    const formatNumber = (number: number) => {
        if (number >= 100000 && number < 1000000) {
            const calculation = number / 100000;
            return calculation
        }
        if (number >= 1000000 && number < 1000000000) {
            const calculation = number / 1000000;
            if (!Number.isInteger(calculation)) {
                return calculation.toPrecision(3)
            }else{
               return calculation
            }
        }
        if (number >= 1000000000) {
            const calculation = number / 1000000000;
            if (!Number.isInteger(calculation)) {
                if (calculation < 10) {
                    return calculation.toPrecision(3)
                } else {
                    return calculation.toPrecision(4)
                }
            }else{
                return calculation
            }
        }
        return number
    };
    const getSuffix = (number: number) => {
        if (number >= 100000 && number < 1000000) {
            return Strings.Common.THOUSANDS
        }
        if (number >= 1000000 && number < 1000000000) {
            return Strings.Common.MILLION
        }
        if (number >= 1000000000) {
            return Strings.Common.BILLION
        }
        return ''
    }
    const checkSuffix = () => {
        // return true order false like 
        if (props.number.length > 1) {
            if (props.number.findIndex(item => item.toString().length !== props.number[0].toString().length) !== -1) {
                return true
            }
        }
        return false
    }
    return (
        <Grid>
            {checkSuffix()
                ?
                <Grid className="d-flex flex-wrap line-height-1">
                    {props.number.map((el, index) => {
                        return (
                            <Grid key={index} className={`${props.classNumber ? props.classNumber : classes.number} line-height-1 d-flex align-items-baseline flex-wrap`}>
                                {el >= 100000 ? 
                                <> 
                                    {formatNumber(el)}
                                    <Grid className={props.classUnit ? props.classUnit : classes.suffix}>
                                        {getSuffix(el)} {props.unit ? `/ ${props.unit}` : ''}
                                    </Grid>
                                    <span className={`${props.number.length > 1 && index < props.number.length - 1 ? ' pl-2 pr-2' : 'd-none'} `}>
                                        -
                                    </span>
                                </> 
                                : ''}

                            </Grid>
                        )
                    })}
                </Grid>
                :
                <Grid className="d-flex align-items-baseline flex-wrap">
                    {props.number[0] >= 100000 ? 
                    <>
                        {props.number.map((el, index) => {
                            return (
                                <Grid key={index} className={props.classNumber ? props.classNumber : classes.number}>
                                    {formatNumber(el)}
                                    <span className={`${props.number.length > 1 && index < props.number.length - 1 ? ' pl-2 pr-2' : 'd-none'} `}>
                                        -
                                    </span>
                                </Grid>
                            )
                        })}
                        <Grid className={props.classUnit ? props.classUnit : classes.suffix}>
                            {getSuffix(props.number[0])} {props.unit ? `/ ${props.unit}` : ''}
                        </Grid>
                    </>
                    :
                        <Grid className={props.classNumber ? props.classNumber : classes.number}>
                            {props.number[0] > 0 ?Helpers.formatCurrency(props.number[0])  : ''}
                        </Grid>
                    }
                    
                </Grid>
            }

        </Grid>
    );
}
