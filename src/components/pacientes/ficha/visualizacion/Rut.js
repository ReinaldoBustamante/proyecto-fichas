import React from 'react'

export const Rut = (props) => {
    const {datosFicha} = props
    return (
        <div className="card bg-card mb-3 text-dark" >
            <div className="card-header c-header">Rut</div>
            <div className="card-body c-body">
                <span className="">{datosFicha.rut}</span>
            </div>
        </div>
        
    )
}
