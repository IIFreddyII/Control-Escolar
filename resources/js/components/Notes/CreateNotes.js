import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const ruta = 'http://localhost:8000/api/studentSubject_insert';
const ruta3 = 'http://localhost:8000/api/subject_index'
const ruta4 = 'http://localhost:8000/api/student_index'

const CreateNotes = () => {
    const [idSubject, setIdSbject] = useState('')
    const [idStudent, setIdStudent] = useState('')
    const [cal, setCal] = useState('70')

    const history = useHistory()

    const [subject, setSubject] = useState([])
    const [student, setStudent] = useState([])

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            idSubject: idSubject,
            idStudent: idStudent,
            cal: cal
        })
        history.push('/showNotes')
    }


    useEffect(() => {
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
        setIdSbject(option);
    }

    const handle2 = function (e) {
        const option = e.target.value;
        console.log(option);
        setIdStudent(option);
    }


    return (
        <Container>
            <div className='text-center'>
                <h3 className='text-center'>Nueva calificacion</h3>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <b><label className='form-label'>Materia</label></b>
                        <select name='subject' className='form-control text-center' onClick={handle}>
                            {
                                subject.map((subject) => (
                                    <option key={subject.id} value={subject.id}>{subject.name} </option>
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
                            min="70"
                            max="100"
                        />
                    </div>
                    <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</button>
                    <Link to="/showNotes">
                        <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                    </Link>

                </form>
            </div>
        </Container>

    )
}

export default CreateNotes
