import React from 'react'
import imgodont from "../../../img/dientes.jpg"
import moment from "moment"
export const Visual = (props) => {
    const {datosOdontograma } = props
    console.log(datosOdontograma)
    return (
        <div className='row'>
            <div className='col-6'>
                <img src={imgodont} />
            </div>
            <div className='col-6'>
            <table className="cinereousTable mt-3">
                <thead>
                    <tr>
                        <th scope="col" >Fecha</th>
                        <th scope="col">Pieza</th>
                        <th scope="col">Cara</th>
                        <th scope="col">Diagnostico</th> 
                    </tr>
                </thead>
                <tbody>
                    {datosOdontograma.map( (reg, i) => {
                        return (
                            <>
                                <tr key = {i}>
                                    <td className="fuente-2">{moment(reg.fecha).format("YYYY/MM/DD")}</td>
                                    <td className="fuente-2">{reg.pieza}</td>
                                    <td className="fuente-2">{reg.cara}</td>
                                    <td className="fuente-2">{reg.diagnostico}</td>                          
                                </tr>
                                    
                            </>
                        )
                                
                    })}
                        
                </tbody>
            </table>
            </div>
            
        </div>
    )
}
