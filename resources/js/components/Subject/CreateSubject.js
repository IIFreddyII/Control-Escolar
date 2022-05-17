import axios from 'axios'
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';



const ruta = 'http://localhost:8000/api/subject_insert';

const CreateSubject = () => {
    const [name, setName] = useState('')
    const [credit, setCredit] = useState('')
    const [idSemester, setIdSemester] = useState('')
    const history = useHistory()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {
            name: name,  
            credit: credit,
            idSemester: idSemester
        })
        history.push('/showSubject')
    }
    
  return (
    <div>
        <h3 className='text-center'>Nueva Materia</h3>
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
                <label className='form-label'>Creditos</label>
                <input 
                    value={credit}
                    onChange={ (e)=> setCredit(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Id Semestre</label>
                <input 
                    value={idSemester}
                    onChange={ (e)=> setIdSemester(e.target.value)}
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

export default CreateSubject
