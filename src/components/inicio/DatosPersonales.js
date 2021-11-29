import React from 'react'

import "../../index.css"
export const DatosPersonales = (props) => {
    const {nombre, rut, correo, telefono, rol} = props
    return (
        <div className='container-flush'>
                    <div className="">
                     
                        <div className="card-body d-grid color-1 text-white ">
                            <h3 className="text-center">Bienvenido <span className="c-n">{nombre}</span></h3>
                            <div className='row d-flex card-text '>
                                <div className='col-6 card-element'>
                                    <span className="h4">ID:  </span><span className="h5"> {rut}</span>
                                </div>
                                <div className='col-6 card-element'>
                                    <span className="h4">Rol:  </span><span className="h5"> {rol}</span>
                                  
                                </div>
                                <div className='col-6 card-element'>
                                    <span className="h4">Celular:  </span><span className="h5"> {telefono}</span>
                                
                                </div>
                                <div className='col-6 card-element mb-2'>
                                <span className="h4">Correo:  </span><span className="h5"> {correo}</span>
                                </div>
                            </div>
                            
                        </div>
                  
            </div>
        </div>
    )
}
