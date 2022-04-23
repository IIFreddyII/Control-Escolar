import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form} from 'react-bootstrap';
import axios from 'axios';


const Login = () =>{
  const [formValue, setformValue] = React.useState({
    email: '',
    password:''
  })


// let history = useHistory();

const onChange = (e) => {
  e.persist();
  setformValue({...formValue, [e.target.name]: e.target.value});
}

const handleSubmit = (e) => {
  if (e && e.preventDefault()) e.preventDefault();

const formData = new FormData();
formData.append("email", formValue.email)
formData.append("password",formValue.password)
axios.post("http://localhost/Topicos/ProyectV1/public/api/login",
formData,
{headers: {'Content-Type': 'multipart/form-data',
'Accept': 'aplication/json'}}
).then(response => {
  console.log('response');
  console.log(response);
  // history.push({
  //   pathname: "http://localhost/TopAvaWeb/Proyect/public/home",
  //   state:{token:response.data.token}
  //   }
  // )
    }).catch(error => {
      console.log(error);
    });
};

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={formValue.email} onChange={onChange}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password" name="password" value={formValue.password} onChange={onChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Login;

if (document.getElementById('main')) {
    ReactDOM.render(<Login />, document.getElementById('main'));
}
