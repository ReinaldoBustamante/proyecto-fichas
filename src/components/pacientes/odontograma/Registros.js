import React from 'react'
import { Tabla } from './Tabla'

export const Registros = (props) => {
    const {registroOdontograma, setregistroOdontograma, fecha, rut, setcargaodontogramas} = props
    
    return (
        <div className='row mt-3'>
            <div className='col'>
                {registroOdontograma[0] === undefined ?
                <div className='alert alert-warning' role="alert">
                    Sin registros
                </div>
                :
                <Tabla registroOdontograma={registroOdontograma} rut={rut} setregistroOdontograma={setregistroOdontograma} fecha={fecha} setcargaodontogramas={setcargaodontogramas}/>
                }
            </div>
        </div>
    )
}
