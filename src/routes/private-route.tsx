import React from 'react';
import {Route, Redirect, RouteComponentProps} from 'react-router-dom';
import roleRequest from "./role-request";
import {useAppSelector} from "../redux/store";
import {selectLoginState} from "../redux/authentication/authentication.slice";

type PRIVATEROUTETYPE = {
    roles: string,
    exact?: boolean,
    path?: string,
    component: React.FC<RouteComponentProps>,
}
const PrivateRoute: React.FC<PRIVATEROUTETYPE> = ({
      roles,
      component: Component,
      path,
      exact = false,
      ...otherProps}) => {
    const { isAuth } = useAppSelector(selectLoginState)
    return (
        <Route path={path} exact={exact} {...otherProps} component={
            (props: RouteComponentProps) => (
                roleRequest(roles) && isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            )
        }>
            
        </Route>
    )
}

export default PrivateRoute
