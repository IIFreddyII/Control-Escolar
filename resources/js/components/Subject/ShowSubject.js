import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const ruta = 'http://localhost:8000/api';
const ShowSubject = () => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        getAllSubjects()
    }, [])

    const getAllSubjects = async () => {
        const response = await axios.get(`${ruta}/subject_index`)
        setSubjects(response.data)
        //console.log(response.data);
    }

    const deleteSubjects = async (id) => {
        await axios.post(`${ruta}/subject_delete/${id}`)
        getAllSubjects();
    }


    return (
        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Creditos</th>
                        <th>Id Semestre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((subject) => (
                        <tr key={subject.id}>
                            <td> {subject.id} </td>
                            <td> {subject.name} </td>
                            <td> {subject.credit} </td>
                            <td> {subject.idSemester} </td>
                            <td>
                                <Link to={`/editSubject/${subject.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteSubjects(subject.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createSubject" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar nueva Materia</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>


    )
}

export default ShowSubject