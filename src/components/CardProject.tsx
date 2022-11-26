import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../commons/styles/HomeHeaderStyles.css";
import { Helpers, IFavorite } from "../commons/utils";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { GlobalState } from "../stores/GlobalState";
import { Resources,  Strings } from "../constants";
import Tooltip from '@material-ui/core/Tooltip';
import { CircularProgress } from "@material-ui/core";
import Image from 'material-ui-image'

const useStyles = makeStyles((theme) => ({
  cardProject: {
	height: '33rem',
    width: `310px`,
    border: `1px solid #E9E9E9`,
    position: `relative`,
	borderRadius: `24px`,
	overflowY: `hidden`,
	paddingBottom: `1rem`,
	backgroundColor: `white`
  },
  imgProject: {
    height: `15.5rem`,
    width: `100%`,
    borderRadius: `24px`,
    padding: `0.3rem`,
  },
  imgLike: {
	position: `absolute`,
	right: `0.8rem`,
	top: `0.8rem`,
	padding: `0.5rem`,
	opacity: `0.8`,
	borderRadius: `50%`,
	width: `auto !important`,
	fontSize: '3.2rem',
	color: '#fff',
  },
  projectType : {
	display: `flex`,
	alignItems: `center`,
	color: `#1E767D`,
	margin: '1rem 0rem'

  },
	projectName: {
		fontStyle: `normal`,
		fontSize: `var(--default-20px)`,
		lineHeight: `var(--default-24px)`,
		display: `flex`,
		alignItems: `start`,
		letterSpacing: `-0.444444px`,
		color:`#36393B`,
		marginTop: `var(--default-8px)`,
		height: '4rem',
		fontFamily: 'var(--default-font-700)'
	},
 	projectPrice: {
		fontSize: `var(--default-24px)`,
		fontStyle: `normal`,
		lineHeight: `var(--default-24px)`,
		color: `var(--default-text-color-yellow)`,
		fontWeight: 'bold',
	},
	projectBox: {
		margin: `var(--default-16px)`,
		
	},
	iconStatus: {
        width: '2.1rem',
        marginRight: '0.5rem'
    },
    iconStatusHot: {
        width: '2rem',
        marginRight: '0.5rem',
        position: 'absolute',
        top: '1rem',
        left: '1rem'
    },
	imgbg:{
		position: 'absolute',
		top: '0',
		width: '100%',
		height: '100%'
		
	},
	banner:{
		height: '4.5rem',
		position: 'relative',	
		display: 'flex',
		alignItems: 'center',
		marginTop: '1rem'
	},
	contentBanner:{
		margin: '0rem 1rem',
		zIndex:2,
		width: '100%',
		fontWeight: 600,
		fontSize: 'var(--default-18px)',
		color: '#815408'
	},
	price:{
		color: 'var(--default-text-color-yellow)',
		margin: '1rem 0rem'
	},
	textContent:{
		maxWidth: 'var(--sectionWidth)',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	location:{
		display: 'flex',
		margin: '1rem 0rem'
	},
	scale:{
		whiteSpace: 'nowrap',
		display: 'flex'
	},
	"@media (max-width: 320px)": {
        cardProject: {
            width: '250px',
        },
    },
}));
interface IProps {
	imageProject?: string;
	typeProject?: any;
	nameProject?: string;
	area?: any;
	minPrice?: number;
	maxPrice?: number;
	fontSizePrice?: string;
	status?: number;
	isHighlight?: number;
	addressFull?: string;
	scale?: string;
	onClick: () => void;
    onClickLike?: () => void;
	className?: any;
	id: string;

}
export default function CardProject(props: IProps) {
	const classes = useStyles();
    let status = props.status ? props.status : 0;
	const onClickLike = (event: any)=>{
		event.preventDefault();
		event.stopPropagation();
		if(props.onClickLike){
			props.onClickLike();
		}
	}
	return (
		<div className={`${classes.cardProject} ${props.className} cursor-pointer`}>
			<span onClick={props.onClick}>
				<Image loading={<CircularProgress style={{color: 'var(--default-text-color-yellow)'}}/>} style={{ width: '100%', height: '50%', objectFit: 'cover', paddingTop: '0',borderRadius: '24px' }} className={classes.imgProject} src={props.imageProject || Resources.Images.DEFAULT} />
				<img className={`${props.isHighlight ? classes.iconStatusHot : 'd-none'} animated`} src={Resources.Icon.STATUS.HOT_1} />
			</span>
			{ GlobalState.listFavorite?.find((item: IFavorite) => item.projectId === props.id) ?
                <FavoriteIcon onClick={onClickLike} style={{ color: 'red' }} className={`${classes.imgLike} cursor-pointer`} />
                :
                <FavoriteBorderIcon className={`${classes.imgLike} cursor-pointer`} onClick={onClickLike} />
            }
			<div className={classes.projectBox}>
				<div onClick={props.onClick}>
					<div className={classes.projectName}>
						{props.isHighlight ?
							<img className={classes.iconStatus} src={Resources.Icon.STATUS.HOT} />
							: 
							<>
								<img className={`${status === 0 ? classes.iconStatus : 'd-none'}`} src={Resources.Icon.STATUS.ON_SALE} />
								<img className={`${status === 1 ? classes.iconStatus : 'd-none'}`} src={Resources.Icon.STATUS.OPENED_SALE} />
								<img className={`${status === 2 ? classes.iconStatus : 'd-none'}`} src={Resources.Icon.STATUS.SOLD} />
							</>
						}
							<span className="text-name-card">
								{props.nameProject}
							</span>
					</div>
				</div>
				<div className={classes.projectType}>{Helpers.getCodeName('type', props.typeProject)}</div>
				<div className={classes.price}>
					{Strings.Project.PRICE_REPORT}
				</div>
				{props.addressFull ?
					<div className={classes.location}> 
					<img className="img-16 mr-1" src={Resources.Icon.GREEN_MAP}/>
					<Tooltip title={props.addressFull || ''} placement="bottom-start" arrow>
						<span className={classes.textContent}> {props.addressFull}</span>
                    </Tooltip>
				</div>
				: null}
				{props.scale ?
					<div className={classes.scale}>
						<img className="img-16 mr-1" src={Resources.Icon.GREEN_HOME_SCALE}/>
 						{Strings.Project.SCALE}:&nbsp;
						<Tooltip title={props.scale || ''} placement="bottom-start" arrow>
							<div className={classes.textContent}>
								{props.scale}
							</div>
						</Tooltip>
					</div> 
				: ''}
			</div>
		</div>
	);
}
