import React from 'react'
import { Tabla } from '../components/registrosUsuarios/Tabla'


export const RegistrosUsuarios = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Tabla />
                </div>
            </div>
        </div>
    )
}
