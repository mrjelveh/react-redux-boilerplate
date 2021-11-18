
import React from "react";
import {withRouter, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./components/header/header.component";
import Dashboard from "./containers/dashboard/dashboard.page";
import Login from "./containers/login/login.page";
import PrivateRoute from "./routes/private-route";
import PublicRoute from "./routes/public-route";


function App() {
  return (
    <Router>
    <Header />
    <Switch>
        <PublicRoute path='/login' component={Login} />
        <PrivateRoute path='/' roles={'all'} component={Dashboard} />
    </Switch>
</Router>
  )
}

export default App
