import React from 'react'
import { Bienvenida } from '../components/inicio/Bienvenida'
import { BuscarPaciente } from '../components/inicio/BuscarPaciente'
import { DatosPersonales } from '../components/inicio/DatosPersonales'

export const Inicio = (props) => {
    const {usuario, setpaciente} = props
    const {nombre, rut, correo, telefono, rol} = usuario
    return (
        <div className='container'>

            < Bienvenida nombre = {nombre}/>
            < DatosPersonales rut={rut} correo = {correo} telefono = {telefono} rol={rol} />
            < BuscarPaciente  setpaciente = {setpaciente}/>
            
        </div>
    )
}
