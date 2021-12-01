import React, { useEffect, useState } from 'react'
import Axios from "axios"
import Swal from 'sweetalert2'
export const Tabla = () => {
    
    const [usuarios, setUsuarios] = useState([])
    const [carga, setcarga] = useState(0)
    

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

    useEffect(() => {
        Axios.get('https://api-rest-cfedent.herokuapp.com/usuarios').then( (response) =>{
            setUsuarios(response.data)
        })
        console.log("montado")
    }, [carga])

    const handleOnClick = (e) => {
        if(e.target.name === "administrador" || e.target.name === "Administrador"){
            Toast.fire({
                icon: 'error',
                title: 'No se puede eliminar un perfil administrador'
            })
        }
        else if(e.target.name ==="odontologo"){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Axios.delete(`https://api-rest-cfedent.herokuapp.com/odontologos/${e.target.value}`)
                    .then(res => {
                        if(res.status === 200){
                            Axios.delete(`https://api-rest-cfedent.herokuapp.com/usuarios/${e.target.value}`)
                            .then(res => {
                                if(res.status === 200){
                                    Toast.fire({
                                        icon: 'success',
                                        title: 'Signed in successfully'
                                    })
                                    setcarga(carga+1)
                                }
                            })
                        }
                    })
                }
            })
        }
        else if(e.target.name==="tons"){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Axios.delete(`https://api-rest-cfedent.herokuapp.com/tons/${e.target.value}`)
                    .then(res => {
                        if(res.status === 200){
                            Axios.delete(`https://api-rest-cfedent.herokuapp.com/usuarios/${e.target.value}`)
                            .then(res => {
                                if(res.status === 200){
                                    Toast.fire({
                                        icon: 'success',
                                        title: 'Signed in successfully'
                                    })
                                    setcarga(carga+1)
                                }
                            })
                        }
                    })
                }
            })
        }

    
    }

    return (
        <div className= "mt-5">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Usuario</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Rut</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Rol</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map( (usuario, i) => {
                        return (
                        <>
                            <tr key = {i}>
                                <td >{usuario.username}</td>
                                <td >{usuario.nombre}</td>
                                <td >{usuario.rut}</td>
                                <td >{usuario.correo}</td>
                                <td >{usuario.rol}</td>
                                <td><button type="button" className="btn btn-danger" name ={usuario.rol} value={usuario.rut} onClick={handleOnClick} >Eliminar</button></td>
                            </tr>
                            
                        </>
                        )
                        
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}
