import React from 'react';
import {
    createStyles,
    makeStyles,
} from '@material-ui/core/styles';
import Helpers from '../commons/utils/Helpers';
import { FormControl, Grid, InputLabel, OutlinedInput, OutlinedInputProps } from '@material-ui/core';
import NumberFormat from 'react-number-format';
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            '& .MuiFormLabel-asterisk': {
                color: 'red'
            },
            '& .MuiInputBase-input':{
                fontSize: `var(--default-14px)`
            },
            '& .MuiInputLabel-outlined':{
                width: 'fit-content',
                fontSize: `var(--default-14px)`

            }
        },
        icon:{
            height: '1.5rem',
            position: 'absolute',
            top: '1.5rem',
            left: '1rem'
        },
        rootIcon:{
            '& .MuiInputLabel-outlined':{
                marginLeft: '2rem'
            },
            '& .MuiInputBase-input':{
                marginLeft: '2rem'
            },
            '& .MuiInputLabel-outlined.MuiInputLabel-shrink':{
                marginLeft: '0rem'
            }
        }
    }),
);

interface IProps  extends OutlinedInputProps {
    pattern?: string;
    onChangeValue: (value: any) => void;
    notification?: any;
    placeholder?: string,
    icon?: string,
    errorMessage?: string
    format?: number, // 1 date 2 vnd 3 phone
}
interface NumberFormatCustomProps {
    inputRef: (instance: NumberFormat | null) => void;
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        isNumericString
        suffix=" đ"
        thousandSeparator ="." 
        decimalSeparator = ","
      />
    );
  }
export default function Inputs(props: IProps) {
    const classes = useStyles();

    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChangeValue && Helpers.isFunction(props.onChangeValue)) {
            props.onChangeValue(event.target.value);
        }
    }
  
    return (
        <Grid className="position-relative" >
                <img  className={props.icon ? classes.icon: 'd-none'} src={props.icon}/>
                <FormControl
                    fullWidth
                    variant="outlined"
                    className={`${props.icon ? classes.rootIcon : ''} ${classes.root}`}
                    error={(props.errorMessage) ? true : false}>
                        <OutlinedInput
                            inputProps={props.format === 2 ? { inputComponent: NumberFormatCustom as any,} : { classes }}
                            {...props}
                            id={`outlined-input-${new Date().getTime()}`}
                            // onBlur={onBlurValue}
                            onChange={onChangeValue}
                        />
                        <InputLabel className="mb-3" htmlFor={`outlined-input-${new Date().getTime()}`} required={props.required}>{props.label}</InputLabel>
                </FormControl>
                <div className="input-text-error" >
                    {props.errorMessage}
                </div>
                </Grid>
    );

}