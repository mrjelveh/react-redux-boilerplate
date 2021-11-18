import React from 'react';
import { selectLoginState } from '../../redux/authentication/authentication.slice';
import { useAppSelector } from '../../redux/store';

function Dashboard() {
    const { isAuth } = useAppSelector(selectLoginState)
    return(
        <div className="app">
            <p>auth state: {isAuth.toString()}</p>
            <h4>Dashboard Page</h4>
        </div>
    )
}

export default Dashboard;