import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import "../../../commons/styles/ProfileStyles.css";
import {
	ControlButton,
	Container,
	ProductItem,
	Separator,
	Text,
} from "../../../components";
import "../../../components/ComponentStyles.css";
import { ProfileController } from "../../controllers/profile";
import ProfileModel from "../../models/ProfileModel";
import ProfileService from "../../services/ProfileService";
import { Avatar, Grid, Link } from "@material-ui/core";
import { Resources, Screens, Strings } from "../../../constants";
import ControlSelect from "../../../components/ControlSelect";
import Inputs from "../../../components/Inputs";
@observer
export default class ProfileView extends BaseView<
ProfileController,
ProfileModel,
ProfileService
> {
	constructor(props: any) {
		super(props, ProfileController, ProfileModel, ProfileService);
	}
	profile = () => {
		return (
			<Grid key={this.model.keyIndex} className="mb-2r" >
				<Grid className="d-flex align-items-center mb-2r">
					<Avatar
						alt={Strings.Profile.ALT_AVATAR}
						className="avt-profile"
						src={this.model.imgUrl ? this.model.imgUrl : Resources.Images.DEFAULT}
					/>
					<input
						style={{ display: 'none' }}
						id="contained-button-file"
						type="file"
						onChange={(e) => this.controller.handlePhotoChange(e)}
					/>
					<label htmlFor="contained-button-file" className="btn-green label-button ">
						<span>
							{Strings.Profile.CHANGE_AVT}
						</span>
					</label>
					{/* <button className="btn-white" onClick={this.controller.removeAvatar}>{Strings.Common.DELETE}</button> */}
				</Grid>
				<Grid key={this.model.renderKey}>
					<Inputs value={this.model.userName?.value} label={Strings.Common.FULLNAME}
						onChangeValue={(value) => this.setModel({ userName: { value } })}
					/>
					<Inputs value={this.model.email?.value} label={Strings.Common.EMAIL}
						onChangeValue={(value) => this.setModel({ email: { value } })}
					/>
					<Inputs value={this.model.phoneNumber?.value} label={Strings.Common.PHONE_NUMBER}
						onChangeValue={(value) => this.setModel({ phoneNumber: { value } })}
					/>
				</Grid>
				<ControlButton
					onClick={this.controller.update}
					classButton="btn-confirm-booking"
					text={Strings.Profile.SAVE_PROFILE}
				/>
			</Grid>
		);
	};

	public renderPage() {
		return (
			<Container>
				{/* <HomeHeader/> */}
				<Grid className="standard-frame">
					<Grid className="frame-profile">
						<Text className="title-profle">{this.model.titleMenu}</Text>
						<Grid>{this.profile()}</Grid>
					</Grid>
				</Grid>
			</Container>
		);
	}
}
