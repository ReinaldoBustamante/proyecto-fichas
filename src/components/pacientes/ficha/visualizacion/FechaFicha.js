import React from 'react'

export const FechaFicha = (props) => {
    const {datosFicha} = props
    return (
        <div className="text-end p-s">
            <p > <span>Ficha registrada el: </span>{datosFicha.fecha_ficha}</p>
        </div>
    )
}
