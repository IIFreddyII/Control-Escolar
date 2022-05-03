import axios from 'axios'
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';



const ruta = 'http://localhost:8000/api/school_insert';

const CreateSchool = () => {
    const [clave, setClave] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [tel, setTel] = useState(0)
    const [email, setEmail] = useState(0)
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
        history('/')
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
                    onChange={ (e)=> setClave(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Direccion</label>
                <input 
                    value={address}
                    onChange={ (e)=> setAddress(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Telefono</label>
                <input 
                    value={tel}
                    onChange={ (e)=> setTel(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Correo</label>
                <input 
                    value={email}
                    onChange={ (e)=> setEmail(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</button>
            </div>
        </form>
    </div>
  )
}

export default CreateSchool;
