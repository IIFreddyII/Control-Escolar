import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

const ruta = 'http://localhost:8000/api/student_update/'
const ruta2 = 'http://localhost:8000/api/student_show/'

const EditStudent = () => {
    const [idUser, setIdUser] = useState('')
    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [sex, setSex] = useState('')
    const [curp, setCurp] = useState('')
    const [address, setAddress] = useState('')
    const [tel, setTel] = useState('')
    const history = useHistory()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            idUser: idUser,
            name: name,
            firstName: firstName,
            lastName: lastName,
            sex: sex,
            curp: curp,
            address: address,
            tel: tel
        })
        history.push('/showStudent')
    }

    useEffect(() => {
        const getStudentById = async () => {
            const response = await axios.get(`${ruta2}${id}`)
            setIdUser(response.data.idUser)
            setName(response.data.name)
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setSex(response.data.sex)
            setCurp(response.data.curp)
            setAddress(response.data.address)
            setTel(response.data.tel)
        }
        getStudentById()

    }, [])

    return (
        <Container>
            <div>
                <h3 className='text-center'>Nuevo Estudiante</h3>
                <form onSubmit={update}>
                    <div className='text-center'>
                        <div className='mb-3'>
                            <label className='form-label'>Usuario</label>
                            <input
                                value={idUser}
                                onChange={(e) => setIdUser(e.target.value)}
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
                            <label className='form-label'>Apellido Materno</label>
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Apellido Paterno</label>
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Sexo</label>
                            <input
                                value={sex}
                                onChange={(e) => setSex(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>CURP</label>
                            <input
                                value={curp}
                                onChange={(e) => setCurp(e.target.value)}
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
                            <label className='form-label'>Telefono</label>
                            <input
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default EditStudent