import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const ruta = 'http://localhost:8000/api';
const ShowGroup = () => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getAllGroups()
    }, [])

    const getAllGroups = async () => {
        const response = await axios.get(`${ruta}/group_index`)
        setGroups(response.data)
        //console.log(response.data);
    }

    const deleteGroups = async (id) => {
        await axios.post(`${ruta}/group_delete/${id}`)
        getAllGroups();
    }


    return (
        <div className="text-center">
            <table className='table table-striped mb-3'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Tamaño</th>
                        <th>IdCarrera</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {groups.map((group) => (
                        <tr key={group.id}>
                            <td> {group.id} </td>
                            <td> {group.name} </td>
                            <td> {group.size} </td>
                            <td> {group.idCar} </td>
                            <td>
                                <Link to={`/editGroup/${group.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteGroups(group.id)} className='btn btn-danger'>Eliminar</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='gap-2'>
                <Link to="/createGroup" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar nuevo Grupo</Link>
                <Link to="/HomePage">
                    <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 text-white">Regresar</button>
                </Link>
            </div>
        </div>


    )
}

export default ShowGroup