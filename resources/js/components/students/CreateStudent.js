import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const ruta = 'http://localhost:8000/api/student';

const CreateStudent = () => {
    const [name, setName] = useState('')
    const [sexuality, setSexuality] = useState('')
    const [address, setAddress] = useState('')
    const [age, setAge] = useState(0)
    const [ncar, setNcar] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            name: name, 
            sexuality: sexuality, 
            address: address,
            age: age,
            ncar: ncar
        })
        navigate('/')
    }
    
  return (
    <div>
        <h3 className='text-center'>Nuevo Estudiante</h3>
        <form onSubmit={store}>
            <div className='text-center'>
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
                <label className='form-label'>Sexo</label>
                <input 
                    value={sexuality}
                    onChange={ (e)=> setSexuality(e.target.value)}
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
                <label className='form-label'>Edad</label>
                <input 
                    value={age}
                    onChange={ (e)=> setAge(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Numero de Carrera</label>
                <input 
                    value={ncar}
                    onChange={ (e)=> setNcar(e.target.value)}
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

export default CreateStudent;
