import React from 'react'
import { useHistory } from "react-router-dom";

export const Paciente = (props) => {
    let history = useHistory()
    const {paciente} = props
    console.log(paciente)

    const handleOnCLick = (e) => {
        if(e.target.name === "ficha"){
            history.push("/ficha-clinica")
        }
        if(e.target.name === "archivo"){
            history.push("/archivos")
        }
        if(e.target.name === "editar-paciente"){
            history.push("/editar-paciente")
        }
    }

    return (
        <div className='container '>
                <div className='row mt-5'>
                   <div className="col-12 text-center h4 mt-3">
                        Datos Paciente
                    </div>
                    <div className="col-12 mt-3 d-flex justify-content-center">
                        <div className="card col-12 shadow tarjeta-int mb-3 d-flex">
                            <p className="col-6">Nombre: <span className="p-2">{paciente.nombre}</span></p>
                            <p className="col-6">Rut: <span className="p-2">{paciente.rut}</span></p>
                            <p className="col">Edad: <span className="p-2">{paciente.edad}</span></p>
                            <p className="col">Orientacion Sexual: <span className="p-2">{paciente.sexo}</span></p>
                        </div>
                    </div> 
                    <div className="col mt-3 d-flex justify-content-center">
                        <div className="card col-12 shadow tarjeta-int mb-3 ">
                            <p className="col d-inline ">Telefono: <span className="p-2">{paciente.telefono}</span></p>
                            <p className="col d-inline">Celular: <span className="p-2">{paciente.celular}</span></p>
                            <p className="col d-inline">Estado Civil: <span className="p-2">{paciente.estado_civil}</span></p>
                            <p className="col d-inline">Domicilio: <span className="p-2">{paciente.domicilio}</span></p>
                            <p className="col d-inline">Profesion: <span className="p-2">{paciente.profesion}</span></p>
                            <p className="col d-inline">Lugar de Trabajo: <span className="p-2">{paciente.lugar_trabajo}</span></p>
                        </div>
                    </div>  
                </div>
                <div className='row mt-5 '>
                    <div className="d-flex">
                        <div className="col-4 text-center">
                            <button type = "button" name="ficha" className = "btn-lg btn-block btn-info text-white" onClick={handleOnCLick}>Ficha Clinica</button>
                        </div>
                        <div className="col-4 text-center">
                            <button type = "button" name="archivo" className= "btn-lg btn-block btn-success text-white" onClick={handleOnCLick}>Archivos</button>
                        </div>
                        <div className="col-4 text-center">
                            <button type = "button" name="editar-paciente" className= "btn-lg btn-warning text-white " onClick={handleOnCLick}>Editar</button>
                        </div>
                    </div> 
                    
                </div>
            
            
        </div>
    )
}
