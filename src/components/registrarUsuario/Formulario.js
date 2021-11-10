import React from 'react'
import { useHistory } from "react-router-dom";
import Axios from 'axios'
import Swal from 'sweetalert2'



export const Formulario = (props) => {

    const {usuario, setusuario} = props

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
        if (e.target.name ==='rol'){
            setusuario({
                ...usuario,
                rol:e.target.value
            })
        }
        if (e.target.name ==='username'){
            setusuario({
                ...usuario,
                username:e.target.value
            })
        }
        if (e.target.name ==='password'){
            setusuario({
                ...usuario,
                password:e.target.value
            })
        }
        if (e.target.name ==='nombre'){
            setusuario({
                ...usuario,
                nombre:e.target.value
            })
        }
        if (e.target.name ==='rut'){
            setusuario({
                ...usuario,
                rut:e.target.value
            })
        }
        if (e.target.name ==='correo'){
            setusuario({
                ...usuario,
                correo:e.target.value
            })
        }
        if (e.target.name ==='telefono'){
            setusuario({
                ...usuario,
                telefono:e.target.value
            })
        }

        
    }

    const registrar = (e) =>{
        e.preventDefault()
        //REGISTRAR USUARIO
        if (usuario.rol === '' || usuario.username === ''|| usuario.password=== '' || usuario.nombre === ''|| usuario.rut=== '' || usuario.correo=== '' || usuario.telefono === '' ){
            Toast.fire({
                icon: 'error',
                title: 'Ingrese todos los campos'
            })
        }
        else{
            Axios.post('http://127.0.0.1:5000/register',{
                username: usuario.username,
                password: usuario.password,
                nombre: usuario.nombre,
                rut: usuario.rut,
                correo: usuario.correo,
                telefono: usuario.telefono,
                rol: usuario.rol
            }).then((response) => {
                console.log(response)
            })
            Swal.fire(
                'Usuario Registrado Correctamente!',
                'se registro el usuario: '+usuario.username,
                'success'
              )
            history.push('/')
        }
        
        //REGISTRAR ODONTOLOGO


        //REGISTRAR Tons
    }

    return (
        <div className='container'>
            <form action='' onSubmit={ registrar } className='validated' >
                <div className='row mt-3'>
                    <div className='col-12'>
                        <label htmlFor=''>Nombre de usuario: </label>
                        <input type='text' className='form-control' name='username' value={usuario.username} onChange={handleOnChange}/>
                    </div>
                    <div className='col-12 mt-3'>
                        <label htmlFor=''>Ingrese contraseña: </label>
                        <input type='text' className='form-control' name='password' value={usuario.password} onChange={handleOnChange}/>
                    </div>
                    
                    <div className='col-12 mt-3'>
                        <label htmlFor=''>Nombre: </label>
                        <input type='text' className='form-control' name='nombre' value={usuario.nombre} onChange={handleOnChange}/>
                    </div>
                    <div className='col-12 mt-3'>
                        <label htmlFor=''>Rut: </label>
                        <input type='text' className='form-control' name='rut' value={usuario.rut} onChange={handleOnChange}/>
                    </div>
                    <div className='col-12 mt-3'>
                        <label htmlFor=''>Correo: </label>
                        <input type='text' className='form-control' name='correo' value={usuario.correo} onChange={handleOnChange}/>
                    </div>
                    <div className='col-12 mt-3'>
                        <label htmlFor=''>Telefono: </label>
                        <input type='text' className='form-control' name='telefono' value={usuario.telefono} onChange={handleOnChange}/>
                    </div>

                    <div className='col-12 mt-3'>
                    <label>Rol</label>
                    <select className="form-select" name='rol' onChange={ handleOnChange }>
                        <option value=''>Seleccione el rol del usuario</option>
                        <option value="administrador">Administrador</option>
                        <option value="odontologo">Odontologo</option>
                        <option value="tons">Tons</option>
                    </select>
                    </div> 
                    
                </div>
                <div className='row mt-3'>
                    <div className='col d-grid'>
                        <button type='submit' className='btn btn-primary '>Registrar Usuario</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
