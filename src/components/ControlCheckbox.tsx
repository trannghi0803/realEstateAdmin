import React from 'react';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { Helpers } from '../commons/utils';
const GreenCheckbox = withStyles({
    root: {
        color: `var(--default-text-color-green)`,
        fontSize: `2rem`,
        padding: '0px 12px',
        '&$checked': {
            background: `var(--default-text-color-green)`,
        },
		
    },
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);
const useStyles = makeStyles(() =>
	createStyles({
		root: {
			alignItems: 'flex-start',
			marginRight: '0px',
			width: 'fit-content'
		},
	}),
);

interface IProps {
	children: React.ReactNode;
	onChangeValue: (value: boolean) => void;

}
export default function ControlCheckbox(props: IProps) {
	const classes = useStyles();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (Helpers.isFunction(props.onChangeValue)) {
			props.onChangeValue(event.target.checked)
		}
	};
 	return (
		<FormGroup row className="d-flex flex-nowrap">
			<FormControlLabel
                classes={{ root: classes.root}}
			  	control={<GreenCheckbox icon={<CheckBoxOutlineBlankIcon fontSize="inherit" />}  onChange={handleChange} checkedIcon={<CheckBoxIcon fontSize="inherit" />}  />}
				label=""
			/>
			{props.children}
		</FormGroup>
  	);
}
