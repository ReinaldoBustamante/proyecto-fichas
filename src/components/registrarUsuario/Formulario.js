import React from 'react'
import { useHistory } from "react-router-dom";
import Axios from 'axios'
import Swal from 'sweetalert2'



export const Formulario = (props) => {

    const {usuario, setusuario} = props
    console.log(usuario)
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
        if (usuario.rol === '' || usuario.username === ''|| usuario.password=== '' || usuario.nombre === ''|| usuario.rut=== '' || usuario.correo=== '' || usuario.telefono === '' ){
            Toast.fire({
                icon: 'error',
                title: 'Ingrese todos los campos'
            })
        }

        else if (usuario.rol === "odontologo"){

            //Registrar odontolgoo

            Axios.post('http://localhost:5000/odontologos',{
                nombre: usuario.nombre,
                rut: usuario.rut,
                telefono: usuario.telefono,
                correo: usuario.correo
            }).then((res) => {
                if(res.status === 200){
                    Axios.post('http://localhost:5000/usuarios',{
                        username: usuario.username,
                        password: usuario.password,
                        nombre: usuario.nombre,
                        rut: usuario.rut,
                        telefono: usuario.telefono,
                        correo: usuario.correo,
                        rol: usuario.rol
                    }).then((response) => {
                        if(response.status === 200){
                            Swal.fire(
                                'Usuario Registrado Correctamente!',
                                'Se registro el odontologo: '+usuario.username,
                                'success'
                              )
                            history.push('/registros-usuarios')
                        }
                    }).catch(err =>{
                        console.log(err)
                    })

                }
            }).catch(err => {
                console.log(err)
            }) 
        }
        else if(usuario.rol === "administrador"){
            Axios.post('http://localhost:5000/usuarios',{
                username: usuario.username,
                password: usuario.password,
                nombre: usuario.nombre,
                rut: usuario.rut,
                telefono: usuario.telefono,
                correo: usuario.correo,
                rol: usuario.rol
            }).then((response) => {
                if(response.status === 200){
                    Swal.fire(
                        'Usuario Registrado Correctamente!',
                        'Se registro el odontologo: '+usuario.username,
                        'success'
                      )
                    history.push('/registros-usuarios')
                }
            }).catch(err =>{
                console.log(err)
            })    
        }
        else if(usuario.rol === "tons"){
            //Registrar odontolgoo
            Axios.post('http://localhost:5000/tons',{
                nombre: usuario.nombre,
                rut: usuario.rut,
                telefono: usuario.telefono,
                correo: usuario.correo
            }).then((response) => {
                if(response.status === 200){
                    Axios.post('http://localhost:5000/usuarios',{
                        username: usuario.username,
                        password: usuario.password,
                        nombre: usuario.nombre,
                        rut: usuario.rut,
                        telefono: usuario.telefono,
                        correo: usuario.correo,
                        rol: usuario.rol
                    }).then((response) => {
                        if(response.status === 200){
                            Swal.fire(
                                'Usuario Registrado Correctamente!',
                                'Se registro el odontologo: '+usuario.username,
                                'success'
                              )
                            history.push('/registros-usuarios')
                        }
                    }).catch(err =>{
                        console.log(err)
                    })

                }
            }).catch(err => {
                console.log(err)
            })     
        }
        
    }

    return (
        <div className='container '>
            <form action='' onSubmit={ registrar } className='validated' >
                <div className='row mt-3 '>
                    <div className='col-12 form-floating'>
                        <input type='text' placeholder="Ingrese usuario" className='form-control' name='username' value={usuario.username} onChange={handleOnChange}/>
                        <label className="label-edit " for ="1"> Ingrese usuario</label>
                    </div>
                    <div className='col-12 mt-3 form-floating'>
                        <input type='text' placeholder="Ingrese contraseña" className='form-control' name='password' value={usuario.password} onChange={handleOnChange}/>
                        <label className="label-edit " for ="1"> Ingrese contraseña</label>
                    </div>
                    
                    <div className='col-12 mt-3 form-floating'>
            
                        <input type='text' placeholder="Ingrese nombre" className='form-control' name='nombre' value={usuario.nombre} onChange={handleOnChange}/>
                        <label className="label-edit " for ="1"> Ingrese nombre</label>
                    </div>
                    <div className='col-12 mt-3 form-floating'>

                        <input type='text' className='form-control' placeholder="Ingrese rut" name='rut' value={usuario.rut} onChange={handleOnChange}/>
                        <label className="label-edit " for ="1"> Ingrese rut</label>
                    </div>
                    <div className='col-12 mt-3  form-floating'>
            
                        <input type='text' className='form-control' name='correo' placeholder="Ingrese correo" value={usuario.correo} onChange={handleOnChange}/>
                        <label className="label-edit " for ="1"> Ingrese correo</label>
                    </div>

                    <div className='col-12 mt-3  form-floating'>
                
                        <input type='text' id="1" className='form-control fuente-2' name='telefono'placeholder="Ingrese telefono" value={usuario.telefono} onChange={handleOnChange}/>
                        <label className="label-edit " for ="1"> Ingrese telefono</label>
                    </div>

                    <div className='col-12 mt-3  form-floating'>
                    
                    <select className="form-select titulos form-control" name='rol' onChange={ handleOnChange }>
                        <option value="administrador" className="fuente-2">Administrador</option>
                        <option value="odontologo" className="fuente-2">Odontologo</option>
                        <option value="tons" className="fuente-2">Tons</option>
                    </select>
                    <label value='' className="label-edit">Seleccione el rol del usuario</label>
                    </div> 
                    
                </div>
                <div className='row mt-3'>
                    <div className='col d-grid'>
                        <button type='submit' className='btn boton '>Registrar Usuario</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
