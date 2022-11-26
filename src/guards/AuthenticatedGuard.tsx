import React from "react";
import {
    Route,
    Redirect,
    RouteProps,
} from "react-router-dom";
import { Helpers, IMenuItem } from "../commons/utils";
import { Screens, Constants } from "../constants";
import { GlobalState } from "../stores/GlobalState";
import Cookies from 'universal-cookie';
import AdminLayout from "../layout/AdminLayout";
interface IProps extends RouteProps {
    component: any;
}
function AuthenticatedGuard(props: IProps) {
    const { component: Component, ...rest } = props;
    const cookies = new Cookies();


    const accessToken = cookies.get('token') || "";
    const user = GlobalState.user ;
    const strMenu = localStorage.getItem(Constants.StorageKeys.MENU_ITEM) || "[]";
    const renderKey = +(localStorage.getItem("key") || "");
    const menu: IMenuItem[] = JSON.parse(strMenu);
    return (
        <Route
            {...rest}
            render={(p) => {
                if (!user && Helpers.isNullOrEmpty(accessToken)) {
                    return <Redirect to={Screens.AUTH_LOGIN} />;
                }
                return (
                    <AdminLayout
                        renderKey={renderKey}
                        menu={menu}
                        title={Helpers.getTitle()}>
                        <Component {...p} />
                    </AdminLayout>
                );
            }}
        />
    );
}

export default AuthenticatedGuard;
