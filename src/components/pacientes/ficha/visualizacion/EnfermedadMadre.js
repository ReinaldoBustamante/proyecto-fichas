import React from 'react'

export const EnfermedadMadre = (props) => {
    const {datosFicha} = props
    return (
        <div className="card bg-card mb-3 text-dark" >
            <div className="card-header c-header">Enfermedad Madre</div>
            <div className="card-body c-body">
                <span className="">{datosFicha.enfermedad_madre}</span>
            </div>
        </div>
        
    )
}
