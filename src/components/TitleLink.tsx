import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Resources } from '../constants';
import "./ComponentStyles.css";
const useStyles = makeStyles((theme) => ({
    titleName:{
        fontSize: `2rem`,
		letterSpacing: `-0.444444px`,
		textTransform: `uppercase`,
		fontWeight: `bold`,
		marginLeft: "var(--default-12px)",
		maxWidth: 'var(--sectionWidth)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
		lineHeight: '40px'
	},
	tagTitle: {
		color: `var(--default-text-color-green)`,
		display: `flex`,
		margin: `0rem`,
		padding: `0rem 0rem 1.5rem 0rem`,
	},
	'@media (max-width: 720px)': {
		tagTitle: {
			width: '100%'
		},  
	},
	'@media (max-width: 568px)': {
		titleName: {
			fontSize: `1.7rem`,
		},  
	},
}));
interface IProps {
	nameTitle: string;
	link?: string;
	className?: string;
	onClick?: any;
	titleColor?: string;
	classText?: string;
	classIcon?: string;
}
export default function TitleLink(props: IProps) {
    const classes = useStyles();
    return (
		<div className={`${classes.tagTitle} ${props.className}`} onClick={props.onClick}>
			<img className={props.classIcon} src={Resources.Icon.FLOWER}/>
			<div style={props.titleColor ? { color: props.titleColor } : {}} className={`${classes.titleName} ${props.classText}`}>
				{props.nameTitle}
			</div>
			{/* <img src={Resources.Icon.RIGHT} /> */}
		</div>
	);
}
