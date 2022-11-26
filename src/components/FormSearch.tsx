import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Resources,  Screens,  Strings } from '../constants';
import { Grid } from '@material-ui/core';
import { ControlButton} from '.';
import { useHistory } from "react-router-dom";
import {  Helpers, IInput, IOptionSelect } from '../commons/utils';
import ControlAutocomplete from './ControlAutocomplete';
const useStyles = makeStyles(() => ({
    textLogin:{
        fontWeight: `bold`,
        fontSize: 'var(--default-24px)',
        lineHeight: '3.66rem',
        letterSpacing: `-0.444444px`,
        textTransform: `uppercase`,
        color: `#36393B`,
    },
    closeLogin:{
        position: 'absolute',
        left: '0'
    },
    socialLogin:{
        border: '1px solid #EEEEEE',
        height: 'var(--default-56px)',
        textAlign: 'center',
        position: 'relative',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '8px',
        fontSize: 'var(--default-14px)',
        margin: '1.5rem 0rem'
    },
    imgSocialLogin:{
        position: 'absolute',
        left: 'var(--default-16px)'
    },
    boxLogin:{
        marginBottom: 'var(--default-24px)',
    },
    register:{
        marginTop: '2.83rem',
        marginBottom: '0.83rem'
    },
    logo:{
        height: '4rem',
        width: '6rem',
        margin: '0rem 1rem'
    },
    buttonFind:{
        background: 'var(--default-text-color-yellow)',
        fontSize: 'var(--default-16px)',
        color: '#fff',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper:{

    },
    '@media (min-width: 1024px)': {
        wrapper: {
            padding: `0rem 10rem`,
        },  
    },
    '@media (min-width: 1600px)': {
        wrapper: {
            padding: `0rem 30rem`,
        },  
    },
}));
interface IProps {
	// onLogin: (value: any) => void;
}
interface IStateProps {
    dataSearch?: string;
}
export default function FormSearch(props: IProps, states: IStateProps) {
    const [optionTypeProject, setOptionTypeProject] = React.useState<IOptionSelect[]>(Helpers.getOptionTypeProject());
    const [optionStatusProject, setOptionStatusProject]  = React.useState< IOptionSelect[]>(Helpers.getOptionStatusProject()); 
    const [optionLineProject, setOptionLineProject]  = React.useState< IOptionSelect[]>(Helpers.getOptionLineProject()); 
    const [province, setProvince] = React.useState<IInput>();
    const [status, setStatus] = React.useState<IInput>();
    const [line, setLine] = React.useState<IInput>();
    const [types, setTypes] = React.useState<IInput>();
    const [optionTypeAddress, setOptionTypeAddress] =
    React.useState<IOptionSelect[]>();
    const history = useHistory();
    const classes = useStyles();
		return (
            <Grid container spacing={3}  className={classes.wrapper}>
                <Grid item xs={12} md={6} lg={6}>
                    <ControlAutocomplete
                        Icon={Resources.Icon.GREEN_MAP}
                        label={Strings.Home.PROVINCE_CT}
                        onChangeValue={(value) => {
                            setProvince({ value });
                        }}
                        data={optionTypeAddress || []}
                        />
                </Grid>
                <Grid item xs={12} md={6}  lg={6}>
                    <ControlAutocomplete
                      multiple
                      Icon={Resources.Icon.HOME_GREEN}
                      label={Strings.Home.TYPE_PERSONAL_PROPERTY}
                      onChangeValue={(value) => {setTypes({ value })}}
                      data={optionTypeProject || []}
                    />
                </Grid>
                <Grid item xs={12} md={6}  lg={6}>
                    <ControlAutocomplete
                        Icon={Resources.Icon.LEFT_GREEN}
                        label={Strings.Home.STATUS_PROJECT}
                        onChangeValue={(value) => {setStatus({ value })}}
                        data={optionStatusProject || []}
                    />
                </Grid>
                <Grid item xs={12} md={6}  lg={6}>
                    <ControlAutocomplete
                            Icon={Resources.Icon.GRID_GREEN}
                            label={Strings.Home.PRODUCT_LINE}
                            onChangeValue={(value) => {setLine({ value })}}
                            data={optionLineProject || []}
                    />
                </Grid>
                <Grid  item xs={12} >
                    <ControlButton
                        classButton=""
                        text={Strings.Common.FIND}
                        image={Resources.Icon.SEARCH}
                        onClick={() => {history.push(Screens.LISTING_PROJECT, { types, province, status, line })}}
                    />
                </Grid>
            </Grid>
	);
}
