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


const Menu = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/HomePage" component={HomePage} />
                    <Route exact path="/login" component={Login} />

                    <Route exact path="/showUser" component={ShowUser} />
                    <Route exact path="/createUser" component={RegisterUser} />

                    <Route exact path="/showStudent" component={ShowStudent} />
                    <Route exact path="/editStudent/:id" component={EditStudent} />
                    <Route exact path="/createStudent" component={CreateStudent} />
                    
                    <Route exact path="/showSchool" component={ShowSchool} />
                    <Route exact path="/editSchool/:id" component={EditSchool} />
                    <Route exact path="/createSchool" component={CreateSchool} />

                    <Route exact path="/showCareer" component={ShowCareer} />
                    <Route exact path="/editCareer/:id" component={EditCareer} />
                    <Route exact path="/createCareer" component={CreateCareer} />

                    <Route exact path="/showGroup" component={ShowGroup} />
                    <Route exact path="/editGroup/:id" component={EditGroup} />
                    <Route exact path="/createGroup" component={CreateGroup} />

                    <Route exact path="/showSemeste" component={ShowSemester} />
                    <Route exact path="/editSemester/:id" component={EditSemester} />
                    <Route exact path="/createSemester" component={CreateSemester} />

                    <Route exact path="/showSubject" component={ShowSubject} />
                    <Route exact path="/editSubject/:id" component={EditSubject} />
                    <Route exact path="/createSubject" component={CreateSubject} />

                    <Route exact path="/showProfessor" component={ShowProfessor} />
                    <Route exact path="/editProfessor/:id" component={EditProfessor} />
                    <Route exact path="/createProfessor" component={CreateProfessor} />

                    <Route exact path="/showNotes" component={ShowNotes} />

                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default Menu
if (document.getElementById('main')) {
    ReactDOM.render(<Menu />, document.getElementById('main'));
}