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
    
    const isAuthenticated = GlobalState.isAuthenticated;

    
    const strMenu = localStorage.getItem(Constants.StorageKeys.MENU_ITEM) || "[]";
    const renderKey = +(localStorage.getItem("key") || "");
    const menu: IMenuItem[] = JSON.parse(strMenu);
    return (
        <Route
            {...rest}
            render={(p) => {
                if (!isAuthenticated) {
                    return <Redirect to={Screens.HOME} />;
                }
                return (
                    <div>
                        <Component {...p} />
                    </div>
                );
            }}
        />
    );
}

export default AuthenticatedGuard;
