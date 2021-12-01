import React from 'react'

export const EnfermedadPadre = (props) => {
    const {datosFicha} = props
    return (
        <div className="card bg-card mb-3 text-dark" >
            <div className="card-header c-header">Enfermedad Padre</div>
            <div className="card-body c-body">
                <span className="">{datosFicha.enfermedad_padre}</span>
            </div>
        </div>
        
    )
}
