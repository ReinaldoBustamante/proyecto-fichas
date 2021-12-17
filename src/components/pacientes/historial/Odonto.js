import Axios  from 'axios'
import React, { useEffect, useState } from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import {faEye} from "@fortawesome/free-solid-svg-icons"
import { Modal } from '../odontograma/Modal'
import { ModalVisualizacion } from '../odontograma/ModalVisualizacion'

export const Odonto = (props) => {
    const {fecha, rut} = props
    const [odontograma, setodontograma] = useState("")
    console.log(fecha)
    const [cargaodontogramas, setcargaodontogramas] = useState(0)
    useEffect(() => {
        Axios.get(`https://api-rest-cfedent.herokuapp.com/odontograma/${rut}/${fecha}/`).then( (response) =>{
        setodontograma(response.data[0])
        })
    
    }, [cargaodontogramas])
    

    return (
        <div>
            {odontograma === undefined ?
            <div>
                
               <button type="button" className="btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    Añadir <FontAwesomeIcon icon={faPlus} color="white"  />
                </button>
                <Modal fecha={fecha} rut={rut} setcargaodontogramas={setcargaodontogramas}/>
               
 
                    
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
