import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const ruta = 'http://localhost:8000/api';
const ShowNotes = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getAllNotes()
    }, [])

    const getAllNotes = async () => {
        const response = await axios.get(`${ruta}/studentSubject_index`)
        setNotes(response.data)
        //console.log(response.data);
    }

    const deleteNotes = async (id) => {
        await axios.post(`${ruta}/studentSubject_delete/${id}`)
        getAllNotes();
    }


    return (
        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Id</th>
                        <th>Id Materia</th>
                        <th>Id Estudiante</th>
                        <th>Calificaciones</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note) => (
                        <tr key={note.id}>
                            <td> {note.id} </td>
                            <td> {note.idSubject} </td>
                            <td> {note.idStudent} </td>
                            <td> {note.cal} </td>
                            <td>
                                <Link to={`/editNotes/${note.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteProfessors(note.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createNotes" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar nueva calificacion</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>
    )
}

export default ShowNotes