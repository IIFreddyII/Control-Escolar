import axios from 'axios'
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';



const ruta = 'http://localhost:8000/api/group_insert';

const CreateGroup = () => {
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [idCar, setIdCar] = useState('')
    const history = useHistory()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            name: name,  
            size: size,
            idCar: idCar
        })
        history.push('/showGroup')
    }
    
  return (
    <div>
        <h3 className='text-center'>Nuevo Grupo</h3>
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
                <label className='form-label'>Tamaño</label>
                <input 
                    value={size}
                    onChange={ (e)=> setSize(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Clave de la Carrera</label>
                <input 
                    value={idCar}
                    onChange={ (e)=> setIdCar(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Registrar</button>
            </div>
        </form>
    </div>
  )
}

export default CreateGroup;
