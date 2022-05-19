import React from "react";
import { Redirect } from "react-router-dom";
import { HashRouter as Router, Switch, Route, } from "react-router-dom";



const PrivateRoute = ({ component:Component, ...rest }) => {

    return(
        <Route {...rest}>{localStorage.getItem('user-info')? <Component/>:<Redirect to = "Login"/> }</Route >
    );
};
export default PrivateRoute;