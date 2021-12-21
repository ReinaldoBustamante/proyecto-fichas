import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Moment from "moment"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import {faEye} from "@fortawesome/free-solid-svg-icons"
import { Modal } from '../odontograma/Modal'
import { ModalVisualizacion } from '../odontograma/ModalVisualizacion'

export const Odonto = (props) => {
    const {fecha, rut, carga, setcarga} = props
    const [odontograma, setodontograma] = useState("")
   
    const [cargaodontogramas, setcargaodontogramas] = useState(0)
    useEffect(() => {
        Axios.get(`http://localhost:5000/odontograma/${rut}/${Moment(fecha).format("YYYY-MM-DD")}/`).then( (response) =>{
        setodontograma(response.data[0])
        })
    
    }, [cargaodontogramas])
    
    console.log()
    return (
        <div>
            {odontograma === undefined ?
            <div>
                
               <button type="button" className="btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    Añadir <FontAwesomeIcon icon={faPlus} color="white"  />
                </button>
                <Modal fecha={fecha} rut={rut} setcargaodontogramas={setcargaodontogramas} carga={carga} setcarga={setcarga}/>
               
 
                    
            </div>
            :
            <div>
                <button type="button" className="btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                    Ver <FontAwesomeIcon icon={faEye} color="white"  />
               </button> 
                <ModalVisualizacion fecha={fecha} rut={rut}/>
            </div>
            
            }
        </div>
    )
}
