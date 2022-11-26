import React from 'react';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import { IOptionSelect } from "../commons/utils/Interface";
import {  FormControl, FormControlLabel, Grid, Radio, RadioGroup, RadioProps } from '@material-ui/core';
import { Resources, Strings } from '../constants';
import { Helpers } from '../commons/utils';
const GreenRadio = withStyles({
    root: {
        // color: `var(--default-text-color-green)`,
        fontSize: `2rem`,
        padding: '0rem',
        '& .MuiSvgIcon-root':{
            height: `var(--default-32px)`,
            width: `var(--default-32px)`
        },
        '&$checked': {
            // color: `var(--default-text-color-green)`,
        },
    },
})((props: RadioProps) => <Radio color="default" {...props} />);
const useStyles = makeStyles(() =>
	createStyles({
		root: {
			alignItems: 'flex-start',
            '& .MuiFormControlLabel-root':{
                width: 'fit-content',
                margin: '0rem',
                marginRight: 'var(--default-24px)'
            }
		},
        rootVertical:{
            display: 'flex',
            flexDirection: 'row',
            '& .MuiFormControlLabel-root':{
                marginRight: '0rem'
            }
        },
		label: {
			 fontSize: `var(--default-14px)`,
			color: `var( --default-text-color)`,
		},
        iconOption:{
            height: 'var(--default-32px)',
            width: 'var(--default-32px)',
            marginRight: 'var(--default-18px)',
        },
        wrapper:{
            padding: 'var(--default-18px) 0rem',
            borderTop: '1px solid #EBEBEB',
            '&:last-child': {
                borderBottom: '1px solid #EBEBEB',
            }
        },
        title:{
            fontSize: `1.33rem`,
            fontWeight: 700,
            color: `#19232E`,
            marginBottom: 'var(--default-32px)'
        },
        pb: {
            paddingBottom: "2.917rem"
        },
        img60: {
            width: 'var(--default-60px)',
            height: 'var(--default-60px)',
            margin: '1rem',
            marginTop: '0rem'
        }
	}),
);
interface IProps {
    Icon?: string;
    placeholder?: string;
    multi?: boolean;
    options: IOptionSelect[];
    onChangeValue: (value: any) => void;
    animation_name?: string;
    animation_duration?: number;
    animation_deploy?: number;
    isSimple?: boolean;
    title?: string;
    vertical?: boolean;
    iconUnselect?: string;
    iconSelectd?: string;
    selectedValue?: string;
}
    export default function ControlRadioYellow(props: IProps) {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        props.onChangeValue(event.target.value)
    };
    React.useEffect(() => {
        if(Helpers.isNullOrEmpty(props.selectedValue)){
            props.onChangeValue(props.options[0]?.value)
            setSelectedValue(props.options[0]?.value)
        }else{
            setSelectedValue(props.selectedValue)
        }
    }, [props.selectedValue || props.options] )
 	return (
         <Grid className={classes.pb}>
            <Grid className={props.title ? classes.title : 'd-none'}>
                {props.title}
            </Grid>
            <FormControl component="fieldset" className={`w-100 ${classes.root}`}>
                    <RadioGroup className={`${props.vertical ? classes.rootVertical : ''} w-100` } 
                        value={selectedValue} onChange={handleChange}>
                        {props.options?.map((data) => {
                            return (
                                <Grid key={data.value} className={`${props.vertical ? 'd-flex flex-column-reverse align-items-center border-0' : 'd-flex align-items-center'} ${classes.wrapper}`}>
                                <FormControlLabel
                                    key={data.value}
                                    classes={{ label: classes.label }}
                                    value={data.value.toString()}
                                    control={<GreenRadio icon={<img src={props.iconUnselect ? props.iconUnselect : Resources.Icon.UNSELECT}/>} checkedIcon={<img src={props.iconSelectd ? props.iconSelectd : Resources.Icon.SELECTED}/>} />}
                                    label={""} />
                                    <Grid className="d-flex align-items-center">
                                        <img className={`${props.vertical ? classes.img60 : ''}  ${data.icon ? classes.iconOption : 'd-none'}`} src={data.icon}/>
                                        {data.label}
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </RadioGroup>
                </FormControl>
         </Grid>
  	);
}
