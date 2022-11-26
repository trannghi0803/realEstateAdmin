import React from "react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import { AuthModel } from "../../models";
import { observer } from "mobx-react";
import { AuthService } from "../../services";
import { CallbackController } from "../../controllers/auth";
import "../../../commons/styles/LoginStyles.css";
import { CircularProgress } from "@material-ui/core";
@observer
export default class CallbackView extends BaseView<CallbackController, AuthModel, AuthService> {
    constructor(props: any) {
        super(props, CallbackController, AuthModel, AuthService);
    }

    public renderPage() {
        return (
            <div style={{
                position: "absolute",
                top: "50%",
                bottom: "50%",
                left: "50%",
                right: "50%"
            }}>
                <CircularProgress color="inherit" />
            </div>
        );
    }
}
