import React from 'react'

import "../../index.css"
export const DatosPersonales = (props) => {
    const {nombre, rut, correo, telefono, rol} = props
    return (
        <div className='container-flush'>
                    <div className="">
                     
                        <div className="d-grid color-1 text-white ">
                            <h4 className="text-center linea card-header">Bienvenido {nombre}</h4>
                            <div className='row d-flex card-text mt-2 mb-2'>
                                <div className='col-3 card-element'>
                                    <span className="h5">ID:  </span><span className="h6"> {rut}</span>
                                </div>
                                <div className='col-3 card-element'>
                                    <span className="h5">Rol:  </span><span className="h6"> {rol}</span>
                                  
                                </div>
                                <div className='col-3 card-element'>
                                    <span className="h5">Celular:  </span><span className="h6"> {telefono}</span>
                                
                                </div>
                                <div className='col-3 card-element mb-2'>
                                <span className="h5">Correo:  </span><span className="h6"> {correo}</span>
                                </div>
                            </div>
                            <div className="card-footer w-foot linea"></div>
                            
                        </div>
                  
            </div>
        </div>
    )
}
