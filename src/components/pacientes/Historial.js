import React, { useEffect, useState } from 'react'
import Axios from "axios"
import { Formulario } from './historial/Formulario'
import { Vsualizacion } from './historial/Vsualizacion'

export const Historial = (props) => {
    const {rut} = props
    const [cargaHistorial, setcargaHistorial] = useState(0)
    const [historial, sethistorial] = useState("")
    useEffect(() => {
        Axios.get(`https://api-rest-cfedent.herokuapp.com/historiales-clinicos/${rut}`).then( (response) =>{
            if(response.status === 200){
                sethistorial(response.data)
            }   
        })
    }, [cargaHistorial])
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
                <Vsualizacion historial = {historial} rut={rut} setcargaHistorial={setcargaHistorial} cargaHistorial={cargaHistorial}/>
            }
        </div>
    )
}
