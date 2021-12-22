import React from 'react'
import Moment from "moment"
export const Seguimiento = (props) => {
    const {seguimiento} = props
    return (
        <div className='row mt-3 container-fluid '>
            <div className='d-flex justify-content-center'>
            <div className='col-12'>
            {
                seguimiento[0] === undefined ?
                <div className='alert alert-warning'>No existen registros de piezas modificadas</div>
                :
                <table className="cinereousTable ">
                    <thead>
                        <tr>
                        <th scope="col" >Fecha</th>
                        <th scope="col">Pieza</th>
                        <th scope="col">Cara</th>
                        <th scope="col">Diagnostico</th>
                        <th scope="col">Procedimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {seguimiento.map( (registro, i) => {
                            return (
                            <>
                                <tr key = {i}>
                                    <td className="fuente-2">{Moment(registro.fecha).format("YYYY-MM-DD")}</td>
                                    <td className="fuente-2">{registro.pieza}</td>
                                    <td className="fuente-2">{registro.cara}</td>
                                    <td className="fuente-2">{registro.diagnostico}</td>
                                    <td className="fuente-2">{registro.procedimiento}</td>
                        
                                   
                                </tr>
                                
                            </>
                            )
                            
                        })}
                    
                    </tbody>
                </table>
            }
            
            </div>
            </div>
            
            
        </div>
    )
}
