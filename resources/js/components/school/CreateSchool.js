import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const ruta = 'http://localhost:8000/api/school_insert';

const CreateSchool = () => {
    const [clave, setClave] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('@gmail.com')
    const history = useHistory()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            clave: clave,
            name: name,
            address: address,
            tel: tel,
            email: email
        })
        history.push('/showSchool')
    }

    return (
        <div>
            <h3 className='text-center'>Nueva Escuela</h3>
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
                        <label className='form-label'>Direccion</label>
                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type='text'
                            className='form-control text-center'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label '>Telefono</label>
                        <input
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                            type='text'
                            className='form-control text-center'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Correo</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            className='form-control text-center'
                        />
                    </div>
                    <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</button>
                    <Link to="/showSchool">
                        <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default CreateSchool;
