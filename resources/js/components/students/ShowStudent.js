import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


const ruta = 'http://localhost:8000/api';
const ShowStudent = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        getAllStudents()
    }, [])

    const getAllStudents = async () => {
        const response = await axios.get(`${ruta}/student_index`)
        setStudents(response.data)
        //console.log(response.data);
    }

    const deleteStudent = async (id) => {
        await axios.post(`${ruta}/student_delete/${id}`)
        getAllStudents();
    }


    return (

        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Numero de Control</th>
                        <th>Correo Electronico</th>
                        <th>Nombre</th>
                        <th>Apellido Materno</th>
                        <th>Apellido Paterno</th>
                        <th>Sexo</th>
                        <th>CURP</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td> {student.id} </td>
                            <td> {student.email} </td>
                            <td> {student.name} </td>
                            <td> {student.firstName} </td>
                            <td> {student.lastName} </td>
                            <td> {student.sex} </td>
                            <td> {student.curp} </td>
                            <td> {student.address} </td>
                            <td> {student.tel} </td>
                            <td>
                                <Link to={`/editStudent/${student.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteStudent(student.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createStudent" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar Nuevo Estudiante</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>
    )
}

export default ShowStudent;