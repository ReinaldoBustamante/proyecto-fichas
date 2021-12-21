import React, { useEffect, useState } from 'react'

import Axios from "axios"
import Moment from "moment"
import { Seguimiento } from './odontograma/Seguimiento'

export const Odontograma = (props) => {
    const {rut ,carga, setcarga} = props
    const [buscarPieza, setbuscarPieza] = useState("")
    const [piezaRegistro, setpiezaRegistros] = useState("")
    const [seguimiento, setseguimiento] = useState("")

   

    useEffect(() => {
        Axios.get(`http://localhost:5000/piezas/${rut}`).then( (response) =>{
            setpiezaRegistros(response.data)
            
        })
       
        
    
    }, [carga])
    
   const handleOnClick = (e) =>{
    setcarga(carga+1)
    }

    const handleOnChange = (e) =>{
        setbuscarPieza(e.target.value)
    }


    
   
    

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        Axios.get(`http://localhost:5000/piezas/${rut}/${buscarPieza}`).then( (response) =>{
            setseguimiento(response.data)
        })
  
    }
    
    return (
        <div className="">
                
                <form action='' onSubmit={handleOnSubmit}> 

                    <div className='row mt-3'> 
                        <div className="d-flex justify-content-center">
                            <div className="col-6 form-floating tamaño ">
                                <div className="titulos text-center">Seguimiento de pieza  </div>
                            </div>
                        </div>  
                    </div> 

                    <div className='row mt-3'> 
                        <div className="d-flex justify-content-center">
                            <div className="col-12 tamaño">

                            {
                                
                                piezaRegistro[0] === undefined? 
                                <div>
                                    <div className="alert alert-warning">No se han encontrado piezas</div>
                                    <div className="d-flex justify-content-center form-group">
                                        <div className="col-12 form-floating tamaño d-grid">
                                            <button className="btn boton " onClick={handleOnClick}>Recargar</button>
                                        </div>
                                    </div> 
                                </div>  
                                :    
                                <div>
                                <select class="form-select" size="5" aria-label="size 3 select example" onChange={handleOnChange}>
                                <option selected>Seleccione pieza</option>
                                {
                                piezaRegistro[0] === undefined?
                                
                                ""
                                :
                                piezaRegistro.map((r,i) =>{
                                    return <option key={i} value={r.pieza}>{r.pieza}</option>
                                })
                                }
                                </select>
                                    <div className="d-flex justify-content-center form-group">
                                        <div className="col-12 form-floating tamaño d-grid">
                                            <button className="btn boton ">Buscar</button>
                                        </div>
                                    </div>  
                                </div> 
                                

                                
                                

                            }

                            
                            </div>
                        </div>  
                    </div> 


                </form>

               <Seguimiento seguimiento={seguimiento} />

            </div>
        
    )
}
