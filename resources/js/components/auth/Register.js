
import { Container } from 'react-bootstrap'
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'


const ruta = 'http://localhost:8000/api/register';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('Student')
    const history = useHistory()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            email: email,
            password: password,
            type: type,
        })
        history.push('/menu');
    }


    return (
        <Container>
            <div className="text-center">
                <h3>REGISTRO</h3>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2921/2921147.png" height={'150px'}
                />
            </div>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label>Correo Electronico</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        placeholder="Ingrese su correo electronico"
                    />
                </div>
                <div className="mb-3">
                <label>Contraseña</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    placeholder="Ingrese su contraseña"
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Registrar
                </button>
            </div>
            <p className="forgot-password text-right">
                Ya estas Registrado <Link to="/login">Inicia Session?</Link>
            </p>
            </form>

            
        </Container>
    );
}
export default Register