import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { Helpers, IInput, IOptionSelect } from '../commons/utils';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() =>
    createStyles({
        rootIcon: {
            marginBottom: '1.35rem',
            background: 'white',
            borderRadius: '8px',
            '& .MuiFormLabel-root': {
                left: '34px',
                width: 'fit-content',
                fontSize: 'var(--default-14px)',
                color: '#87898B',
                marginLeft: '0.4rem',
                transform: 'translate(0, 1.5rem) scale(1)',
            },
            '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
                transform: 'translate(0, 10px) scale(1)',
                fontSize: 'var(--default-12px)',
            },
            '& .MuiChip-root': {
                fontSize: 'var(--default-14px)',
                marginLeft: '0rem'
            },
            '& .MuiAutocomplete-input': {
                fontSize: 'var(--default-14px)',
                color: '#4F4F4F',
                fontWeight: 'bold',
                paddingTop: '2rem !important',
                paddingLeft: '37px !important',
            },
            '& .MuiAutocomplete-noOptions': {
                fontSize: 'var(--default-14px)',
            },
            '& .MuiAutocomplete-option': {
                fontSize: 'var(--default-14px)',
            },
            '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                left: 0
            },
        },
        box: {
            position: 'relative',
            '& .MuiInputBase-root': {
                minHeight: '4.2rem',
                borderRadius: '8px',
                padding: '0px',
            },
        },
        noneLabel: {
            '& .MuiFormLabel-root': {
                display: 'none'
            }
        },
        img: {
            width: '16px',
            position: 'absolute',
            top: '1.45rem',
            left: '9px',
            zIndex: 10
        },
        input: {
            '& .MuiFilledInput-underline:after': {
                border: 'none'
            },
            '& .MuiFilledInput-underline:before': {
                border: 'none'
            },
            '& .MuiFilledInput-root': {
                background: 'white',
                border: '1px solid rgba(0, 0, 0, 0.23)'
            }
        },
        noneIcon:{
            '& .MuiFormLabel-root': {
                transform: 'translate(0, 20px) scale(1)',
                marginLeft: '0',
                left: '21px',
            },
            '& .MuiAutocomplete-input': {
                paddingLeft: '21px !important',
            },
        }
    }),
);

interface IProps {
    data: IOptionSelect[];
    label?: string;
    selectedValue?: any;
    onChangeValue: (value: any) => void;
    disabled?: boolean;
    placeholder?: string;
    containerClassName?: string;
    errorMessage?: string;
    style?: any;
    fullWidth?: boolean;
    loading?: boolean;
    onOpen?: any;
    multiple?: boolean;
    Icon?: string;
    defaulValue?: any;
}
export default function ControlAutocomplete(props: IProps) {
    const classes = useStyles();
    const icon = <RadioButtonUncheckedIcon fontSize="default" style={{ color: 'var(--default-text-color-green)' }} />;
    const checkedIcon = <CheckCircleIcon fontSize="default" style={{ color: 'var(--default-text-color-green)' }} />;
    const [selectedOption, setSelectedOption] = React.useState<IOptionSelect>();
    const [key, setKey] = React.useState<number>(0);

    const handleChange = (event: any, selectedOption: any, reason: string) => {
        if (Helpers.isFunction(props.onChangeValue)) {
            if (Array.isArray(selectedOption)) {
                let value: IInput[] = [];
                for (let items of selectedOption) {
                    value.push(items.value);
                }
                props.onChangeValue(value);
            } else {
                const value = selectedOption ? selectedOption.value : "";
                props.onChangeValue(value);
            }
        }
    }

    React.useEffect(() => {
        setSelectedOption(props.defaulValue);
        setKey(key=> key + 1)
    }, [props.defaulValue])
    return (
        <Autocomplete 
            key={key}
            value={selectedOption}
            limitTags={1}
            multiple={props.multiple}
            className={`${props.Icon ? '' : classes.noneIcon } ${classes.rootIcon}`}
            options={props.data}
            popupIcon={<ExpandMoreIcon />}
            disableCloseOnSelect={props.multiple ? true : false}
            getOptionLabel={(option) => option.label}
            onChange={handleChange}
            loading={props.data.length === 0}
            renderOption={(option, { selected }) => (
                <React.Fragment>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.label}
                </React.Fragment>
            )}
            renderInput={(params) => (
                <div className={classes.box}>
                    <img className={classes.img} src={props.Icon} />
                    <TextField
                        className={classes.input} {...params} variant="filled"
                        label={props.label}
                        placeholder={props.placeholder}
                    />
                </div>
            )}
        />
    );

}
