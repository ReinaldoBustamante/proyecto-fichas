import React from 'react'
import Axios from "axios"
export const Tabla = (props) => {
    const {registroOdontograma, setregistroOdontograma, fecha, rut, setcargaodontogramas} = props
    
    const handleOnClick = () =>{
        registroOdontograma.map((odonto,indexo)=>{
            
            Axios.post('https://api-rest-cfedent.herokuapp.com/odontograma',{
                pieza: odonto.pieza,
                cara: odonto.cara,
                diagnostico: odonto.diagnostico,
                procedimiento: odonto.procedimiento,
                fecha: fecha,
                rut:rut
        
            }).then((response) => {
                console.log(response)
                setcargaodontogramas(1)
            }).catch(err =>{
                console.log(err)
            }) 
        })
        setregistroOdontograma([])
    }
    return (
        <div className='row'>
            <div className='col'>
                <table className="cinereousTable ">
                    <thead>
                        <tr>
                        <th scope="col" >Pieza</th>
                        <th scope="col">Cara</th>
                        <th scope="col">Diagnostico</th>
                        <th scope="col">Procedimiento</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {registroOdontograma.map( (registro, i) => {
                            return (
                            <>
                                <tr key = {i}>
                                    <td className="fuente-2">{registro.pieza}</td>
                                    <td className="fuente-2">{registro.cara}</td>
                                    <td className="fuente-2">{registro.diagnostico}</td>
                                    <td className="fuente-2">{registro.procedimiento}</td>
                        
                                    <td ><button type="button" className="btn btn-danger">Eliminar</button></td>
                                </tr>
                                
                            </>
                            )
                            
                        })}
                    
                    </tbody>
                </table>
                <button className='btn color-1 mt-3 text-white' onClick={handleOnClick} data-bs-dismiss="modal" aria-label="Close">Confirmar </button>
            </div>
        </div>
    )
}
