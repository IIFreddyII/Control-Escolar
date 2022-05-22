import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, } from "react-router-dom";



import Login from './auth/Login';
import Register from './auth/Register';

import HomePage from './HomePage'

import RegisterUser from './user/RegisterUser';
import ShowUser from './user/ShowUser';

import ShowStudent from './students/ShowStudent'
import EditStudent from './students/EditStudent'
import CreateStudent from './students/CreateStudent'

import ShowSchool from './school/ShowSchool'
import EditSchool from './school/EditSchool';
import CreateSchool from './school/CreateSchool';

import ShowCareer from './Career/ShowCareer';
import EditCareer from './Career/EditCareer';
import CreateCareer from './Career/CreateCareer';

import ShowGroup from './Group/ShowGroup';
import EditGroup from './Group/EditGroup';
import CreateGroup from './Group/CreateGroup';

import ShowSemester from './semester/ShowSemester';
import CreateSemester from './semester/CreateSemester';
import EditSemester from './semester/EditSemester';

import ShowSubject from './Subject/ShowSubject';
import CreateSubject from './Subject/CreateSubject';
import EditSubject from './Subject/EditSubject';

import ShowProfessor from './Professor/ShowProfessor';
import EditProfessor from './Professor/EditProfessor';
import CreateProfessor from './Professor/CreateProfessor';

import ShowNotes from './Notes/ShowNotes';
import EditNotes from './Notes/EditNotes';
import CreateNotes from './Notes/CreateNotes';

import Navigation from './Nav';
import PrivateRoute from './PrivateRoute';




const Menu = () => {
    return (
        <Router>
            <div>
            <Navigation/>
                <Switch>

                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/Register" component={Register} />

                    <PrivateRoute exact path="/HomePage" component={HomePage}/>
                    

                    <PrivateRoute  exact path="/showUser" component={ShowUser} />
                    <PrivateRoute  exact path="/createUser" component={RegisterUser} />

                    <PrivateRoute  exact path="/showStudent" component={ShowStudent} />
                    <PrivateRoute exact path="/editStudent/:id" component={EditStudent} />
                    <PrivateRoute  exact path="/createStudent" component={CreateStudent} />
                    
                    <PrivateRoute  exact path="/showSchool" component={ShowSchool} />
                    <PrivateRoute  exact path="/editSchool/:id" component={EditSchool} />
                    <PrivateRoute  exact path="/createSchool" component={CreateSchool} />

                    <PrivateRoute  exact path="/showCareer" component={ShowCareer} />
                    <PrivateRoute  exact path="/editCareer/:id" component={EditCareer} />
                    <PrivateRoute  exact path="/createCareer" component={CreateCareer} />

                    <PrivateRoute  exact path="/showGroup" component={ShowGroup} />
                    <PrivateRoute  exact path="/editGroup/:id" component={EditGroup} />
                    <PrivateRoute  exact path="/createGroup" component={CreateGroup} />

                    <PrivateRoute exact path="/showSemeste" component={ShowSemester} />
                    <PrivateRoute exact path="/editSemester/:id" component={EditSemester} />
                    <PrivateRoute  exact path="/createSemester" component={CreateSemester} />

                    <PrivateRoute  exact path="/showSubject" component={ShowSubject} />
                    <PrivateRoute  exact path="/editSubject/:id" component={EditSubject} />
                    <PrivateRoute  exact path="/createSubject" component={CreateSubject} />

                    <PrivateRoute  exact path="/showProfessor" component={ShowProfessor} />
                    <PrivateRoute exact path="/editProfessor/:id" component={EditProfessor} />
                    <PrivateRoute  exact path="/createProfessor" component={CreateProfessor} />

                    <PrivateRoute  exact path="/showNotes" component={ShowNotes} />
                    <PrivateRoute exact path="/editNotes/:id" component={EditNotes} />
                    <PrivateRoute exact path="/createNotes" component={CreateNotes} />

                </Switch>
            </div>
        </Router>
    )
}
export default Menu
if (document.getElementById('main')) {
    ReactDOM.render(<Menu />, document.getElementById('main'));
}