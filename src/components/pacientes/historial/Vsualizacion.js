import React from 'react'


import { Modal } from './Modal'
import { Tabla } from './Tabla'

export const Vsualizacion = (props) => {
    const {historial, rut, setcargaHistorial, cargaHistorial} = props
    return (
        <div>
            <div className="row d-grid justify-content-end">
                <div className="col">
                
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Nuevo
                    </button>
                    <Modal rut = {rut} setcargaHistorial = {setcargaHistorial} cargaHistorial={cargaHistorial}/>
                    
                </div>

            </div>

            <div classNameName="row ">
                <div className="col">
                    <Tabla historial = {historial} rut={rut}/>
                </div>
            </div>
        </div>
        

        
    )
}
