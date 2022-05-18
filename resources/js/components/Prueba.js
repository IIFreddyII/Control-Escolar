import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import EditSchool from './school/EditSchool';

import Navigation from './Nav';




function Prueba() {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={EditSchool} />
                </Switch>

            </div>

        </BrowserRouter>
    )
}

export default Prueba;
if (document.getElementById('main')) {
    ReactDOM.render(<Prueba />, document.getElementById('main'));
}