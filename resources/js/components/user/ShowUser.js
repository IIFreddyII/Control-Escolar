import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


const ruta = 'http://localhost:8000/api';
const ShowUser = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUser()
    }, [])

    const getAllUser = async () => {
        const response = await axios.get(`${ruta}/user_index`)
        setUsers(response.data)
        //console.log(response.data);
    }

    const deleteUser = async (id) => {
        await axios.post(`${ruta}/user_delete/${id}`)
        getAllUser();
    }


    return (
            <div className="text-center">
                <table className='table table-striped mb-3'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Password</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td> {user.id} </td>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                                <td> !!Secret!! </td>
                                <td>
                                    <button onClick={() => deleteUser(user.id)} className='btn btn-danger'>Eliminar</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='gap-2'>
                    <Link to="/createUser" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar Nuevo Usuario</Link>
                    <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
                </div>
            </div> 
    )
}

export default ShowUser;