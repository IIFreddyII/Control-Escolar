import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import Nav from './Nav';
import Login from './auth/Login';

import HomePage from './HomePage'

import RegisterUser from './user/RegisterUser';
import ShowUser from './user/ShowUser';

import ShowStudent from './students/ShowStudent'
import EditStudent from './students/EditStudent'
import CreateStudent from './students/CreateStudent'

import ShowSchool from './school/ShowSchool'
import EditSchool from './school/EditSchool';
import CreateSchool from './school/CreateSchool';








const Menu = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav/>
                <Switch>
                    <Route exact path="/menu" component={HomePage} />
                    <Route exact path="/HomePage" component={HomePage} />
                    <Route exact path="/login" component={Login} />

                    <Route exact path="/showUser" component={ShowUser} />
                    <Route exact path="/createUser" component={RegisterUser} />

                    <Route exact path="/showStudent" component={ShowStudent} />
                    <Route exact path="/editStudent/:id" component={EditStudent} />
                    <Route exact path="/createStudent" component={CreateStudent} />
                    
                    <Route exact path="/showSchool" component={ShowSchool} />
                    <Route exact path="/editSchool" component={EditSchool} />
                    <Route exact path="/createSchool" component={CreateSchool} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default Menu
if (document.getElementById('main')) {
    ReactDOM.render(<Menu />, document.getElementById('main'));
}