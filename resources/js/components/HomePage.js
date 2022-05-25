import React, { useState, useEffect } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const HomePage = () => {

   
    return (
        <Container >
            <div className='text-center page-header'>
                <h1>BIENVENIDO</h1>
            </div>
            <div className='text-center container'>
                <div className="row">
                    <div className="col">
                        <Link to="/showStudent">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" height={'100px'}
                            />
                        </Link>
                        <h2>Alumnos</h2>
                    </div>
                    <div className="col">
                        <Link to="/showProfessor">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/7097/7097181.png" height={'100px'}
                            />
                        </Link >
                        <h2>Profesores</h2>
                    </div>
                    <div className="col">
                        <Link to="/showGroup">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" height={'100px'}
                            />
                        </Link>
                        <h2>Grupos</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/showSubject">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2702/2702069.png" height={'100px'}
                            />
                        </Link>
                        <h2>Materias</h2>
                    </div>
                    <div className="col">
                        <Link to="/showSchool">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1344/1344761.png" height={'100px'}
                            />
                        </Link>
                        <h2>Escuelas</h2>
                    </div>
                    <div className="col">
                        <Link to="/showCareer">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2000/2000920.png" height={'100px'}
                            />
                        </Link>
                        <h2>Carreras</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/showSemeste">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2234/2234723.png" height={'100px'}
                            />
                        </Link>
                        <h2>Semestre</h2>
                    </div>
                    <div className="col">
                        <Link to="/showUser">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/476/476863.png" height={'100px'}
                            />
                        </Link>
                        <h2>Usuarios</h2>
                    </div>
                    <div className="col">
                        <Link to="/showNotes">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3329/3329524.png" height={'100px'}
                            />
                        </Link>
                        <h2>Calificaciones</h2>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default HomePage