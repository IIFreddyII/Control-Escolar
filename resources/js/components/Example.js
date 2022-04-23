
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Insertando componentes
import Nav from "./Nav";
import ShowStudents from "./students/ShowStudents";
import CreateStudent from "./students/CreateStudent";
import EditStudent from "./students/EditStudent";

function Example() {
  return (
    <div className="Example">
      <BrowserRouter>
      <Nav/>
      <Routes>
          <Route path='/' element={<ShowStudents />} />
          <Route path='/create' element={<CreateStudent />} />
          <Route path="/edit/:id" element={<EditStudent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Example;

if (document.getElementById('main')) {
  ReactDOM.render(<Example />, document.getElementById('main'));
}
