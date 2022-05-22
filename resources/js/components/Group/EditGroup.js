import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ruta = 'http://localhost:8000/api/group_update/'
const ruta2 = 'http://localhost:8000/api/group_show/'
const ruta3 = 'http://localhost:8000/api/career_index'



const EditGroup = () => {
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [idCar, setIdCar] = useState('')
    const history = useHistory()
    const { id } = useParams()


    const [career, setCareer] = useState([])

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            name: name,
            size: size,
            idCar: idCar,
        })
        history.push('/showGroup')
    }

    useEffect(() => {
        const getGroupById = async () => {
            const response = await axios.get(`${ruta2}${id}`)
            setName(response.data.name)
            setSize(response.data.size)
            setIdCar(response.data.idCar)
        }
        getGroupById()

        const getAllCareer = async () => {
            const response = await axios.get(ruta3)
            setCareer(response.data)
            console.log(response.data);
        }

        getAllCareer()

    }, [])

    const handle = function (e) {
        const option = e.target.value;
        console.log(option);

        setIdCar(option);
    }


    return (
        <Container>
            <div className='text-center'>
                <h3 className='text-center'>Actualizar Grupo</h3>
                <form onSubmit={update}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <label className='form-label'>Nombre</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Tamaño</label>
                            <input
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                type='number'
                                className='form-control text-center'
                                min="15"
                                max="45"
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Carrera</label>
                            <select name='Users' className='form-control text-center' onClick={handle}>
                                {
                                    career.map((career) => (
                                        <option key={career.id} value={career.id}>{career.name} </option>
                                    ))
                                }
                            </select>
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                        <Link to="/showGroup">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>

            </div>
        </Container>

    )
}

export default EditGroup