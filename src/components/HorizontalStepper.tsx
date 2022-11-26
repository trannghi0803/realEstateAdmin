import React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import "../commons/styles/Styles.css";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { IOptionStepper } from "../commons/utils";
import { Text } from "../components"
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: `5.33rem`,
            // backgroundColor: 'var(--default-text-color-green)',
            display: 'flex',
            padding: '0rem 1rem',
            alignItems: 'center',
        },
        box: {
            display: 'flex',
            alignItems: 'flex-start',
            overflow: 'auto',
            padding: '0rem 1rem',
            margin: '0rem auto',
            '&::-webkit-scrollbar': {
                display: `none`,
            },
        },
        stepContainer: {
            position: `relative`,
            padding: '0rem '
        },
        stepLabel: {
            // flexDirection: 'column',
            display: 'flex',
            alignItems: 'start'
        },
        iconContainer: {
            display: 'flex',
            paddingRight: '0px',
            flexShrink: 0,
            height: '4rem',
            width: '4rem',
            alignItems: 'center',
            justifyContent: 'center'
        },
        iconStep: {
            color: `#fff`,
            width: `var(--default-16px)`,
            height: `var(--default-16px)`,
            display: `flex`,
            zIndex: 1,
            alignItems: `center`,
            borderRadius: `50%`,
            justifyContent: `center`,
            background: '#AFAFAF',
        },
        stepName: {
            marginTop: 'var(--default-16px)',
            textAlign: 'center',
            display: 'block',
            color: '#AFAFAF',
            fontSize: 'var(--default-12px)',
        },
        stepCircle: {
            width: `var(--default-16px)`,
            height:  `var(--default-16px)`,
            borderRadius: `2rem`,
            background: `rgba(255, 255, 255, 0.1)`,
            justifyContent: `center`,
            alignItems: `center`,
            display: `flex`,
            backgroundColor: 'var(--default-text-color-green)',
        },
        stepChildrenCircle: {
            // width: `2.67rem`,
            // height: `2.67rem`,
            borderRadius: `1.33rem`,
            justifyContent: `center`,
            alignItems: `center`,
            display: `flex`,
            // border: `1px solid rgba(255, 255, 255, 0.2)`,
        },
        stepNumber: {
            color: `white`,
            // fontWeight: 700,
            fontSize: 'var(--default-10px)',
        },
        lineStep: {
            height: '1px',
            width: '5rem',
            marginLeft: '1rem',
            backgroundColor: `#E2E2E2`,
        },
        lineStepActive: {
            left: 'calc(-50% + 2rem)',
            right: 'calc(50% + 2.7rem)',
        },
        lineStepLastActive: {
            left: 'calc(-50% + 2.65rem)',
            right: 'calc(50% + 2rem)',
        },
        icon: {
            width: `1rem`,
            height: `0.67rem`,
        },
        textAfter: {
            fontSize: 'var(--default-10px)',
        },
        boxName: {
            // width: '8rem'
        },
        stepNameActive:{
            marginTop: 'var(--default-16px)',
            textAlign: 'center',
            display: 'block',
            color: 'var(--default-text-color-green)',
            fontSize: 'var(--default-12px)',
        },
        '@media (max-width: 560px)': {
            boxName: {
                width: `6rem`,
            }
        },
    }),
);
interface IProps extends GridProps {
    stepValue?: IOptionStepper[],
    indexActive: number;
}
export default function HorizontalStepper(props: IProps) {
    const classes = useStyles();
    React.useEffect(() => {
        if(props.indexActive){
            const box = document.getElementById('box');
            const element = document.getElementById(`stepper${props.indexActive}`);
            if(box && element){
                box!.scrollLeft += element!.offsetLeft
            }
        }
    }, [props.indexActive])
    return (
        <Grid className={classes.root}>
            <Grid className={classes.box} id="box">
                {props.stepValue?.map((value, index) => {
                    return (
                        <Grid className={classes.stepContainer} key={value.label} id={'stepper' + (index +1)}>
                            <Grid className="d-flex align-items-baseline">
                                    <span className={classes.stepLabel}>
                                        <span className={classes.iconContainer}>
                                            <Grid>
                                                {(props.indexActive - 1) == index ?
                                                    <Grid className={classes.stepCircle}>
                                                            <Grid className={classes.stepChildrenCircle}>
                                                                <Text className={classes.stepNumber}>{(index + 1)}</Text>
                                                            </Grid>
                                                    </Grid>
                                                    :
                                                    <Grid className={classes.iconStep}>
                                                            <span className={classes.textAfter}>
                                                                {(index + 1)}
                                                            </span>
                                                    </Grid>
                                                }
                                            </Grid>
                                        </span>
                                        {(props.indexActive - 1) == index 
                                        ? 
                                            <span className={classes.boxName}>
                                                <span className={classes.stepNameActive}>
                                                    {value.label}
                                                </span>
                                            </span> 
                                        : 
                                            <span className={classes.boxName}>
                                                <span className={classes.stepName}>
                                                    {value.label}
                                                </span>
                                            </span>
                                        }
                                        
                                    </span>
                                    {(index + 1) < (props.stepValue?.length || 0)
                                    ?
                                    <Grid className={`${classes.lineStep} ${(props.indexActive - 1) == index ? classes.lineStepActive : ''} ${props.indexActive == index ? classes.lineStepLastActive : ''}`}>
                                    </Grid>
                                    : 
                                    ''
                                    }
                                </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    );
}