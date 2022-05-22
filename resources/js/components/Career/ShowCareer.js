import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const ruta = 'http://localhost:8000/api';
const ShowCareer = () => {
    const [careers, setCareers] = useState([])

    useEffect(() => {
        getAllCareers()
    }, [])

    const getAllCareers = async () => {
        const response = await axios.get(`${ruta}/career_index`)
        setCareers(response.data)
        //console.log(response.data);
    }

    const deleteCareers = async (id) => {
        await axios.post(`${ruta}/career_delete/${id}`)
        getAllCareers();
    }


    return (
        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID</th>
                        <th>Clave</th>
                        <th>Nombre</th>
                        <th>Area</th>
                        <th>IDEscuela</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {careers.map((career) => (
                        <tr key={career.id}>
                            <td> {career.id} </td>
                            <td> {career.clave} </td>
                            <td> {career.name} </td>
                            <td> {career.area} </td>
                            <td> {career.idSchool} </td>
                            <td>
                                <Link to={`/editCareer/${career.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteCareers(career.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createCareer" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar Nueva Carrera</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>
    )
}

export default ShowCareer