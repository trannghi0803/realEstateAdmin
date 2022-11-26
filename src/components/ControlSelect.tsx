import React, {
    PureComponent
} from "react";
import {  IOptionSelect } from "../commons/utils";
import "./ComponentStyles.css";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectProps,
} from "@material-ui/core";
interface IProps extends SelectProps {
    errorMessage?: string;
    data: IOptionSelect[];
    onChangeValue: (value: any) => void;
    containerClassName?: string;
}

interface IState {
    value?: string;
}

export default class ControlSelect extends PureComponent<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        const { errorMessage, data, onChangeValue, containerClassName, ...rest } = this.props;
        return (
            <FormControl variant="outlined" className={`${containerClassName}`} error={this.props.errorMessage ? true : false}>
                <InputLabel id="select-outlined-label" required={this.props.required}>{this.props.label}</InputLabel>
                <Select
                    {...rest}
                    labelId="select-outlined-labell"
                    id="select-outlined"
                    value={this.state.value}
                    onChange={this.onChangeValue}>
                    {
                        data.map((item, index) => (
                            <MenuItem key={index}
                                value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))
                    }
                </Select>
                <div className={errorMessage ? "input-text-error" : 'd-none'} >
                    {errorMessage}
                </div>
            </FormControl>
        );
    }

    private onChangeValue = (event: any) => {
        const value = event.target.value
        this.setState({
            value
        });
        this.props.onChangeValue(value);
    }
}
