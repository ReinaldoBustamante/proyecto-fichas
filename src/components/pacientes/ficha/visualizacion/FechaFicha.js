import React from 'react'

export const FechaFicha = (props) => {
    const {datosFicha} = props
    return (
        <div className="text-end">
            <p>{datosFicha.fecha_ficha}</p>
        </div>
    )
}
