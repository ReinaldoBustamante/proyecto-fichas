import React from 'react'

export const MedicamentosCinco = (props) => {
    const {datosFicha} = props
    return (
        <div className="card bg-card mb-3 text-dark" >
            <div className="card-header c-header">Medicamentos ultimos cinco años</div>
            <div className="card-body c-body">
                <span className="">{datosFicha.medicamentos_cinco_años}</span>
            </div>
        </div>
        
    )
}
