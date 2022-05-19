
import { Container } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'


const ruta = 'http://localhost:8000/api/register';

const Register = () => {

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/HomePage")
        }
    }, [])


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('Student')
    const history = useHistory()

    async function signUp() {
        let item = { email, password, type }
        console.warn(item)

        let result = await fetch(ruta, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });

        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/HomePage")
    }


    return (
        <Container>
            <div className="text-center">
                <h3>REGISTRO</h3>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2921/2921147.png" height={'150px'}
                />
            </div>
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
                <button onClick={signUp} type="submit" className="btn btn-primary"> Sign Up</button>
            </div>
            <p className="forgot-password text-right">
                Ya estas Registrado <Link to="/login">Inicia Session?</Link>
            </p>

        </Container>
    )
}
export default Register