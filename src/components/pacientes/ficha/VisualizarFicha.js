import React, { useState } from 'react'
import { SeccionDos } from './visualizacion/seccion/SeccionDos'
import { SeccionTres } from './visualizacion/seccion/SeccionTres'
import { SeccionUno } from './visualizacion/seccion/SeccionUno'
import Moment from "moment"


export const VisualizarFicha = (props) => {
    const {datosFicha} = props
    const [seccion, setseccion] = useState(1)
    //filtrar campos verdaderos
    const handleOnClick = (e) => {
        if (e.target.name === "1"){
            setseccion(1)
        }
        if (e.target.name === "2"){
            setseccion(2)
        }
        if (e.target.name === "3"){
            setseccion(3)
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    {seccion === 1 ?
                        <SeccionUno datosFicha = {datosFicha}/>
                    :
                    seccion === 2 ?
                        <SeccionDos datosFicha = {datosFicha} />
                    :
                    <SeccionTres datosFicha = {datosFicha} />
                    }
                </div>
            </div>
            
            <div className="row d-flex justify-content-end p-ss mt-2">
                <div className="col-2 btn-group ">
                    <button className="btn bg-menu text-white" onClick={handleOnClick} name="1">1</button>
                    <button className="btn bg-menu text-white" onClick={handleOnClick} name="2">2</button>
                    <button className="btn bg-menu text-white" onClick={handleOnClick} name="3">3</button>
    
                </div>
                
            </div>

        </div>
        
    )
}
