import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

const ruta = 'http://localhost:8000/api/career_update/'
const ruta2 = 'http://localhost:8000/api/career_show/'

const EditCareer = () => {
    const [clave, setClave] = useState('')
    const [name, setName] = useState('')
    const [area, setArea] = useState('')
    const [idSchool, setIdSchool] = useState('')
    const history = useHistory()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            clave: clave,
            name: name,
            area: area,
            idSchool: idSchool
        })
        history.push('/showCareer')
    }


    useEffect(() => {
        const getCareerById = async () => {
            const response = await axios.get(`${ruta2}${id}`)
            setClave(response.data.clave)
            setName(response.data.name)
            setArea(response.data.area)
            setIdSchool(response.data.idSchool)
        }
        getCareerById()

    }, [])

    return (
        <Container>
            <div>
                <h3 className='text-center'>Actualizar Carrera</h3>
                <form onSubmit={update}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <label className='form-label'>Clave</label>
                            <input
                                value={clave}
                                onChange={(e) => setClave(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
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
                            <label className='form-label'>Area</label>
                            <input
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Clave de Escuela</label>
                            <input
                                value={idSchool}
                                onChange={(e) => setIdSchool(e.target.value)}
                                type='number'
                                className='form-control text-center'
                                min='1'
                            />
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default EditCareer