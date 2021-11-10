import React from 'react'

export const DatosPersonales = (props) => {
    const {rut, correo, telefono, rol} = props
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-12'>
                    
                    <div className="card shadow">
                        <div className="card-header">Datos Personales</div>
                        <div className="card-body d-grid">
                            <div className='row d-flex '>
                                <div className='col-3'>
                                    Rut: {rut}
                                </div>
                                <div className='col-3'>
                                    Rol: {rol}
                                </div>
                                <div className='col-3'>
                                    Celular: {telefono}
                                </div>
                                <div className='col-3'>
                                    correo: {correo}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
