import React, { useState } from 'react'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'
import { Formulario } from '../components/login/Formulario'
import '../../src/index.css'


export const Login = (props) => {

   
    const {loginStatus, setloginStatus, setusuario} = props
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
   
     
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
    
    const login = (e) => {
        e.preventDefault()
        Axios.post('http://127.0.0.1:5000/login', {
            username: username,
            password: password
        }).then((response)=>{
            if (response.data.Message){
                Toast.fire({
                    icon: 'error',
                    title: 'Credenciales Incorrectas'
                })
                setloginStatus(false)
                
            } else {
                setusuario({
                    nombre: response.data[0].nombre,
                    rut: response.data[0].rut,
                    correo: response.data[0].correo,
                    telefono: response.data[0].telefono,
                    rol: response.data[0].rol,
                    username: response.data[0].username
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Ha iniciado sesion correctamente'
                })
             
                setloginStatus(true)
            }
        })  
    }
    if(loginStatus){
        return <Redirect to='/' />
    }

    return (
        <div className='container-fluid fondo '>
            <div className='row '>
                <div className='col body'>
                   <form onSubmit={ login }>
                       <Formulario     
                        setusername={setusername}
                        setpassword={setpassword}
                       />
                       
                   </form>
                </div>
            </div>
            
        </div>
    )
}
