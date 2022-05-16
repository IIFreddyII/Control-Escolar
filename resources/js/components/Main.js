import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import NavLog from './NavLog';
import Login from './auth/Login';
import Register from './auth/Register';
import Menu from './Menu';





function Main() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/menu" component={Menu} />
                </Switch>
            </div>
            
        </BrowserRouter>
    )
}

export default Main;
if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}