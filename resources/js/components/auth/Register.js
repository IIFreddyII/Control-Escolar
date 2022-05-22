
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

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function signUp() {
        let item = { name, email, password }
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
                <h2>BIENVENIDO</h2>
                <h4>REGISTRESE EN LA PLATAFORMA</h4>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2921/2921147.png" height={'150px'}
                />
            </div>
            <div className="mb-3 text-center">
                <h4><label>Nombre</label></h4>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control text-center"
                    placeholder="Ingrese su nombre"
                />
            </div>
            <div className="mb-3 text-center">
                <h4><label>Correo Electronico</label></h4>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control text-center"
                    placeholder="Ingrese su correo electronico"
                />
            </div>
            <div className="mb-3 text-center">
                <h4><label>Contraseña</label></h4>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control text-center"
                    placeholder="Ingrese su contraseña"
                />
            </div>
            <div className="d-grid">
                <button onClick={signUp} type="submit" className="btn btn-primary btn-lg"> Registrarse</button>
            </div>
            <p className="forgot-password text-right">
                Ya estas Registrado <b><Link to="/login">Inicia Session?</Link></b>
            </p>

        </Container>
    )
}
export default Register