import React from 'react'

export const CicatrizaBien = (props) => {
    const {datosFicha} = props
    return (
        <div className="card bg-card mb-3 text-dark" >
            <div className="card-header c-header">Cicatrizacion</div>
            <div className="card-body c-body">
                <span className="">{datosFicha.cicatriza_bien}</span>
            </div>
        </div>
        
    )
}
