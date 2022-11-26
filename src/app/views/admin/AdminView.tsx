import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import { Card } from "../../../components";
import { AdminService } from "../../services";
import AdminController from "../../controllers/admin/AdminController";
import AdminModel from "../../models/AdminModel";
import { Strings } from "../../../constants";

@observer
export default class AdminView extends BaseView<AdminController, AdminModel, AdminService> {

    constructor(props: any) {
        super(props, AdminController, AdminModel, AdminService);
    }

    public renderPage() {
        return (
            <div>
                <Card>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                </Card>
                <Card>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                    <div>{Strings.Common.THIS_IS_HOME_CONTENT}</div>
                </Card>
            </div>
        );
    }

}
