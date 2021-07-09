import React from "react";
import {withRouter, BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from "./private-route";
import Dashboard from "../containers/dashboard/dashboard.page";
import PublicRoute from "./public-route";
import Login from "../containers/login/login.page";

const AppRouter: React.FC = () => {
    return(
        <Router>
            <Switch>
                <PublicRoute path='/' component={Login} />
                <PrivateRoute path='/dashboard' roles={'all'} component={Dashboard} />
            </Switch>
        </Router>
    )
}

export default withRouter(AppRouter)