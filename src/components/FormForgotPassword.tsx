import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Constants, Resources, Screens, Strings } from "../constants";
import { signinRedirect } from "../config";
import { GlobalState } from "../stores/GlobalState";
import ControlInput from "./ControlInput";
import { Button, Grid, Link } from "@material-ui/core";
import { Helpers, IInput } from "../commons/utils";
import CustomModal from "./CustomModal";


interface IProps {
	onCreateSuccess: (value: any) => void;
}
interface IStateProps {
	dataSearch?: string;
}
export default function FormForgotPassword(props: IProps, states: IStateProps) {

	const [emailReset, setEmailReset] = React.useState<IInput>();

	const validateInput = () => {
		let isValid = true;

		if (Helpers.isNullOrEmpty(emailReset?.value)) {
			setEmailReset({
				error: Strings.Validation.REQUIRED
			})
			isValid = false;
		} else if (!Helpers.checkValidateEmail(emailReset?.value)) {
			setEmailReset({
				error: Strings.Validation.EMAIL_ADDRESS
			})
			isValid = false;
		}

		return isValid;
	}

	const handleResetPassword = async (event: any) => {
		GlobalState.showLoading()
		event.preventDefault();
		event.stopPropagation();
		const checkValidate = validateInput();
		if (checkValidate) {
			const data = {
				"email": emailReset?.value,
			}
			fetch(`${Constants.Api.BASE_URL}${Constants.ApiPath.FORGOT_PASSWORD}`, {
				method: 'PUT',
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
						Helpers.showAlert("Mật khẩu mới đã được gửi qua Email của bạn. Vui lòng kiểm tra Email để đăng nhập và đổi lại mật khẩu", "info")
						GlobalState.setModalForgotPassword(false)
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

	return (
		<Grid className="p-3">
			<form
				noValidate
				autoComplete="off"
				// className="d-flex align-items-center justify-content-center flex-column"
				style={{ flex: 1 }}
				onSubmit={handleResetPassword}>
				<div className="text-center mb-3">{"Để nhận được mật khẩu mới vui lòng điền email vào ô bên dưới"}</div>
				<ControlInput
					required
					autoFocus
					errorMessage={emailReset?.error}
					label={Strings.Login.EMAIL}
					value={emailReset?.value}
					placeholder={Strings.Login.EMAIL}
					containerClassName="mb-3"
					onChangeValue={(value) => {
						setEmailReset({ value });
					}}
				/>

				<Grid className="d-flex justify-content-center mt-4">
					<button className="btn-action-gray bg-yellow p-3 pr-5 pl-5 w-75 rounded-pill border-0 text-white" onClick={handleResetPassword}>
						{"Tiếp tục"}
					</button>
				</Grid>
			</form>
		</Grid>
	);
}
