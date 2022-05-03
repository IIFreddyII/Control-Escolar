import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ShowSchool from './school/ShowSchool';
import CreateSchool from './school/CreateSchool';
import EditSchool from './school/EditSchool';



function Main() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/"><ShowSchool /></Route>
                    <Route path="/create"><CreateSchool /></Route>
                    <Route path="/edit/:id">< EditSchool/></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Main;
// for <div id="main-employee"></div>
if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}