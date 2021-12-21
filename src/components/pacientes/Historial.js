import React, { useEffect, useState } from 'react'
import Axios from "axios"
import DatePicker from "react-datepicker"
import { Formulario } from './historial/Formulario'
import { Vsualizacion } from './historial/Vsualizacion'

export const Historial = (props) => {
    const {rut, historial, sethistorial, carga, setcarga} = props
    const [cargaHistorial, setcargaHistorial] = useState(0)
    const [fechas, setfechas] = useState([])
    useEffect(() => {
        Axios.get(`http://localhost:5000/historiales-clinicos/${rut}`).then( (response) =>{
            if(response.status === 200){
                sethistorial(response.data)
                
            }   
        })
        
        
    }, [cargaHistorial])
    console.log(historial)
    
    return (
        <div className="container mt-3">
            {historial[0] === undefined?
                <div className="row" >
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        Este <strong>Usuario</strong> no posee historial clinico
                    
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div className="col">
                        <Formulario rut = {rut} setcargaHistorial={setcargaHistorial} cargaHistorial={cargaHistorial} />
                    </div>
                </div>
            :
                <div>
                    {
                     console.log(fechas)   
                    }
                    <Vsualizacion historial = {historial} rut={rut} setcargaHistorial={setcargaHistorial} cargaHistorial={cargaHistorial} carga={carga} setcarga={setcarga}/>
                </div>
                
            }
        </div>
    )
}
