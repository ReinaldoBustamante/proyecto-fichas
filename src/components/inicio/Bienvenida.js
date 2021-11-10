import React from 'react'

export const Bienvenida = (props) => {
    const {nombre} = props
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col'>
                    <div className="card shadow">
                        <div className="card-body  text-center h4">
                            <div>
                                Bienvenido <span className='text-success'>{nombre}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
