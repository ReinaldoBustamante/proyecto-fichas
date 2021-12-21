import React from 'react'
import Moment from "moment"
export const FechaFicha = (props) => {
   
    const {datosFicha} = props


    return (
        <div className="text-end p-s">
            <p > <span>Ficha registrada el: </span>{Moment(datosFicha.fecha).format("YYYY-MM-DD")}</p>
        </div>
    )
}
