import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Formulario } from './Formulario'

export const Ficha = (props) => {
    const {rut} = props
    const [datosFicha, setDatosFicha] = useState("")
    useEffect(() => {
        Axios.get(`https://api-rest-fedent.herokuapp.com/fichas-clinicas/${rut}`).then( (response) =>{
            if(response.status === 200){
                setDatosFicha(response.data[0])
            }   
        })
    }, [])
    return (
        <div className="container mt-3">
            {datosFicha === undefined?
            <div className="row" >
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    Este <strong>Usuario</strong> no posee ficha
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="col">
                    <Formulario rut={rut}/>
               </div>
            </div>
      
            :
            "existe"
            }
        </div>
    )
}
