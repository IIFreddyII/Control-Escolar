import { Container } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'


const ruta = 'http://localhost:8000/api/register';

const RegisterUser = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('12345678')
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

    return (
        <Container>
            <div className='text-center'>
                <h3 className='text-center'>Nuevo Usuario</h3>
                <form onSubmit={store}>
                    <div className="mb-3">
                        <label>Correo Electronico</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="form-control text-center"

                        />
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control text-center"
                        />
                    </div>

                    <div className="form-group">
                        <label>Type</label>
                        <input
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            type="text"
                            className="form-control text-center"
                            placeholder='Student,Professor, Admin'
                        />

                    </div>

                    <div>
                        <button type="submit" className="btn btn-success btn-lg mt-2 mb-2 text-white">
                            Registrar
                        </button>
                    </div>
                </form>
            </div>



        </Container>
    );
}
export default RegisterUser