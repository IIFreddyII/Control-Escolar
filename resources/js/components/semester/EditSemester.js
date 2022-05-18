import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const ruta = 'http://localhost:8000/api/semester_update/'
const ruta2 = 'http://localhost:8000/api/semester_show/'

const EditSemester = () => {
    const [idCareer, setIdCareer] = useState('')
    const [name, setName] = useState('')
    const [period, setPeriod] = useState('')
    const history = useHistory()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            idCareer: idCareer,
            name: name,
            period: period
        })
        history.push('/showSemeste')
    }


    useEffect(() => {
        const getSemesterById = async () => {
            const response = await axios.get(`${ruta2}${id}`)
            setIdCareer(response.data.idCareer)
            setName(response.data.name)
            setPeriod(response.data.period)
        }
        getSemesterById()

    }, [])

    return (
        <Container>
            <div>
                <h3 className='text-center'>Actualizar Semestre</h3>
                <form onSubmit={update}>
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
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Periodo</label>
                            <input
                                value={period}
                                onChange={(e) => setPeriod(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default EditSemester