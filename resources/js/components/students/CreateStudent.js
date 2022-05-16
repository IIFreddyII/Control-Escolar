import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'




const ruta = 'http://localhost:8000/api/student_insert';
const ruta2 = 'http://localhost:8000/api';

const CreateStudent = () => {

    const [idUser, setIdUser] = useState()
    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [sex, setSex] = useState('Masculino')
    const [curp, setCurp] = useState('')
    const [address, setAddress] = useState('')
    const [tel, setTel] = useState('')
    const history = useHistory()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(ruta, {

            idUser: idUser,
            name: name,
            firstName: firstName,
            lastName: lastName,
            sex: sex,
            curp: curp,
            address: address,
            tel: tel,
        })
        history.push('/showStudent')
    }

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUser()
    }, [])

    const getAllUser = async () => {
        const response = await axios.get(`${ruta2}/user_index`)
        setUsers(response.data)
        //console.log(response.data);
    }


    const options = [
        { value: 'Masculino', label: 'Masculino' },
        { value: 'Femenino', label: 'Femenino' }
      ]

    return (
        <div>
            <h3 className='text-center'>Nuevo Estudiante</h3>
            <form onSubmit={store}>
                <div className='text-center'>
                    <div className='mb-3'>
                        <label className='form-label'>Usuario</label>

                        <select name='Users' className='form-control'>
                            {users.map((user) => (
                                <option
                                    key={user.id}
                                    value={idUser}
                                    label={user.id} 
                                    onChange={(e) => setIdUser(e.target.value)}>
                                    {user.email}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Apellido Materno</label>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Apellido Paterno</label>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Sexo</label>
                        <Select options={options}/>
                        <input
                            value={sex}
                            onChange={(e) => setSex(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>CURP</label>
                        <input
                            value={curp}
                            onChange={(e) => setCurp(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Direccion</label>
                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Telefono</label>
                        <input
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
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

export default CreateStudent;
