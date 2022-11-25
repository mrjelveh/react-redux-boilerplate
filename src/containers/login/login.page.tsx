import React from 'react';
import { loginSuccess, selectLoginState } from '../../redux/authentication/authentication.slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

function Login() {
    const dispatch = useAppDispatch();
    const { isAuth } = useAppSelector(selectLoginState)
    return(
        <div className="app">
            <h4>Login Page</h4>
            <p>auth state: {isAuth.toString()}</p>
            <p>dummy code for just testing auth:</p>
            <button onClick={() => dispatch(loginSuccess())}>login</button>
        </div>
    )
}

export default Login;