import React from 'react';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckIcon from '@material-ui/icons/Check';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
const GreenCheckbox = withStyles({
    root: {
        color: `var(--default-text-color-yellow)`,
        fontSize: `2rem`,
        padding: '0px 12px',
        '&$checked': {
            background: `var(--default-text-color-yellow)`,
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
}
export default function ControlCheckboxCirle(props: IProps) {
	const classes = useStyles();
 	return (
		<FormGroup row className="d-flex flex-nowrap">
			<FormControlLabel
                classes={{ root: classes.root}}
			  	control={<GreenCheckbox icon={<CheckBoxOutlineBlankIcon fontSize="inherit" />} checkedIcon={<CheckBoxIcon fontSize="inherit" />}  />}
				label=""
			/>
			{props.children}
		</FormGroup>
  	);
}
