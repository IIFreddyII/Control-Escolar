import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const ruta = 'http://localhost:8000/api/career_insert';
const ruta3 = 'http://localhost:8000/api/school_index'


const defaultSelectValue = "---";

const CreateCareer = () => {
    const [clave, setClave] = useState('')
    const [name, setName] = useState('')
    const [area, setArea] = useState('')
    const [idSchool, setIdSchool] = useState('')
    const history = useHistory()

    const [school, setSchool] = useState([])

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

    useEffect(() => {
        const getAllSchool = async () => {
            const response = await axios.get(ruta3)
            setSchool(response.data)
            //console.log(response.data);
        }

        getAllSchool()

    }, [])

    const handle = function (e) {
        const option = e.target.value;
        //console.log(option);

        setIdSchool(option);
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
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Area:</label>
                            <select className='form-control text-center'
                                id="area"
                                name="area"
                                defaultValue={area}
                                style={{ color: area === defaultSelectValue ? "gray" : "black" }}
                                onChange={e => setArea(e.target.value)}
                            >
                                <option>{defaultSelectValue}</option>
                                <option>Arquitectura</option>
                                <option>Artes</option>
                                <option>Ciencias Biológicas</option>
                                <option>Ciencias Físico Matemáticas</option>
                                <option>Ciencias Sociales</option>
                                <option>Económico Administrativas</option>
                                <option>Educación</option>
                                <option>Humanidades</option>
                                <option>Ingeniería</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Escuela</label>
                            <select name='Users' className='form-control text-center' onClick={handle}>
                                {
                                    school.map((school) => (
                                        <option key={school.id} value={school.id}>{school.name} </option>
                                    ))
                                }
                            </select>
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</button>
                        <Link to="/showCareer">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default CreateCareer;
