import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { Accordion, AccordionProps } from '@material-ui/core';
import { Resources } from '../constants';
import AOS from "aos";
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			'& .MuiAccordion-root':{
				boxShadow: 'none'
			}
		},
		heading: {
			// fontSize: theme.typography.pxToRem(24),
			fontWeight: 700,
			color: "var(--default-text-color-green)",
			// marginLeft: theme.typography.pxToRem(24),
			fontSize: `2rem`,
			textTransform: `uppercase`,
			marginLeft: "1rem",
			maxWidth: 'var(--sectionWidth)',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			lineHeight: '40px'
		},
		accordionSummary: {
			color: "#05626A",
			paddingLeft: `0rem`,
			paddingRight: `2rem`,
			margin: 0,
			width: '100%',
			'& .MuiAccordionSummary-content':{
				width: `calc(100% - 26px)`,
			},
			'& .MuiAccordionSummary-expandIcon':{
				position: `absolute`,
    			right: 0,
				marginRight: 0,
			}
		},
		accordionDetails: {
			paddingLeft: `0rem`,
			paddingRight: `0rem`,
		},
		icon: {
			width: `24px`,
			height: `24px`,

		},
		children: {
			width: "100%",
			display: "inline-block",
			paddingBottom: `1rem`
		},
		"@media (max-width: 568px)": {
			heading: {
				fontSize: `1.7rem`,
			}, 
		},
	}),
);

interface IProps extends AccordionProps {
	title: string;
	hideIcon?: boolean;
	customHeading?: any;
	onExpand?: (isExpand: boolean) => void;
	expanded?: any;
}

export default function Collapse(props: IProps) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState<string | true>(props.expanded || "panel1");

	const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : true);
		if (props.onExpand) {
			props.onExpand(isExpanded)
		}
		AOS.refreshHard();
	};
	return (
		<div className={classes.root}>
			<Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} >
				<AccordionSummary
					expandIcon={<img src={Resources.Icon.CHEVRON_DOWN} className={classes.icon} />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					className={classes.accordionSummary}
				>
					{props.hideIcon ? null : <img src={Resources.Icon.FLOWER}/>}
					<span className={props.customHeading ? props.customHeading : classes.heading} >{props.title}</span>
				</AccordionSummary>
				<AccordionDetails className={classes.accordionDetails} >
					<div className={classes.children} >
						{props.children}
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}