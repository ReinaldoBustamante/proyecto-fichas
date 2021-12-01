import React from 'react'

export const Medicamentos = (props) => {
    const {datosFicha} = props
    return (
        <div className="card bg-card mb-3 text-dark" >
            <div className="card-header c-header">Medicamentos</div>
            <div className="card-body c-body">
                <span className="">{datosFicha.medicamentos}</span>
            </div>
        </div>
        
    )
}
