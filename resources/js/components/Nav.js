import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CONTROL ESCOLAR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" to="">Escuelas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Carreras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Grupos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Semestre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Materias</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Studiantes</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Profesor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Usuarios</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Nav;