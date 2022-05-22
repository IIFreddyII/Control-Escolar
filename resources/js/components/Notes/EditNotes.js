import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ruta = 'http://localhost:8000/api/studentSubject_update/'
const ruta2 = 'http://localhost:8000/api/studentSubject_show/'
const ruta3 = 'http://localhost:8000/api/subject_index'
const ruta4 = 'http://localhost:8000/api/student_index'



const EditNotes = () => {
    const [idSubject, setIdSubject] = useState('')
    const [idStudent, setIdStudent] = useState('')
    const [cal, setCal] = useState('')

    const history = useHistory()
    const { id } = useParams()


    const [subject, setSubject] = useState([])
    const [student, setStudent] = useState([])

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            idSubject: idSubject,
            idStudent: idStudent,
            cal: cal
        })
        history.push('/showNotes')
    }

    useEffect(() => {
        const getNotesById = async () => {
            const response = await axios.get(`${ruta2}${id}`)
            setIdSubject(response.data.idSubject)
            setIdStudent(response.data.idStudent)
            setCal(response.data.cal)
        }
        getNotesById()

        const getAllSubject = async () => {
            const response = await axios.get(ruta3)
            setSubject(response.data)
            //console.log(response.data);
        }
        getAllSubject()

        const getAllStudent = async () => {
            const response = await axios.get(ruta4)
            setStudent(response.data)
            //console.log(response.data);
        }
        getAllStudent()

    }, [])

    const handle = function (e) {
        const option = e.target.value;
        console.log(option);
        setIdSubject(option);
    }

    const handle2 = function (e) {
        const option = e.target.value;
        console.log(option);
        setIdStudent(option);
    }


    return (
        <Container>
            <div className='text-center'>
                <h3 className='text-center'>Actualizar Calificación</h3>
                <form onSubmit={update}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <b><label className='form-label'>Carrera</label></b>
                            <select name='subject' className='form-control text-center' onClick={handle}>
                                {
                                    subject.map((subject) => (
                                        <option key={subject.id } defaultValue={idSubject} value={subject.id}>{subject.name} </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Estudiante</label></b>
                            <select name='subject' className='form-control text-center' onClick={handle2}>
                                {
                                    student.map((student) => (
                                        
                                        <option key={student.id} value={student.id}>{student.name} </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Calificación</label></b>
                            <input
                                value={cal}
                                onChange={(e) => setCal(e.target.value)}
                                type='number'
                                className='form-control text-center'
                                min="0"
                                max="100"
                            />
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                        <Link to="/showNotes">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>

            </div>
        </Container>

    )
}

export default EditNotes