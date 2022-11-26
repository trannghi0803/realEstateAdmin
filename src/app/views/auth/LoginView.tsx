import React from "react";
import { Screens, Strings } from "../../../constants";

import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import { AuthModel } from "../../models";
import { observer } from "mobx-react";
import { AuthService } from "../../services";
import { LoginController } from "../../controllers/auth";
import { ControlInput } from "../../../components";
import { Redirect } from "react-router-dom";
import { GlobalState } from "../../../stores/GlobalState";
import "../../../commons/styles/LoginStyles.css";
import { Button, Link } from "@material-ui/core";
import { IUser } from "../../../commons/utils";
@observer
export default class LoginView extends BaseView<
LoginController,
AuthModel,
AuthService
> {
	constructor(props: any) {
		super(props, LoginController, AuthModel, AuthService);
	}

  	public renderPage() {
		const user: IUser = GlobalState.user;
		if (user.access_token) {
			if (!user) {
				GlobalState.setUser(true);
			}
		return <Redirect to={Screens.ADMIN} />;
		}
		return (
		<div className="d-flex align-items-center justify-content-center">
			<div className="login-form">
			<form
				noValidate
				autoComplete="off"
				className="d-flex align-items-center justify-content-center flex-column"
				style={{ flex: 1 }}
				onSubmit={this.controller.onLoginClick}>
				<div className="title-login text-center">{Strings.Login.TITLE}</div>
				<ControlInput
				required
				autoFocus
				errorMessage={this.model.errUsername}
				label={Strings.Login.ACCOUNT_NAME}
				value={this.model.username}
				placeholder={Strings.Login.ACCOUNT_NAME}
				containerClassName="mb-3"
				onChangeValue={(username) => {
					this.setModel({
					errUsername: "",
					username,
					});
				}}
				/>
				<ControlInput
				required
				secure
				errorMessage={this.model.errPassword}
				label={Strings.Login.ACCOUNT_PASSWORD}
				value={this.model.password}
				placeholder={Strings.Login.ACCOUNT_PASSWORD}
				containerClassName="mb-3"
				onChangeValue={(password) => {
					this.setModel({
					errPassword: "",
					password,
					});
				}}
				/>
				<div className="PASSWORD-RECOVER mb-3 w-100">
				<div className="text-right">
					<Link color="inherit" href={`${Screens.AUTH_LOGIN}`} className="color-common font-weight-bold">
					{Strings.Login.PASSWORD_RECOVER}
					</Link>
				</div>
				</div>
				<Button variant="contained" color="primary" className='w-100 mb-4' onClick={this.controller.onLoginClick}>
				{Strings.Login.TITLE}
				</Button>
				<div className="w-100 text-center">
				{Strings.Login.DONT_HAVE_ACCOUNT}
				<Link color="inherit" href={`${Screens.AUTH_LOGIN}`} className="color-common font-weight-bold">
					{Strings.Login.REGISTER}
				</Link>
				</div>
			</form>
			</div>
		</div>
		);
	}
}
