import React, {
    PureComponent
} from "react";
import { Strings } from "../constants";
import { Helpers } from "../commons/utils";
import "./ComponentStyles.css";
import {
    FormControl,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    IconButton,
    OutlinedInputProps,
    FormHelperText
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

interface IProps extends OutlinedInputProps {
    errorMessage?: string;
    notification?: any;
    onChangeValue: (value: any) => void;
    secure?: boolean;
    pattern?: string;
    placeholder?: string;
    containerClassName?: string;
}

interface IState {
    noti?: any;
    errMessage?: string;
    showPassword?: boolean;
}

export default class ControlInput extends PureComponent<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            noti: {
                0: Strings.Validation.REQUIRED,
                1: this.props.notification,
            },
        };
    }

    _renderInput = () => {
        if (this.props.secure) {
            return (
                <OutlinedInput
                    {...this.props}
                    id="outlined-input"
                    onChange={this.onChangeValue}
                    type={this.state.showPassword ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={this.onShowPassword}
                                onMouseDown={this.onMouseDown}
                                edge="end">
                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            )
        }
        return (
            <OutlinedInput
                {...this.props}
                id="outlined-input"
                onChange={this.onChangeValue}
            />
        );
    }
    public render() {
        return (
            <FormControl
                className={this.props.containerClassName}
                fullWidth
                variant="outlined"
                error={(this.props.errorMessage || this.state.errMessage) ? true : false}>
                <InputLabel htmlFor="outlined-input">{this.props.label}</InputLabel>
                {this._renderInput()}
                <FormHelperText id="outlined-input-error">{this.props.errorMessage || this.state.errMessage}</FormHelperText>
            </FormControl>
        );

    }

    private onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.renderErrorMessage(Helpers.ensureString(event.target.value).trim());
        if (this.props.onChangeValue && Helpers.isFunction(this.props.onChangeValue)) {
            this.props.onChangeValue(event.target.value);
        }
    }

    private onShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        });
    }

    private onMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    private renderErrorMessage = (data: string) => {
        if (this.props.required && data === "") {
            this.setState({
                errMessage: this.state.noti[0],
            });
        } else if (data !== "" && !Helpers.isNullOrEmpty(this.props.pattern)) {
            this.setState({
                errMessage: this.state.noti[1],
            });
        } else {
            this.setState({
                errMessage: "",
            });
        }
    }
}
