import React from 'react'
import Moment from "moment"
export const FechaNacimiento = (props) => {
    const {datosFicha} = props
    return (
        <div className="card bg-card mb-3 text-dark" >
            <div className="card-header c-header">Fecha Nacimiento</div>
            <div className="card-body c-body">
                <span className="">{Moment(datosFicha.fecha_nacimiento).format("YYYY-MM-DD")}</span>
            </div>
        </div>
        
    )
}
