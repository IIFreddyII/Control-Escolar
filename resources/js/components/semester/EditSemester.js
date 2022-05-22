import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ruta = 'http://localhost:8000/api/semester_update/';
const ruta2 = 'http://localhost:8000/api/semester_show/';
const ruta3 = 'http://localhost:8000/api/career_index';

const defaultSelectValue = "---";

const EditSemester = () => {
    const [idCareer, setIdCareer] = useState('')
    const [name, setName] = useState('')
    const [period, setPeriod] = useState('')
    const history = useHistory()
    const { id } = useParams()

    const [career, setCareer] = useState([])

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

        const getAllCareer = async () => {
            const response = await axios.get(ruta3)
            setCareer(response.data)
            //console.log(response.data);
        }

        getAllCareer()


    }, [])

    const handle = function (e) {
        const option = e.target.value;
        console.log(option);

        setIdCareer(option);
    }

    return (
        <Container>
            <div>
                <h3 className='text-center'>Actualizar Semestre</h3>
                <form onSubmit={update}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <b><label className='form-label'>Carrera</label></b>
                            <select name='Users' className='form-control text-center' onClick={handle}>
                                {
                                    career.map((career) => (
                                        <option key={career.id} value={career.id}>{career.name} </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Nombre</label></b>
                            <select className='form-control text-center'
                                id="name"
                                name="name"
                                defaultValue={name}
                                style={{ color: name === defaultSelectValue ? "gray" : "black" }}
                                onChange={e => setName(e.target.value)}
                            >
                                <option>{name}</option>
                                <option>Primero</option>
                                <option>Segundo</option>
                                <option>Tercero</option>
                                <option>Cuarto</option>
                                <option>Quinto</option>
                                <option>Sexto</option>
                                <option>Septimo</option>
                                <option>Octabo</option>
                                <option>Noveno</option>
                                <option>Decimo</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Periodo</label></b>
                            <select className='form-control text-center'
                                id="period"
                                name="period"
                                defaultValue={period}
                                style={{ color: period === defaultSelectValue ? "gray" : "black" }}
                                onChange={e => setPeriod(e.target.value)}
                            >
                                <option>{period}</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                            </select>
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                        <Link to="/showSemeste">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default EditSemester