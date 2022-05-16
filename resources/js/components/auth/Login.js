import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';



const Login = () => {
  const [formValue, setformValue] = React.useState({
    email: '',
    password: ''
  })


  let history = useHistory();

  const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();

    const formData = new FormData();
    formData.append("email", formValue.email)
    formData.append("password", formValue.password)
    axios.post("http://localhost/Topicos/ProyectV1/public/api/login",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'aplication/json'
        }
      }
    ).then(response => {
      console.log('response');
      console.log(response);
      history.push({
        pathname: "/menu",
        state: { token: response.data.token }
      }
      )
    }).catch(error => {
      console.log(error);
    });
  };



  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className="text-center">
          <h3>LOGIN</h3>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" height={'150px'}
          />
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su correo electronico"
            name="email" value={formValue.email} onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña"
            name="password" value={formValue.password} onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="d-grid">
          <Button type="submit" className="btn btn-primary">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;

if (document.getElementById('main')) {
  ReactDOM.render(<Login />, document.getElementById('main'));
}
