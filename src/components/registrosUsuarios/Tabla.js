import React, { useEffect, useState } from 'react'
import Axios from "axios"
export const Tabla = () => {
    
    const [usuarios, setUsuarios] = useState([])
    const [carga, setcarga] = useState(0)
    useEffect(() => {
        Axios.get('https://api-rest-fedent.herokuapp.com/usuarios').then( (response) =>{
            setUsuarios(response.data)
        })
        console.log("montado")
    }, [carga])

    const handleOnClick = (e) => {
        console.log(e.target)
     
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
                                <td><button type="button" className="btn btn-danger" id={usuario.id_usuario} rut = {usuario.rut} onClick={handleOnClick} >Eliminar</button></td>
                            </tr>
                            
                        </>
                        )
                        
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}
