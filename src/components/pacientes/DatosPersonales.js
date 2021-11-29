import React, { useEffect, useState } from 'react'
import Axios from 'axios'
export const DatosPersonales = (props) => {
    const {params} = props
    const [paciente, setDatosPaciente] = useState("")
    useEffect(() => {
        Axios.get(`https://api-rest-fedent.herokuapp.com/pacientes/${params}`).then( (response) =>{
            if (response.data.length !== 0){
                setDatosPaciente(response.data[0])
            }
        })
    }, [])
        
    
    
    
    return (
        <div>
            {paciente === "" ?
            ""
            :
            <div className="text-white color-1 mb-3">
            <div className="card-header text-center"><span className="h4">{paciente.nombre}</span></div>
                <div className="card-body card-text">
                    <div className= "row mt-1">
                        <div className="col">
                            <span className="h4">ID: <span className="h5">{paciente.rut}</span></span>
                        </div>
                        <div className="col">
                            <span className="h4">Edad: <span className="h5">{paciente.edad}</span></span>
                        </div>
                        <div className="col">
                            <span className="h4">Sexo: <span className="h5">{paciente.sexo}</span></span>
                        </div>
                    </div>
                    <div className= "row mt-1">
                        <div className="col">
                            <span className="h4">Telefono: <span className="h5">{paciente.telefono}</span></span>
                        </div>
                        <div className="col">
                            <span className="h4">Celular: <span className="h5">{paciente.celular}</span></span>
                        </div>
                        <div className="col">
                            <span className="h4">Estado Civil: <span className="h5">{paciente.estado_civil}</span></span>
                        </div>
                    </div>
                    <div className= "row mt-1">
                        <div className="col">
                            <span className="h4">Domicilio: <span className="h5">{paciente.domicilio}</span></span>
                        </div>
                        <div className="col">
                            <span className="h4">Profesion: <span className="h5">{paciente.profesion}</span></span>
                        </div>
                        <div className="col">
                            <span className="h4">Trabaja en: <span className="h5">{paciente.lugar_trabajo}</span></span>
                        </div>
                    </div>
                        
                        
                        

            </div>
        </div>
            }
        </div>
        
        
        
         
    )
}
