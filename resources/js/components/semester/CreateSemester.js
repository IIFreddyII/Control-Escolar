import axios from 'axios'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



const ruta = 'http://localhost:8000/api/semester_insert';

const CreateSemester = () => {
    const [idCareer, setIdCareer] = useState('')
    const [name, setName] = useState('')
    const [period, setPeriod] = useState('')
    const history = useHistory()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            idCareer: idCareer,
            name: name,
            period: period
        })
        history.push('/showSemeste')
    }

    return (
        <Container>
            <div>
                <h3 className='text-center'>Nuevo Semestre</h3>
                <form onSubmit={store}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <label className='form-label'>Id Carrera</label>
                            <input
                                value={idCareer}
                                onChange={(e) => setIdCareer(e.target.value)}
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
                            <label className='form-label'>Periodo</label>
                            <input
                                value={period}
                                onChange={(e) => setPeriod(e.target.value)}
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

export default CreateSemester;
