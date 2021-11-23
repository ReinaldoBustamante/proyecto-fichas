import React, { useEffect, useState } from 'react'
import Axios from 'axios'
//import Swal from 'sweetalert2'

export const Tabla = () => {

    const [pacientes, setPacientes] = useState([])
    const [carga, setcarga] = useState(0)
    useEffect(() => {
        Axios.get('https://api-rest-fedent.herokuapp.com/pacientes').then( (response) =>{
        setPacientes(response.data)
        })
        console.log("montado")
    }, [carga])
    
    const handleOnClick = (e) => {
        console.log(e.target.id)
        Axios.delete(`https://api-rest-fedent.herokuapp.com/pacientes/${e.target.id}`)
        .then(res => {
            if(res.status === 200){
                console.log(res)
                setcarga(carga+1)
            }
        })
        
    }


    return (
        <div className="mt-5">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Rut</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Domicilio</th>
                    <th scope="col">Telefono</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map( (paciente, i) => {
                        return (
                        <>
                            <tr key = {i}>
                                <td >{paciente.rut}</td>
                                <td >{paciente.nombre}</td>
                                <td >{paciente.domicilio}</td>
                                <td>{paciente.telefono}</td>
                                <td><button type="button" className="btn btn-danger" id={paciente.id_paciente} onClick ={handleOnClick} >Eliminar</button></td>
                            </tr>
                            
                        </>
                        )
                        
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}
