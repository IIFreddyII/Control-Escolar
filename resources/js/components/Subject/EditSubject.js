import axios from "axios";
import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";

const ruta = 'http://localhost:8000/api/semester_update/'

const EditSubject = () => {
    const [clave, setClave] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [tel, setTel] = useState(0)
    const [email, setEmail] = useState(0)
    const history = useHistory()

    const update = async (e) => {
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
    

    useEffect( () =>{
        const getSchool_updateById = async (id) => {
            const response = await axios.get(`${ruta}${id}`)
            setClave(response.data.clave)
            setName(response.data.name)
            setAddress(response.data.address)
            setTel(response.data.tel)
            setEmail(response.data.email)
        }
        getSchool_updateById()
        
    }, [] )

    return (
        <div>
        <h3 className='text-center'>Editar Escuela</h3>
        <form onSubmit={update}>
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
            <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
            </div>
        </form>
    </div>
    )
}

export default EditSubject