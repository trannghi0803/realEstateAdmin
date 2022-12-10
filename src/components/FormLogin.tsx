import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Constants, Resources, Screens, Strings } from "../constants";
import { GlobalState } from "../stores/GlobalState";
import ControlInput from "./ControlInput";
import { Button, Grid, Link } from "@material-ui/core";
import { Helpers, IInput } from "../commons/utils";
import { useHistory } from "react-router-dom";


interface IProps {
	onCreateSuccess: (value: any) => void;
}
interface IStateProps {
	dataSearch?: string;
}
export default function FormLogin(props: IProps, states: IStateProps) {
	const handleRedirectRegister = async () => {
		GlobalState.setModalLogin(false)
		GlobalState.setModalRegister(true)
	}
	const history = useHistory();
	const [email, setEmail] = React.useState<IInput>();
	const [password, setPassword] = React.useState<IInput>();

	const handleLogin = async (event: any) => {
		GlobalState.showLoading()
		event.preventDefault();
		event.stopPropagation();
		const checkValidate = validateInput();
		if (checkValidate) {
			const data = {
				"email": email?.value,
				"password": password?.value
			}
			fetch(`${Constants.Api.BASE_URL}${Constants.ApiPath.LOGIN}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					// 'Authorization': GlobalState.user.accessToken
				},
				body: JSON.stringify(data)
			})
				.then(response => response.json())
				.then(response => {
					console.log("response", response);
					if (response.statusCode === Constants.ApiCode.SUCCESS) {
						const user = {
							accessToken: response.accessToken,
							//refreshToken: result.result.refreshToken,
						};
						GlobalState.setAuthenticateStatus(true);
						GlobalState.setUser(user);
						GlobalState.setUserInfo(response.user);
						GlobalState.setModalLogin(false)
						history.push(Screens.PROFILE)
						GlobalState.hideLoading()
					} else {
						GlobalState.hideLoading()
						console.log("result err", response)
						Helpers.showAlert(response.msg, "error");
					}
				})
				.catch(error => {
					GlobalState.hideLoading()
					console.log("result err", error)
					Helpers.showAlert(error.msg, "error");
				})
		}
	}

	const validateInput = () => {
		let isValid = true;

		if (Helpers.isNullOrEmpty(email?.value)) {
			setEmail({
				error: Strings.Validation.REQUIRED
			})
			isValid = false;
		} else if (!Helpers.checkValidateEmail(email?.value)) {
			setEmail({
				error: Strings.Validation.EMAIL_ADDRESS
			})
			isValid = false;
		}
		if (Helpers.isNullOrEmpty(password?.value)) {
			setPassword({
				error: Strings.Validation.REQUIRED
			})
			isValid = false;
		}
		return isValid;
	}

	return (
		<Grid className="p-3">
			<form
				noValidate
				autoComplete="off"
				// className="d-flex align-items-center justify-content-center flex-column"
				style={{ flex: 1 }}
				onSubmit={handleLogin}>
				{/* <div className="title-login text-center">{Strings.Login.TITLE}</div> */}
				<ControlInput
					required
					autoFocus
					errorMessage={email?.error}
					label={Strings.Login.EMAIL}
					value={email?.value}
					placeholder={Strings.Login.EMAIL}
					containerClassName="mb-3"
					onChangeValue={(value) => {
						setEmail({value });
					}}
				/>
				<ControlInput
					required
					type="password"
					errorMessage={password?.error}
					label={Strings.Login.ACCOUNT_PASSWORD}
					value={password?.value}
					placeholder={Strings.Login.ACCOUNT_PASSWORD}
					containerClassName="mb-3"
					onChangeValue={(value) => {
						setPassword({value});
					}}
				/>
				<div className="PASSWORD-RECOVER mb-3 w-100">
					<div className="text-right">
						<Link color="inherit" onClick={() => { GlobalState.setModalLogin(false); GlobalState.setModalForgotPassword(true)}} className="color-common font-weight-bold">
							{Strings.Login.PASSWORD_RECOVER}
						</Link>
					</div>
				</div>
				<Grid className="d-flex justify-content-center mt-4">
					<button className="btn-action-gray bg-yellow p-3 pr-5 pl-5 w-75 rounded-pill border-0 text-white" onClick={handleLogin}>
						{Strings.Login.TITLE}
					</button>
				</Grid>
				<div className="w-100 text-center mt-3">
					{Strings.Login.DONT_HAVE_ACCOUNT}&nbsp;
					<span className="text-danger cursor-pointer" onClick={handleRedirectRegister}>
						{Strings.Login.REGISTER}
					</span>
					{/* <Link color="inherit" href={`${Screens.AUTH_LOGIN}`} className="color-common font-weight-bold">
					{Strings.Login.REGISTER}
				</Link> */}
				</div>
			</form>
		</Grid>
	);
}
