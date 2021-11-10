import React from 'react'

export const Paciente = (props) => {
    const {paciente} = props
   
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    nombre: {paciente.nombre}
                </div>
                <div className='col-12'>
                    Rut: {paciente.rut}
                </div>
                <div className='col-12'>
                    Edad: {paciente.edad}
                </div>
                <div className='col-12'>
                    Estado Civil: {paciente.estado_civil}
                </div>
                <div className='col-12'>
                    Celular: {paciente.celular}
                </div>
                <div className='col-12'>
                    Telefono: {paciente.telefono}
                </div>
                <div className='col-12'>
                    Domicilio: {paciente.domicilio}
                </div>
                <div className='col-12'>
                    Profesion: {paciente.profesion}
                </div>
                <div className='col-12'>
                    Lugar de trabajo: {paciente.lugar_trabajo}
                </div>
            </div>
            
        </div>
    )
}
