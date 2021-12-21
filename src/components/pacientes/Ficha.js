import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Tabs } from './ficha/Tabs'
import { VisualizarFicha } from './ficha/VisualizarFicha'

export const Ficha = (props) => {
    const {rut, paciente} = props
    const [datosFicha, setDatosFicha] = useState("")
    const [cargaPagina, setcargaPagina] = useState(0)
    useEffect(() => {
        Axios.get(`http://localhost:5000/fichas/${rut}`).then( (response) =>{
            if(response.status === 200){
                setDatosFicha(response.data[0])
            }   
        })
    }, [cargaPagina])
    return (
        <div className="container mt-3">
            {datosFicha === undefined?
            <div className="row" >
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    Este <strong>Usuario</strong> no posee ficha
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="col">
                    <Tabs rut={rut} paciente={paciente} cargaPagina={cargaPagina} setcargaPagina={setcargaPagina}/>
               </div>
            </div>
      
            :
            <div>
                <VisualizarFicha datosFicha = {datosFicha} />
            </div>
            }
        </div>
    )
}
