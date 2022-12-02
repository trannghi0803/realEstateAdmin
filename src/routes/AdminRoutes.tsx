import React from "react";
import AuthenticatedGuard from "../guards/AuthenticatedGuard";
import { Switch } from "react-router-dom";
import { Screens } from "../constants";
import { AdminView } from "../app/views/admin";
import { ChangePasswordView, ProfileView } from "../app/views/profile";
import FavoriteItem from "../app/views/profile/FavoriteView";
import SubmitRealEstateView from "../app/views/profile/SubmitRealEstateView";

export default function AdminRoutes() {
    return (
        <Switch>
            <AuthenticatedGuard exact path={Screens.ADMIN} component={AdminView} />
            <AuthenticatedGuard exact path={Screens.PROFILE} component={ProfileView} />
            <AuthenticatedGuard exact path={Screens.FAVORITE} component={FavoriteItem}  />
            <AuthenticatedGuard exact path={Screens.USER_SUBMIT_REAL_ESTATE} component={SubmitRealEstateView} />
            <AuthenticatedGuard exact path={Screens.CHANGE_PASSWORD} component={ChangePasswordView} />

        </Switch>
    );
}
