import React from "react";

import ShowStudents from "./students/ShowStudents";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Admin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="">Carreras
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Departamentos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Grupos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profesores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Estudiantes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Materias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Usuarios</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Nav;