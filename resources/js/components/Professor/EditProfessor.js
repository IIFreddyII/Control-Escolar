import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

const ruta = 'http://localhost:8000/api/professor_update/'
const ruta2 = 'http://localhost:8000/api/professor_show/'
const defaultSelectValue = "---";

const EditProfessor = () => {

    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [sex, setSex] = useState('')
    const [curp, setCurp] = useState('')
    const [address, setAddress] = useState('')
    const [tel, setTel] = useState('')
    const [cedula, setCedula] = useState('')
    const [academic_degree, setAcademic_degree] = useState('')
    const [specialty, setSpecialty] = useState('')

    const history = useHistory()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${ruta}${id}`, {
            email: email,
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
    useEffect(() => {
        const getProfessorById = async () => {
            const response = await axios.get(`${ruta2}${id}`)

            setName(response.data.name)
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
            setSex(response.data.sex)
            setCurp(response.data.curp)
            setAddress(response.data.address)
            setTel(response.data.tel)
            setCedula(response.data.cedula)
            setAcademic_degree(response.data.academic_degree)
            setSpecialty(response.data.specialty)
        }
        getProfessorById()

    }, [])

    return (

        <Container>
            <div>
                <h3 className='text-center'>Actualizar Datos de Profesor</h3>
                <form onSubmit={update}>
                    <div className='text-center'>

                        <div className='mb-3'>
                            <label className='form-label'>Nombre:</label>
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
                            <label className='form-label'>Correo Electronico</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Sexo</label>
                            <select className='form-control text-center'
                                id="sex"
                                name="sex"
                                defaultValue={sex}
                                style={{ color: sex === defaultSelectValue ? "gray" : "black" }}
                                onChange={e => setSex(e.target.value)}
                            >
                                <option>{sex}</option>
                                <option>Masculino</option>
                                <option>Femenino</option>
                            </select>
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
                        <div className='mb-3'>
                            <label className='form-label'>Cedula Profesional</label>
                            <input
                                value={cedula}
                                onChange={(e) => setCedula(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Grado Academico</label>
                            <select className='form-control text-center'
                                id="Academic_degree"
                                name="Academic_degree"
                                defaultValue={academic_degree}
                                style={{ color: academic_degree === defaultSelectValue ? "gray" : "black" }}
                                onChange={e => setAcademic_degree(e.target.value)}
                            >
                                <option>{academic_degree}</option>
                                <option>Licenciatura</option>
                                <option>Maestria</option>
                                <option>Doctorado</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Especialidad</label>
                            <input
                                value={specialty}
                                onChange={(e) => setSpecialty(e.target.value)}
                                type='text'
                                className='form-control text-center'
                            />
                        </div>
                        <button type='submit' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Actualizar</button>
                        <Link to="/showProfessor">
                            <button type="button" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </Container>

    )
}

export default EditProfessor