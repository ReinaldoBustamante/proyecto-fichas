import React from 'react'
import { useHistory } from "react-router-dom";
import { DatosPersonales } from '../components/pacientes/DatosPersonales';
import { Tabs } from '../components/pacientes/Tabs';

export const Paciente = (props) => {
    let history = useHistory()
    const {paciente} = props
    console.log(paciente)

    const handleOnCLick = (e) => {
        if(e.target.name === "ficha"){
            history.push("/ficha-clinica")
        }
        if(e.target.name === "archivo"){
            history.push("/archivos")
        }
        if(e.target.name === "editar-paciente"){
            history.push("/editar-paciente")
        }
    }

    return (
        <div className='container-fluid mt-5 pad'>
            <div className = "row">
                <div className="col">
                    <DatosPersonales paciente = {paciente}/>
                </div>
                <div className="col">
                    <Tabs />
                </div>
            </div>
                
            
            
        </div>
    )
}
