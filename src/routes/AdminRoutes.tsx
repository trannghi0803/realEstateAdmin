import React from "react";
import AuthenticatedGuard from "../guards/AuthenticatedGuard";
import { Switch } from "react-router-dom";
import { Screens } from "../constants";
import { AdminView } from "../app/views/admin";

export default function AdminRoutes() {
    return (
        <Switch>
            <AuthenticatedGuard exact path={Screens.ADMIN} component={AdminView} />
        </Switch>
    );
}
