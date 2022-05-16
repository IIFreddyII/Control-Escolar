import { Container } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import Select from 'react-select'


const ruta = 'http://localhost:8000/api/register';
const ruta2 = 'http://localhost:8000/api';

const RegisterUser = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('')
    const history = useHistory()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            email: email,
            password: password,
            type: type,
        })
        history.push('/showUser');
    }

    const options = [
        { value: 'Admin', label: 'Administrador' },
        { value: 'Profesor', label: 'Profesor' },
        { value: 'Student', label: 'Estudiante' }
      ]


    return (
        <Container>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label>Correo Electronico</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"

                    />
                </div>
                <div className="mb-3">
                    <label>Contraseña</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Type</label>
                    <Select options={options}/>
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-success btn-lg mt-2 mb-2 text-white">
                        Registrar
                    </button>
                </div>
            </form>


        </Container>
    );
}
export default RegisterUser