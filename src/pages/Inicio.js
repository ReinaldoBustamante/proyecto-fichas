import React from 'react'
import { BuscarPaciente } from '../components/inicio/BuscarPaciente'
import { DatosPersonales } from '../components/inicio/DatosPersonales'

export const Inicio = (props) => {
    const {usuario} = props
    const {nombre, rut, correo, telefono, rol} = usuario
    return (
        <div className='container-flush'>
          
            <div className= "row">
                <div className="col-12 mb-3">
                < DatosPersonales nombre={nombre} rut={rut} correo = {correo} telefono = {telefono} rol={rol} />
               
                </div>
                <div className="col-12 ">
                    < BuscarPaciente />
                </div>
            </div>
            
            
            
        </div>
    )
}
