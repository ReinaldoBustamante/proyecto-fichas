import React from 'react'
import { Bienvenida } from '../components/inicio/Bienvenida'
import { BuscarPaciente } from '../components/inicio/BuscarPaciente'
import { DatosPersonales } from '../components/inicio/DatosPersonales'

export const Inicio = (props) => {
    const {usuario, setpaciente} = props
    const {nombre, rut, correo, telefono, rol} = usuario
    return (
        <div className='container-fluid'>
            < Bienvenida />
            <div className= "row mt-4">
                <div className="col-6 ">
                < DatosPersonales nombre={nombre} rut={rut} correo = {correo} telefono = {telefono} rol={rol} />
               
                </div>
                <div className="col-6">
                    < BuscarPaciente  setpaciente = {setpaciente}/>
                </div>
            </div>
            
            
            
        </div>
    )
}
