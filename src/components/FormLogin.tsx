import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Constants, Resources, Screens, Strings } from "../constants";
import { signinRedirect } from "../config";
import { GlobalState } from "../stores/GlobalState";
import ControlInput from "./ControlInput";
import { Button, Link } from "@material-ui/core";


interface IProps {
    onCreateSuccess: (value: any) => void;
}
interface IStateProps {
    dataSearch?: string;
}
export default function FormLogin(props: IProps, states: IStateProps) {
    return (
		<div className="d-flex align-items-center justify-content-center">
			<div className="login-form">
			<form
				noValidate
				autoComplete="off"
				className="d-flex align-items-center justify-content-center flex-column"
				style={{ flex: 1 }}
				onSubmit={()=>{}}>
				<div className="title-login text-center">{Strings.Login.TITLE}</div>
				<ControlInput
				required
				autoFocus
				errorMessage={""}
				label={Strings.Login.ACCOUNT_NAME}
				value={""}
				placeholder={Strings.Login.ACCOUNT_NAME}
				containerClassName="mb-3"
				onChangeValue={(username) => {
					
				}}
				/>
				<ControlInput
				required
				secure
				errorMessage={""}
				label={Strings.Login.ACCOUNT_PASSWORD}
				value={""}
				placeholder={Strings.Login.ACCOUNT_PASSWORD}
				containerClassName="mb-3"
				onChangeValue={(password) => {
				
				}}
				/>
				<div className="PASSWORD-RECOVER mb-3 w-100">
				<div className="text-right">
					<Link color="inherit" href={`${Screens.AUTH_LOGIN}`} className="color-common font-weight-bold">
					{Strings.Login.PASSWORD_RECOVER}
					</Link>
				</div>
				</div>
				<Button variant="contained" color="primary" className='w-100 mb-4' onClick={()=>{}}>
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
