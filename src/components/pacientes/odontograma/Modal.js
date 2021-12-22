import React, { useState } from 'react'
import imgodont from "../../../img/dientes.jpg"
import { Formulario } from './Formulario'
import { Registros } from './Registros'

export const Modal= (props) => {
    const {fecha, rut, setcargaodontogramas} = props
    const [registroOdontograma, setregistroOdontograma] = useState([])
    const [datosOdontograma, setdatosOdontograma] = useState({
        pieza:"",
        cara:"",
        diagnostico:"",
        procedimiento:""
    })
    return (
        <div>
            <div className="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
                        <div className="modal-dialog w-modal modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-dark" id="exampleModal2Label">Añadir Registro Odontograma</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            <div className="modal-body text-dark">
                                <div className='row'>
                                    <div className='col'>
                                    <img src={imgodont} />
                                    </div>
                                    <div className='col'>
                                        <Formulario setdatosOdontograma={setdatosOdontograma} datosOdontograma={datosOdontograma} setregistroOdontograma={setregistroOdontograma} registroOdontograma={registroOdontograma}/>
                                        <Registros registroOdontograma={registroOdontograma} setregistroOdontograma={setregistroOdontograma} fecha={fecha} rut={rut} setcargaodontogramas={setcargaodontogramas}/>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}