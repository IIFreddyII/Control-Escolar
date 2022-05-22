import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

const ruta = 'http://localhost:8000/api/subject_update/';
const ruta2 = 'http://localhost:8000/api/subject_show/';
const ruta3 = 'http://localhost:8000/api/semester_index';

const EditSubject = () => {
    const [name, setName] = useState('')
    const [credit, setCredit] = useState('')
    const [idSemester, setIdSemester] = useState('')
    const history = useHistory()
    const { id } = useParams()

    const [semester, setSemester] = useState([])

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            name: name,
            credit: credit,
            idSemester: idSemester
        })
        history.push('/showSubject')
    }


    useEffect(() => {
        const getSubjectById = async () => {
            const response = await axios.get(`${ruta2}${id}`)
            setName(response.data.name)
            setCredit(response.data.credit)
            setIdSemester(response.data.idSemester)

        }
        getSubjectById()

        const getAllSemester = async () => {
            const response = await axios.get(ruta3)
            setSemester(response.data)
            console.log(response.data);
        }

        getAllSemester()

    }, [])

    const handle = function (e) {
        const option = e.target.value;
        console.log(option);

        setIdSemester(option);
    }

    return (
        <Container>
            <div>
                <h3 className='text-center'>Actualizar Materia</h3>
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
                            <label className='form-label'>Creditos</label>
                            <input
                                value={credit}
                                onChange={(e) => setCredit(e.target.value)}
                                type='number'
                                className='form-control text-center'
                                min='4'
                                max='5'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Semester</label>
                            <select name='semester' className='form-control text-center' onClick={handle}>
                                {
                                    semester.map((semester) => (
                                        <option key={semester.id} value={semester.id}>{semester.name} </option>
                                    ))
                                }
                            </select>
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                        <Link to="/showSubject">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default EditSubject