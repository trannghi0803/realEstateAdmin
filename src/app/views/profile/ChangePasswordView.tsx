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
	ControlInput,
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
export default class ChangePasswordView extends BaseView<
ProfileController,
ProfileModel,
ProfileService
> {
	constructor(props: any) {
		super(props, ProfileController, ProfileModel, ProfileService);
	}

	public renderPage() {
		return (
			<Container>
				{/* <HomeHeader/> */}
				<Grid className="standard-frame">
					<Grid className="frame-profile">
						<Text className="title-profle mb-3">{Strings.Common.CHANGE_PASSWORD}</Text>
						<Grid>
							<Grid key={this.model.keyIndex} className="mb-2r">
								<Grid key={this.model.renderKey}>
									<Inputs type="password" value={this.model.password?.value} label={Strings.Common.PASSWORD}
										onChangeValue={(value) => this.setModel({ password: { value } })}
										errorMessage={this.model.password?.error}
									/>
									<Inputs type="password" value={this.model.newPassword?.value} label={Strings.Common.NEW_PASSWORD}
										onChangeValue={(value) => this.setModel({ newPassword: { value } })}
										errorMessage={this.model.newPassword?.error}
									/>
									<Inputs type="password" value={this.model.newPasswordConfirm?.value} label={Strings.Common.CONFIRM_PASSWORD}
										onChangeValue={(value) => this.setModel({ newPasswordConfirm: { value } })}
										errorMessage={this.model.newPasswordConfirm?.error}
									/>
									<p>Chú ý: Bạn cần phải đăng nhập lại sau khi đổi mật khẩu thành công</p>
								</Grid>
								<ControlButton
									onClick={() => this.controller.handleChangePassword()}
									classButton="btn-confirm-booking"
									text={"Đổi mật khẩu"}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		);
	}
}
