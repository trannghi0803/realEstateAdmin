import React from "react";
import { Constants, Strings } from "../constants";
// import FacebookLogin from "react-facebook-login"
import { Grid } from "@material-ui/core";
import { Helpers, IInput } from "../commons/utils";
import { UserService } from "../app/services";
import Inputs from "./Inputs";
import { signinRedirect } from "../config";
import { GlobalState } from "../stores/GlobalState";

interface IProps {
    onCreateSuccess: (value: any) => void;

}
interface IStateProps {
    dataSearch?: string;
}
export default function FormRegister(props: IProps, states: IStateProps) {
    const [fullName, setFullName] = React.useState<IInput>();
    const [phoneNumber, setPhoneNumber] = React.useState<IInput>();
    const [email, setEmail] = React.useState<IInput>();
    const [passsword, setPassword] = React.useState<IInput>();
    const [confirmPassword, setConfirmPassword] = React.useState<IInput>();

    const submitRegister = async (event: any) => {

        event.preventDefault();
        event.stopPropagation();
        const checkValidate = validateInput();
        if (checkValidate) {
            const data = {
                "email": email?.value,
                "password": passsword?.value,
                // "confirmPassword": confirmPassword?.value,
                "phoneNumber": phoneNumber?.value,
                "userName": fullName?.value
            }

            // try {
            // const result = await new UserService().register(data)
            //  result.then((response: any) => {
            //      if (response.statusCode === Constants.ApiCode.SUCCESS) {
            //          Helpers.showAlert(Strings.Home.REGISTER_SUCCESS, "success");
            //          props.onCreateSuccess(false);
            //      }
            // }).catch((error: any) => {
            //     console.log("result err", error)
            //     Helpers.showAlert(result.msg, "error");

            // })
            fetch(`${Constants.Api.BASE_URL}${Constants.ApiPath.REGISTER}`, {
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
                        Helpers.showAlert(Strings.Home.REGISTER_SUCCESS, "success");
                        props.onCreateSuccess(false);
                    } else {
                        console.log("result err", response)
                        Helpers.showAlert(response.msg, "error");
                    }
                })
                .catch(error => {
                    console.log("result err", error)
                    Helpers.showAlert(error.msg, "error");
                })
        }
    }

    const validateInput = () => {
        let isValid = true;
        if (Helpers.isNullOrEmpty(fullName?.value)) {
            setFullName({
                error: Strings.Validation.REQUIRED
            })
            isValid = false;
        }
        if (Helpers.isNullOrEmpty(phoneNumber?.value)) {
            setPhoneNumber({
                error: Strings.Validation.REQUIRED
            })
            isValid = false;
        } else if (!Helpers.checkValidatePhone(phoneNumber?.value || '')) {
            setPhoneNumber({
                error: Strings.Validation.PHONE_NUMBER
            })
            isValid = false;
        }

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
        if (Helpers.isNullOrEmpty(passsword?.value)) {
            setPassword({
                error: Strings.Validation.REQUIRED
            })
            isValid = false;
        }
        if (Helpers.isNullOrEmpty(confirmPassword?.value)) {
            setConfirmPassword({
                error: Strings.Validation.REQUIRED
            })
            isValid = false;
        } else if (passsword?.value !== confirmPassword?.value) {
            setConfirmPassword({
                error: Strings.Validation.CONFIRM_PASSWORD_ERROR
            })
            isValid = false;
        }
        return isValid;
    }
    const handleLogin = async () => {
        // sessionStorage.setItem(Constants.StorageKeys.PRE_SCREEN, window.location.href);
        // await signinRedirect();
        GlobalState.setModalLogin(true)
        GlobalState.setModalRegister(false)
    }
    return (
        <Grid className="p-3">
            <form onSubmit={submitRegister} noValidate>
                <Inputs
                    required
                    defaultValue={fullName?.value}
                    label={Strings.Common.FULLNAME}
                    errorMessage={fullName?.error}
                    onChangeValue={(value) =>
                        setFullName({ value })
                    }
                />
                <Inputs
                    required
                    defaultValue={phoneNumber?.value}
                    type="number"
                    errorMessage={phoneNumber?.error}
                    label={Strings.Common.PHONE_NUMBER}
                    onChangeValue={(value) =>
                        setPhoneNumber({ value })
                    }
                />
                <Inputs
                    required
                    type="email"
                    defaultValue={email?.value}
                    errorMessage={email?.error}
                    label={Strings.Common.EMAIL}
                    onChangeValue={(value) =>
                        setEmail({ value })
                    }
                />
                <Inputs
                    required
                    type='password'
                    defaultValue={passsword?.value}
                    errorMessage={passsword?.error}
                    label={Strings.Common.PASSWORD}
                    onChangeValue={(value) =>
                        setPassword({ value })
                    }
                />
                <Inputs
                    required
                    type='password'
                    defaultValue={confirmPassword?.value}
                    errorMessage={confirmPassword?.error}
                    label={Strings.Common.CONFIRM_PASSWORD}
                    onChangeValue={(value) =>
                        setConfirmPassword({ value })
                    } />
                <Grid className="d-flex justify-content-center mt-4">
                    <button onSubmit={submitRegister} type="submit" className="btn-action-gray bg-yellow p-3 pr-5 pl-5 w-75 rounded-pill border-0 text-white" >
                        {Strings.Common.REGISTER}
                    </button>
                </Grid>
                <Grid className="text-center mt-3">
                    {Strings.Components.HAVE_ACC} &nbsp;
                    <span className="text-danger cursor-pointer" onClick={handleLogin}>
                        {Strings.Common.LOGIN}
                    </span>
                </Grid>
            </form>
        </Grid>
    );
}
