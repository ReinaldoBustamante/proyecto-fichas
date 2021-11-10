import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom";

export const BuscarPaciente = (props) => {
    const {setpaciente} = props
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
                setpaciente(response.data[0])
                Swal.fire(
                    'Usuario Encontrado',
                    'Se encontro el usuario: '+response.data[0].nombre,
                    'success'
                )
                history.push('/paciente')
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
        <div className='container'>

            <div className='row mt-4'>
                <div className='col'>
                <div className="card shadow">
                        <div className="card-header">Buscar Paciente</div>
                        <div className="card-body d-grid">
                        <form action='' onSubmit={handleOnSubmit}>
                            <div className="form-group row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Rut Paciente:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="rut" name='rut' placeholder="Ingrese su rut" onChange={handleOnChange} value={rut} required />
                                </div>
                            </div>
                            <div className='row m-1'>
                                <button type='submit' className='btn btn-primary'>Buscar</button>
                            </div>
                        </form>
                        
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
