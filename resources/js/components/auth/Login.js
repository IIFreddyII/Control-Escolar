import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';


const ruta = 'http://localhost:8000/api/login';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch(ruta, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify(item)
    });

    result = await result.json()
    localStorage.setItem("user-info", JSON.stringify(result))
    history.push("/HomePage")
  }

  return (
    <Container>
      <div className="text-center">
        <h3>LOGIN</h3>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" height={'150px'}
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
        <button onClick={login} type="submit" className="btn btn-primary"> Login</button>
      </div>
    </Container>
  );
}

export default Login;

if (document.getElementById('main')) {
  ReactDOM.render(<Login />, document.getElementById('main'));
}
