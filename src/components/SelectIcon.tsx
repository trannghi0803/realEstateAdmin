import React from "react";
import "./ComponentStyles.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { Checkbox, CheckboxProps, ClickAwayListener, FormControl, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, RadioProps } from "@material-ui/core";
import { IOptionSelect } from "../commons/utils/Interface";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import { isArray } from "lodash";
const GreenCheckbox = withStyles({
    root: {
        color: `var(--default-text-color-green)`,
        fontSize: `2rem`,
        marginRight: '8px',
        '&$checked': {
            color: `var(--default-text-color-green)`,
        },
        '&:hover':{
            backgroundColor: 'unset'
        }
    },
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);
const GreenRadio = withStyles({
    root: {
        color: `var(--default-text-color-green)`,
        fontSize: `2rem`,
        marginRight: '8px',
        '&$checked': {
            color: `var(--default-text-color-green)`,
        },
    },
})((props: RadioProps) => <Radio color="default" {...props} />);
const useStyles = makeStyles((theme) => ({
    boxSelect: {
        height: `4.2rem`,
        border: `1px solid rgba(0, 0, 0, 0.23)`,
        background: `#FFFFFF`,
        boxSizing: `border-box`,
        borderRadius: `8px`,
        alignItems: 'center',
        display: 'flex',
        marginBottom: `1.35rem`,
        flexDirection: `row`,
        flexWrap: `nowrap`,
        justifyContent: `space-between`,
        alignContent: `stretch`,
        padding: `0rem 9px`,
    },
    fullList: {
        width: 'auto',
        overflow: `auto`,
        '& .MuiFormControlLabel-root':{
            marginLeft: '0',
            padding: '6px 16px',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)'
            },
        },
        '& .MuiSvgIcon-root':{
            fontSize: '2rem',
        }
    },
    drawerPaper: {
        width: `100%`,
        whiteSpace: "nowrap",
        marginTop: `72px`,
        borderRadius: '12px 12px 0px 0px',
        maxHeight: `15rem`,
        overflow: `hidden`,
        padding: `0px 2rem`,

    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    },
    titleDrawer: {
        fontStyle: `normal`,
        fontWeight: `bold`,
        fontSize: `1.23rem`,
        lineHeight: `1.33rem`,
        color: `var(--default-text-color-green)`,
    },
    label: {
        fontSize: `var(--default-14px)`,
        color: `var( --default-text-color)`,
    },
    root: {
        position: 'relative',
        width: '100%'
    },
    dropdown: {
        position: 'absolute',
        top: `calc(4.2rem + 4px)`,
        right: 0,
        left: 0,
        zIndex: 20,
        padding: '6px 0px',
        backgroundColor: theme.palette.background.paper,
        border: '#F5F5F5 solid 1px',
        borderRadius: `8px`,
        boxShadow: `0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)`
    },
    tagSelected: {
        background: `#EEEEEE`,
        border: `1px solid #EEEEEE`,
        boxSizing: `border-box`,
        borderRadius: `32px`,
        margin: `0px 0.5rem`,
        padding: `0.5rem`,
        display: 'flex',
        color: '#4F4F4F',
        fontWeight: 600,
        alignItems: 'center'        
    },
    simple: {
        borderRadius: `32px`,
        paddingLeft: `1rem`,
		paddingRight: `1rem`,
        display: 'flex',
        fontWeight: 600,
    },
    valueSelect: {
        whiteSpace: `nowrap`,
        overflow: `hidden`,
        textOverflow: `ellipsis`,
        maxWidth: `12rem`,
        width: `12rem`,
        textAlign: `left`,
        padding: '0rem 0.5rem',
    },
    valueSelectSimple: {
        whiteSpace: `nowrap`,
        overflow: `hidden`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        textAlign: `left`,
        // padding: '0rem 0.5rem',
    },
    cursorPointer: {
        cursor: `pointer`
    },
	placeholder: {
		color: "#87898B",
		marginLeft: `12px`,
        fontSize: 'var(--default-14px)',
        width: 'var(--sectionWidth)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontFamily: 'Open Sans, sans-serif',
	},
    filledLabel:{
        textAlign: 'left',
        fontSize: 'var(--default-12px)',
    },
    filledValue:{
        color: '#4F4F4F',
        fontWeight: 'bold',
        textAlign: 'left'
    },
    wrapper:{
        display: 'flex',
        width: '80%'
    }
}));
interface IProps {
    Icon?: string;
    placeholder?: string;
    multi?: boolean;
    options: IOptionSelect[];
    onChangeValue: (value?: any) => void;
    animation_name?: string;
    animation_duration?: number;
    animation_deploy?: number;
    isSimple?: boolean;
    variant?: string;
    selected?: any;
}
export default function SelectCheckbox(props: IProps) {
    const classes = useStyles();
    const [tempValueCheckbox, setTempValueCheckbox] = React.useState<IOptionSelect[]>([]);
    const [tempValueRadio, setTempValueRadio] = React.useState<IOptionSelect>();
    const [open, setOpen] = React.useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const value = props.options.filter(item => item.value.toString() === event.target.value)
        if(value){
            props.onChangeValue(event.target.value);
            setTempValueRadio(value[0]);
            setOpen(false);
            return null
        }
    };
    const handleChangeMulti = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        if (event.target.checked) {
            const value = props.options.filter(item => item.value.toString() === event.target.value);
            if(tempValueCheckbox.length == 0){
                setTempValueCheckbox(value);
                props.onChangeValue(value);
            }else if (tempValueCheckbox.filter(item => item.value.toString() === event.target.value).length == 0) {
                    const temp = [...tempValueCheckbox, value[0]];
                    setTempValueCheckbox(temp);
                    props.onChangeValue(temp)
            }
            
        } else {
            const value = tempValueCheckbox.filter(item => item.value.toString() !== event.target.value);
            if (value) {
                setTempValueCheckbox(value);
            } else {
                setTempValueCheckbox([]);
            }
            props.onChangeValue(value);
        }
    };
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    const handleClickAway = () => {
        setOpen(false);
    };
    const handleRemoveValue = (event: any, value: string) => {
        event.stopPropagation();
        if(props.multi){
            const temps = tempValueCheckbox.filter(item => item.value.toString() !== value.toString());
            if(temps)
            setTempValueCheckbox(temps);
            props.onChangeValue(temps)
            
        }else{
            setTempValueRadio(undefined);
            props.onChangeValue()

        }
        // const temps = selectValue.filter(item => item.value.toString() !== value.toString());
        // if (temps) {
        //     setSelectValue(selectValue.filter(item => item.value.toString() !== value.toString()));
        //     if (!props.multi) {
        //         props.onChangeValue("");
        //         setTempValueRadio("");
        //     } else {
        //         setTempValueCheckbox(tempValueCheckbox.filter(item => item.toString() !== value.toString()));
        //     }
        // }
    }
    React.useEffect(() => {
        if(props.selected){
            if(isArray(props.selected)){
                setTempValueCheckbox(props.selected);
            }else{
                setTempValueRadio(props.selected);
            }
        }
    }, [props.selected])
    const list = () => (
        <div className={clsx(classes.fullList)}
            role="presentation"
        >
            {props.multi ?
                <FormControl component="fieldset" className="w-100" >
                    <FormGroup className="w-100">
                        {props.options?.map((data, index) => {
                            return (
                                <FormControlLabel
                                    key={index}
                                    classes={{ label: classes.label }}
                                    value={data.value}
                                    control={<GreenCheckbox
                                        icon={<RadioButtonUncheckedIcon  />} checkedIcon={<CheckCircleIcon />} onChange={handleChangeMulti} />}
                                    label={data.label}
                                    checked={tempValueCheckbox.findIndex(item => (item.value || '').toString() === data.value.toString()) !== -1}
                                    // checked={tempValueCheckbox.findIndex(item => item.value.toString() === data.value.toString()) !== -1}
                                />
                            )
                        })}
                    </FormGroup>
                </FormControl>
                :
                <FormControl component="fieldset" className="w-100" >
                    <RadioGroup key={tempValueRadio?.value} className="w-100" value={tempValueRadio?.value} onChange={handleChange}>
                        {props.options?.map((data, index) => {
                            return (
                                <FormControlLabel
                                    key={index}
                                    classes={{ label: classes.label }}
                                    value={data.value.toString()}
                                    control={<GreenRadio icon={<RadioButtonUncheckedIcon  />} 
                                    checkedIcon={<CheckCircleIcon/>} />}
                                    label={data.label} />
                            )
                        })}
                    </RadioGroup>
                </FormControl>
            }
        </div>
    );

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.root} >
                <div style={props.isSimple ? { padding: "0 1rem 0 0" } : {}} className={"text-center  " + (classes.boxSelect)} onClick={handleClick} data-aos={props.animation_name} data-aos-duration={props.animation_duration} data-aos-delay={props.animation_deploy} data-aos-once={true}>
                    <div className={classes.wrapper}>
                        <img className="" src={props.Icon} />
                        {props.multi 
                        ? 
                            <>
                            {tempValueCheckbox.length === 0 ?
                                <div className={classes.placeholder}>
                                    {props.placeholder}
                                </div>
                                :
                                <div className="d-flex">
                                    {props.variant == 'filled' 
                                        ? 
                                            <div className={classes.placeholder}>
                                                <Grid  className={classes.filledLabel}>
                                                    {props.placeholder}
                                                </Grid>
                                                <Grid className={classes.filledValue}>
                                                    {tempValueCheckbox[0].label}
                                                </Grid>
                                            </div>
                                            
                                        : 
                                        <div className={props.isSimple ? classes.simple : classes.tagSelected}>
                                            <div className={props.isSimple ? classes.valueSelectSimple : classes.valueSelect} >
                                                {tempValueCheckbox[0].label}
                                                {props.variant}
                                            </div>
                                            {!props.isSimple ?
                                                <CloseIcon className={classes.cursorPointer} onClick={(event) => { handleRemoveValue(event, tempValueCheckbox[0].value) }} />
                                                : null
                                            }
                                        </div> 
                                    }
                                    {
                                        tempValueCheckbox.length > 1 ?
                                            <div className={classes.tagSelected} >
                                                +{(tempValueCheckbox.length - 1)}
                                            </div> : ""
                                    }
                                </div>
                            }
                            </>
                        : 
                            <>
                            {!tempValueRadio ?
                                <div className={classes.placeholder}>
                                    {props.placeholder}
                                </div>
                                :
                                <div className="d-flex">
                                    {props.variant == 'filled' 
                                        ? 
                                         <div className={classes.placeholder}>
                                             <Grid  className={classes.filledLabel}>
                                                 {props.placeholder}
                                             </Grid>
                                             <Grid className={classes.filledValue}>
                                                 {tempValueRadio?.label}
                                             </Grid>
                                         </div>
                                         
                                    : 
                                     <div className={props.isSimple ? classes.simple : classes.tagSelected}>
                                         <div className={props.isSimple ? classes.valueSelectSimple : classes.valueSelect} >
                                             {tempValueRadio?.label}
                                         </div>
                                         {!props.isSimple ?
                                             <CloseIcon className={classes.cursorPointer} onClick={(event) => { handleRemoveValue(event, tempValueRadio!.value) }} />
                                             : null
                                         }
                                     </div> 
                                 }
                             </div>
                            }
                            </>
                        }
                    </div>
                    <div className="icon" >
                        <ExpandMoreIcon />
                    </div>
                </div>
                <Grid className={open ? '' : 'd-none'}>
                    <div className={classes.dropdown}>
                        {list()}
                    </div>
                </Grid>
            </div>
        </ClickAwayListener>
    );
}
