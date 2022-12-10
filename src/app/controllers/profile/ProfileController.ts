import { Helpers } from "../../../commons/utils";
import { signinRedirect } from "../../../config";
import { Constants, Screens, Strings } from "../../../constants";
import { clearGlobalState, GlobalState } from "../../../stores/GlobalState";
import ProfileModel from "../../models/ProfileModel";
import { ApartmentService, UserService } from "../../services";
import ProfileService from "../../services/ProfileService";
import { BaseController } from "../base";

class ProfileController extends BaseController<ProfileModel, ProfileService> {

    constructor(props: any) {
        super(props, ProfileModel, ProfileService);
    }
    async onStarted() {
        this.showLoading();
        await this.getProfile();
        this.hideLoading();

    }
    getProfile = async () => {
        try {
            const user = await this.service.getProfile();
            console.log("user", user);
            this.setModel({
                userName: { value: user.userName },
                phoneNumber: { value: user.phoneNumber },
                email: { value: user.email },
                avatar: user.avatar,
                imgUrl: user.avatar,
                renderKey: Date.now()
            })
        } catch (err) {
            console.log("err", err)
        }
    }

    validateInput = () => {
        let isValid = true;
        if (Helpers.isNullOrEmpty(this.model.userName?.value)) {
            this.setModel({
                userName: { error: Strings.Validation.REQUIRED }
            })
            isValid = false;
        }
        if (Helpers.isNullOrEmpty(this.model.phoneNumber?.value)) {
            this.setModel({
                phoneNumber: { error: Strings.Validation.REQUIRED }
            })
            isValid = false;
        } else if (!Helpers.checkValidatePhone(this.model.phoneNumber?.value || '')) {
            this.setModel({
                phoneNumber: { error: Strings.Validation.PHONE_NUMBER }
            })
            isValid = false;
        }

        if (Helpers.isNullOrEmpty(this.model.email?.value)) {
            this.setModel({
                email: { error: Strings.Validation.REQUIRED }
            })
            isValid = false;
        } else if (!Helpers.checkValidateEmail(this.model.email?.value)) {
            this.setModel({
                email: { error: Strings.Validation.EMAIL_ADDRESS }
            })
            isValid = false;
        }

        return isValid;
    }
    handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            this.showLoading()
            if (e.target.files) {
                for (let i = 0; i < e.target.files.length; i++) {
                    if ((e.target.files[i].size / 1048576) > 2) {
                        Helpers.showAlert("Hình " + e.target.files[i].name + " đã vượt quá 2mb. vui lòng chọn hình khác!");
                        e.target.value = '';
                        this.hideLoading()
                        return
                    }
                    if (e.target.files[i].type !== "image/png" && e.target.files[i].type !== "image/gif" && e.target.files[i].type !== "image/jpeg") {
                        Helpers.showAlert("File " + e.target.files[i].name + " Không đúng định dạng hình ảnh cho phép!");
                        e.target.value = '';
                        this.hideLoading()
                        return
                    } else {
                        const avatar: any = await this.service.uploadImage(e.target.files[i]);
                        if (avatar) {
                            let reader = new FileReader();
                            reader.readAsDataURL(e.target.files[i]);
                            reader.onloadend = () => {
                                this.setModel({
                                    imgUrl: reader.result,
                                    avatar: avatar.url
                                })
                            }
                        }
                    }
                }
            }
            this.hideLoading()
        } catch (error: any) {
            this.hideLoading()
            Helpers.showAlert(error.message, "error")
        }
    }

    update = async () => {
        try {
            if (!this.validateInput()) {
                return;
            }
            this.showLoading();
            const data = {
                "userName": this.model.userName?.value,
                "avatar": this.model.avatar,
                "email": this.model.email?.value,
                "phoneNumber": this.model.phoneNumber?.value
            }
            // const result = await this.service.updateProfile(data);
            fetch(`${Constants.Api.BASE_URL}${Constants.ApiPath.updateProfile}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': GlobalState.user.accessToken
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(response => {
                    console.log("response", response);
                    if (response.statusCode === Constants.ApiCode.SUCCESS) {
                        Helpers.showAlert(Strings.Profile.UPDATE_SUCCESS, "success");
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
            this.hideLoading();
        } catch (error) {
            Helpers.showAlert(Strings.Profile.UPDATE_ERROR, "error");
            this.hideLoading();
        }

    }
    // removeAvatar = () => {
    //     this.setModel({
    //         imgUrl: this.model.userInfo?.avatarUrl
    //     })
    // }

    handleChangePassword = () => {
        try {
            if (!this.validatePassword()) {
                console.log("validatePassword")
                return;
            }
            console.log("ttttt")
            this.showLoading();
            const data = {
                "password": this.model.password?.value,
                "newPassword": this.model.newPassword?.value,
            }
            // const result = await this.service.updateProfile(data);
            fetch(`${Constants.Api.BASE_URL}${Constants.ApiPath.CHANGE_PASSWORD}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': GlobalState.user.accessToken
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(async (response) => {
                    console.log("response", response);
                    if (response.statusCode === Constants.ApiCode.SUCCESS) {
                        Helpers.showAlert(Strings.Profile.CHANGE_PASSWORD_SUCCESS, "success");
                        GlobalState.showLoading();
                        await new UserService().logout();
                        clearGlobalState();
                        GlobalState.setModalLogin(true)
                        this.history.push(Screens.HOME);
                        // }
                        GlobalState.setModalLogin(true);
                        GlobalState.hideLoading();
                        
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
            this.hideLoading();
        } catch (error) {
            Helpers.showAlert(Strings.Profile.UPDATE_ERROR, "error");
            this.hideLoading();
        }
    }

    validatePassword = () => {
        let isValid = true;
        // debugger
        if (Helpers.isNullOrEmpty(this.model.password?.value)) {
            this.setModel({
                password: { error: Strings.Validation.REQUIRED }
            })
            isValid = false;
        }
        if (Helpers.isNullOrEmpty(this.model.newPassword?.value)) {
            this.setModel({
                newPassword: { error: Strings.Validation.REQUIRED }
            })
            isValid = false;
        }
        if (Helpers.isNullOrEmpty(this.model.newPasswordConfirm?.value)) {
            this.setModel({
                newPasswordConfirm: { error: Strings.Validation.REQUIRED }
            })
            isValid = false;
        } else if (this.model.newPassword?.value !== this.model.newPasswordConfirm?.value) {
            this.setModel({
                newPasswordConfirm: { error: Strings.Validation.CONFIRM_PASSWORD_ERROR }
            })
            isValid = false;
        }
        return isValid;
    }
}
export default ProfileController;