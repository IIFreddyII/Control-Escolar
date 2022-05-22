import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const ruta = 'http://localhost:8000/api/student_insert';

const defaultSelectValue = "---";

const CreateStudent = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [sex, setSex] = useState('')
    const [curp, setCurp] = useState('')
    const [address, setAddress] = useState('')
    const [tel, setTel] = useState('')
    const history = useHistory()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            email: email,
            name: name,
            firstName: firstName,
            lastName: lastName,
            sex: sex,
            curp: curp,
            address: address,
            tel: tel,
        })
        history.push('/showStudent')
    }

    return (
        <Container>
            <div className='text-center'>
                <h3 className='text-center'> <b>Nuevo Estudiante</b> </h3>
                <form onSubmit={store}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <b><label className='form-label'>Correo Electronico</label></b>

                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Nombre</label></b>

                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Apellido Materno</label></b>
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Apellido Paterno</label></b>
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>Sexo</label></b>
                            <select className='form-control text-center'
                                id="sex"
                                name="sex"
                                defaultValue={sex}
                                style={{ color: sex === defaultSelectValue ? "gray" : "black" }}
                                onChange={e => setSex(e.target.value)}
                            >
                                <option>{defaultSelectValue}</option>
                                <option>Masculino</option>
                                <option>Femenino</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <b><label className='form-label'>CURP</label></b>
                            <input
                                value={curp}
                                onChange={(e) => setCurp(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Direccion</label>
                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Telefono</label>
                            <input
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</button>
                        <Link to="/showStudent">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default CreateStudent;
