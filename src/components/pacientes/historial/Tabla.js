import React from 'react'

export const Tabla = (props) => {
    const {historial} = props
    return (
        <div>
            <table className="cinereousTable mt-3">
                <thead>
                    <tr>
                        <th scope="col" >Fecha</th>
                        <th scope="col">Razon Ingreso</th>
                        <th scope="col">Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.map( (hist, i) => {
                        return (
                            <>
                                <tr key = {i}>
                                    <td className="fuente-2">{hist.fecha}</td>
                                    <td className="fuente-2">{hist.razon_ingreso}</td>
                                    <td className="fuente-2">{hist.detalles}</td>                        
                                </tr>
                                    
                            </>
                        )
                                
                    })}
                        
                </tbody>
            </table>
        </div>
    )
}
