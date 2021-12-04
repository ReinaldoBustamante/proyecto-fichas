import React from 'react'
import { Formulario } from './Formulario'

export const Modal = (props) => {
    const {rut, setcargaHistorial, cargaHistorial } = props
    return (
        <div>
            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog w-modal modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Historial Nuevo</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            <div className="modal-body">
                                <Formulario rut={rut} setcargaHistorial={setcargaHistorial} cargaHistorial={cargaHistorial}/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
