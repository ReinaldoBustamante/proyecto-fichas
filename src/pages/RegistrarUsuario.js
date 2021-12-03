import React, { useState } from 'react'
import { Encabezado } from '../components/registrarUsuario/Encabezado'
import { Formulario } from '../components/registrarUsuario/Formulario'

export const RegistrarUsuario = () => {
    const [usuario, setusuario] = useState({
        username: '',
        password: '',
        nombre: '',
        rut: '',
        correo: '',
        telefono: '',
        rol:''
    })
    return (
        <div className='container-fluid'>
            <div className='row '>
                <div className='col-12'>
                    <Encabezado />
                </div>

                <div className='col-12 '>                 
                    <Formulario usuario = {usuario} setusuario={setusuario}/>
                </div>
            </div>
            
        </div>
    )
}
