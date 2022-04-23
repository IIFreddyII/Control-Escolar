import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const ruta = 'http://localhost:8000/api';
const ShowStudents = () => {
    const [students, setStudents] = useState( [] )
    
    useEffect( () => {
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
                        <th>Nombre</th>
                        <th>Sexo</th>
                        <th>Direccion</th>
                        <th>Edad</th>
                        <th>Numero de Carrera</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td> {student.id} </td>
                            <td> {student.name} </td>
                            <td> {student.sexuality} </td>
                            <td> {student.address} </td>
                            <td> {student.age} </td>
                            <td> {student.nCar} </td>
                            <td>
                                <Link to={`/edit/${student.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteStudent(student.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar Nuevo Estudiante</Link>
            </div>
        </div>
        
        
    )
}

export default ShowStudents;