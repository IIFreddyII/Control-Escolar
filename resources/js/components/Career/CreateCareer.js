import axios from 'axios'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



const ruta = 'http://localhost:8000/api/career_insert';

const CreateCareer = () => {
    const [clave, setClave] = useState('')
    const [name, setName] = useState('')
    const [area, setArea] = useState('')
    const [idSchool, setIdSchool] = useState('')
    const history = useHistory()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            clave: clave,
            name: name,
            area: area,
            idSchool: idSchool
        })
        history.push('/showCareer')
    }

    return (
        <Container>
            <div>
                <h3 className='text-center'>Nueva Carrera</h3>
                <form onSubmit={store}>
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
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Area</label>
                            <input
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Clave de Escuela</label>
                            <input
                                value={idSchool}
                                onChange={(e) => setIdSchool(e.target.value)}
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default CreateCareer;
