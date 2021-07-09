

import {Route, RouteComponentProps, Redirect} from 'react-router-dom'
import roleRequest from "./role-request";
import React from "react";
import {ConnectedComponent} from "react-redux";
import { useAppSelector} from "../redux/store";
import {selectLoginState} from "../redux/authentication/authentication.slice";

type PUBLICROUTETYPE = {
    roles?: string,
    exact?: boolean,
    path: string,
    component: React.FC<RouteComponentProps> | ConnectedComponent<any, any>,
}
const PublicRoute: React.FC<PUBLICROUTETYPE> = ({
    roles,
    component: Component,
    path,
    exact,
    ...otherProps}) => {
    const { isAuth } = useAppSelector(selectLoginState)
    return (
        <Route path={path} exact={exact} {...otherProps} component={(props: RouteComponentProps) => (
            roleRequest(roles) && isAuth ? (
                <Component {...props} />
            ): (
                <Redirect to="/" />
            )
        )} />
    )
}

export default PublicRoute