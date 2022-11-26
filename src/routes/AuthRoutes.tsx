import React from "react";
import { Route, Switch } from "react-router-dom";
import { Screens } from "../constants";
import { LoginView } from "../app/views/auth";
import "../commons/styles/LoginStyles.css"
import { HomeView } from "../app/views/home";
export default function AuthRoutes() {
    return (
        <Switch>
            <Route path={Screens.AUTH_LOGIN}
                render={(p) => {
                    return (
                            <div className="container-fluid h-100">
                                <div className="row">
                                    <div className="col-lg-6 background-login d-none d-lg-block"></div>
                                    <div className="col-12 col-md-12 col-lg-6">
                                        <div className="sm-container h-100 d-flex justify-content-center align-items-center">
                                            <LoginView {...p} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    );
                }}
            />
        </Switch>
    );
}
