import { Axios } from 'axios'
import React from 'react'
import { Odonto } from './Odonto'
import Moment from "moment"
export const Tabla = (props) => {
    const {historial, rut, carga, setcarga} = props
    return (
        <div>
            <table className="cinereousTable mt-3">
                <thead>
                    <tr>
                        <th scope="col" >Fecha</th>
                        <th scope="col">Razon Ingreso</th>
                        <th scope="col">Detalles</th>
                        <th scope="col">Odontograma</th> 
                    </tr>
                </thead>
                <tbody>
                    {historial.map( (hist, i) => {
                        return (
                            <>
                                <tr key = {i}>
                                    <td className="fuente-2">{Moment(hist.fecha).format("YYYY-MM-DD")}</td>
                                    <td className="fuente-2">{hist.razon_ingreso}</td>
                                    <td className="fuente-2">{hist.detalles}</td>
                                    <td className="fuente-2">{
                                        <Odonto fecha={hist.fecha} rut={rut} carga={carga} setcarga={setcarga}/>
                                    }</td>                          
                                </tr>
                                    
                            </>
                        )
                                
                    })}
                        
                </tbody>
            </table>
        </div>
    )
}
