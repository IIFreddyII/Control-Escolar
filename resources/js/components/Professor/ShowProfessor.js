import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const ruta = 'http://localhost:8000/api';
const defaultSelectValue = "---";

const ShowProfessor = () => {
    const [professors, setProfessors] = useState([])

    useEffect(() => {
        getAllProfessors()
    }, [])

    const getAllProfessors = async () => {
        const response = await axios.get(`${ruta}/professor_index`)
        setProfessors(response.data)
        //console.log(response.data);
    }

    const deleteProfessors = async (id) => {
        await axios.post(`${ruta}/professor_delete/${id}`)
        getAllProfessors();
    }


    return (
        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido Materno</th>
                        <th>Apellido Paterno</th>
                        <th>Correo Electronico</th>
                        <th>Sexo</th>
                        <th>CURP</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Cedula</th>
                        <th>Grado Academico</th>
                        <th>Especialidad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {professors.map((professor) => (
                        <tr key={professor.id}>
                            <td> {professor.id} </td>
                            <td> {professor.name} </td>
                            <td> {professor.firstName} </td>
                            <td> {professor.lastName} </td>
                            <td> {professor.email} </td>
                            <td> {professor.sex} </td>
                            <td> {professor.curp} </td>
                            <td> {professor.address} </td>
                            <td> {professor.tel} </td>
                            <td> {professor.cedula} </td>
                            <td> {professor.academic_degree} </td>
                            <td> {professor.specialty} </td>
                            <td>
                                <Link to={`/editProfessor/${professor.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteProfessors(professor.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createProfessor" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar nuevo Profesor</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>
    )
}

export default ShowProfessor