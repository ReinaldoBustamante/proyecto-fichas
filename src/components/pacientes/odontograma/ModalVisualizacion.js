import React, { useEffect, useState } from 'react'
import Axios from "axios"
import { Visual } from './Visual'
import Moment from "moment"


export const ModalVisualizacion = (props) => {
    const {rut, fecha} = props
    const [datosOdontograma, setdatosOdontograma] = useState("")
    
    
    useEffect(() => {
        Axios.get(`http://localhost:5000/odontograma/${rut}/${Moment(fecha).format("YYYY-MM-DD")}/`).then( (response) =>{
        setdatosOdontograma(response.data)
        })
    
    }, [])
    
    
    return (
        <div>
            <div className="modal fade " id="exampleModal3" tabindex="-1" aria-labelledby="exampleModal3Label" aria-hidden="true">
                        <div className="modal-dialog w-modal modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-dark" id="exampleModal3Label">Visualizacion Odontograma</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            <div className="modal-body text-dark">
                                {
                                    datosOdontograma[0] === undefined ?
                                    ""
                                    :
                                    <Visual datosOdontograma={datosOdontograma}/>

                                }
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}