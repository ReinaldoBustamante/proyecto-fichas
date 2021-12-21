import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

export const BuscarPaciente = (props) => {
    const [rut, setrut] = useState('')
   
    let history = useHistory()

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleOnChange = (e) =>{
        setrut(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        Axios.get(`http://localhost:5000/pacientes/${rut}`).then( (response) => {
            if (response.data.length !== 0){
                Swal.fire(
                    'Usuario Encontrado',
                    'Se encontro el usuario: '+response.data[0].nombre,
                    'success'
                )
                history.push(`/paciente/${rut}`)
           }
            else{
                Toast.fire({
                    icon: 'error',
                    title: 'No se encontro el rut: '+rut
                })
            }
        })
       
    }
    




    
    return (
            <div className="">
                
                <form action='' onSubmit={handleOnSubmit}> 

                    <div className='row mt-3'> 
                        <div className="d-flex justify-content-center">
                            <div className="col-12 form-floating tamaño">
                                <div className="titulos">Buscador Paciente</div>
                            </div>
                        </div>  
                    </div> 

                    <div className='row mt-3'> 
                        <div className="d-flex justify-content-center">
                            <div className="col-12 form-floating tamaño">
                                <input type="text " className="form-control " id="rut" name='rut' placeholder="Rut paciente" onChange={handleOnChange} value={rut} required />
                                <label className="label-edit">Rut paciente</label>
                            </div>
                        </div>  
                    </div> 

                    <div className='row mt-1'> 
                        <div className="d-flex justify-content-center form-group">
                            <div className="col-12 form-floating tamaño d-grid">
                                <button className="btn boton ">Buscar</button>
                            </div>
                        </div>  
                    </div>    
                </form>
            </div>
            
            
     
    )
}
