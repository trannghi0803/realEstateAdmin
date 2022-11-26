import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        circle1: {
            width: "3.33rem",
            height: "3.33rem",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "1.67rem",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            position: 'relative',
            transition: 'all 0.5s',
            cursor: 'pointer',
            margin: '1rem 0rem',
            '&:hover': {
                boxShadow: `0px 10px 10px rgba(0, 0, 0, 0.2)`,
            },
            '&::after':{
                content: `''`,
                textDecoration: `none`,
                textTransform: `uppercase`,
                position: `absolute`,
                width: '100%',
                height: '100%',
                top: `0`,
                left:`0`,
                borderRadius: '100px',
                display: 'flex',
                zIndex: -1,
                transition: `all .5s`,
                background: `#fff`,
            }
        },
        circle2: {
            width: "4rem",
            height: "4rem",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "2rem",
            backgroundColor: "#05626A",
            display: "flex",
            position: 'relative',
            transition: 'all 0.5s',
            cursor: 'pointer',
            margin: 'var(--default-16px) 0rem',
            '&:hover': {
                boxShadow: `0px 10px 10px rgba(0, 0, 0, 0.2)`,
            },
            '&::after':{
                content: `''`,
                textDecoration: `none`,
                textTransform: `uppercase`,
                position: `absolute`,
                width: '100%',
                height: '100%',
                top: `0`,
                left:`0`,
                borderRadius: '100px',
                display: 'flex',
                zIndex: -1,
                transition: `all .5s`,
                background: `#05626A`,
            }
        },
        icon: {
            marginLeft: "auto",
            marginRight: "auto",
            width: 'var(--default-20px)',
        },
        animation:{
            transition: 'all .3s',
            '&:hover': {
                '&::after':{
                    animation: `$comeFromBottom 0.3s ease-out 0.3s`,
                }
            },
            '&:active': {
                transform: 'scale(0.8)'
            }
        },
       "@keyframes comeFromBottom": {
            "0%": {
                opacity: 1,
                transform: `scaleX(1) scaleY(1)`,
            },
            "100%": {
                opacity: 0,
                transform: `scaleX(1.5) scaleY(1.5)`,
            }
        }
    }),
);

interface IProps {
    icon: any;
    type?: number;
    onClick?: any;
    className?: string;
}

export enum CircleType {
    TYPE_1,
    TYPE_2
}

export default function CircleIcon(props: IProps) {
    const classes = useStyles();
    const type = props.type || CircleType.TYPE_1;
    return (
        <div className={`${type === CircleType.TYPE_1 ? classes.circle1 : classes.circle2} ${classes.animation} ${props.className}`} 
            onClick={props.onClick ? props.onClick : () => {}}>
            <img className={classes.icon} src={props.icon}/>
        </div>
    );
}