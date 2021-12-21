import React, { useEffect, useState } from 'react'
import Axios from 'axios'
//import Swal from 'sweetalert2'

export const Tabla = () => {

    const [pacientes, setPacientes] = useState([])
    const [carga, setcarga] = useState(0)
    useEffect(() => {
        Axios.get('https://api-rest-cfedent.herokuapp.com/pacientes').then( (response) =>{
        setPacientes(response.data)
        })
    }, [carga])
    
    const handleOnClick = (e) => {
        Axios.delete(`https://api-rest-cfedent.herokuapp.com/fichas/${e.target.value}`)
        .then(res => {
            if(res.status === 200){
                Axios.delete(`https://api-rest-cfedent.herokuapp.com/historiales-clinicos/${e.target.value}`)
                .then(res => {
                    if(res.status === 200){
                        Axios.delete(`https://api-rest-cfedent.herokuapp.com/pacientes/${e.target.value}`)
                        .then(res => {
                            if(res.status === 200){
                                console.log("se elimino correctamente")
                                setcarga(carga+1)
                            }
                        })
                        setcarga(carga+1)
                    }
                })
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
                        
                            <tr key={i}>
                                <td >{paciente.rut}</td>
                                <td >{paciente.nombre}</td>
                                <td >{paciente.domicilio}</td>
                                <td>{paciente.telefono}</td>
                                <td><button type="button" className="btn btn-danger" value={paciente.rut} onClick ={handleOnClick} >Eliminar</button></td>
                            </tr>
                            
                        )
                        
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}
