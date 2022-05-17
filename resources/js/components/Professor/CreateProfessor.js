import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'




const ruta = 'http://localhost:8000/api/professor_insert';
const ruta2 = 'http://localhost:8000/api';

const CreateProfessor = () => {

    const [idUser, setIdUser] = useState('')
    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [sex, setSex] = useState('')
    const [curp, setCurp] = useState('')
    const [address, setAddress] = useState('')
    const [tel, setTel] = useState('')
    const [cedula, setCedula] = useState('')
    const [academic_degree, setAcademic_degree] = useState('')
    const [specialty, setSpecialty] = useState('')
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
            cedula: cedula,
            academic_degree: academic_degree,
            specialty: specialty
        })
        history.push('/showProfessor')
    }

   

    return (
        <div>
            <h3 className='text-center'>Nuevo Profesor</h3>
            <form onSubmit={store}>
                <div className='text-center'>
                    <div className='mb-3'>
                        <label className='form-label'>Usuario</label>
                        <input
                            value={idUser}
                            onChange={(e) => setIdUser(e.target.value)}
                            type='text'
                            className='form-control'
                        />
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
                    <div className='mb-3'>
                        <label className='form-label'>Cedula Profesional</label>
                        <input
                            value={cedula}
                            onChange={(e) => setCedula(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Grado Academico</label>
                        <input
                            value={academic_degree}
                            onChange={(e) => setAcademic_degree(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Especialidad</label>
                        <input
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
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

export default CreateProfessor;
