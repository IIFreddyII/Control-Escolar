import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const ruta = 'http://localhost:8000/api';
const ShowSemester = () => {
    const [semesters, setSemesters] = useState([])

    useEffect(() => {
        getAllSemesters()
    }, [])

    const getAllSemesters = async () => {
        const response = await axios.get(`${ruta}/semester_index`)
        setSemesters(response.data)
        //console.log(response.data);
    }

    const deleteSemesters = async (id) => {
        await axios.post(`${ruta}/semester_delete/${id}`)
        getAllSemesters();
    }


    return (
        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID</th>
                        <th>ID Carrera</th>
                        <th>Nombre</th>
                        <th>Periodo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {semesters.map((semester) => (
                        <tr key={semester.id}>
                            <td> {semester.id} </td>
                            <td> {semester.idCareer} </td>
                            <td> {semester.name} </td>
                            <td> {semester.period} </td>
                            <td>
                                <Link to={`/editSemester/${semester.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteSemesters(semester.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createSemester" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar nuevo Semestre</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>


    )
}

export default ShowSemester