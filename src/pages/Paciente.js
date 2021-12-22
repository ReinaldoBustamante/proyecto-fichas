import React, { useState, useEffect } from 'react'
import Axios from "axios"

import { DatosPersonales } from '../components/pacientes/DatosPersonales';
import { useParams } from 'react-router-dom';
import { Ficha } from '../components/pacientes/Ficha';
import { Historial } from '../components/pacientes/Historial';
import { Odontograma } from '../components/pacientes/Odontograma';

export const Paciente = (props) => {
    const [historial, sethistorial] = useState([])
    const { rut } = useParams()
    const [paciente, setpaciente] = useState("")

    useEffect(() => {
        Axios.get(`https://api-rest-cfedent.herokuapp.com/pacientes/${rut}`).then( (response) =>{
            if(response.status === 200){
                setpaciente(response.data[0])
            }   
        })
    }, [])
    
    
    return (
        <div className='container-flush' >
            <div className = "row">
                <div className="col-12">
                    <DatosPersonales paciente = {paciente} params = {rut}/>
                </div>
            </div>
            <div className="row d-flex mt-2 ">
                <ul className="nav nav-pills mt-2 mb-2 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item " role="presentation">
                            <button className="btn b-ficha bg-menu  text-white active" id="pills-ficha-tab" data-bs-toggle="pill" data-bs-target="#pills-ficha" type="button" role="tab" aria-controls="pills-ficha" aria-selected="false">Ficha Clinica</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="btn b-historial bg-menu text-white" id="pills-historial-tab" data-bs-toggle="pill" data-bs-target="#pills-historial" type="button" role="tab" aria-controls="pills-historial" aria-selected="false">Historial Clinico</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="btn b-odontograma bg-menu text-white" id="pills-odontograma-tab" data-bs-toggle="pill" data-bs-target="#pills-odontograma" type="button" role="tab" aria-controls="pills-odontograma" aria-selected="false">Seguimiento Pieza</button>
                        </li>
                    
                    
                </ul>
                
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-ficha" role="tabpanel" aria-labelledby="pills-ficha-tab"><Ficha rut={rut} paciente={paciente}/></div>
                <div className="tab-pane fade" id="pills-historial" role="tabpanel" aria-labelledby="pills-historial-tab"><Historial rut ={rut} historial={historial} sethistorial={sethistorial}/></div>
                <div className="tab-pane fade" id="pills-odontograma" role="tabpanel" aria-labelledby="pills-odontograma-tab"><Odontograma rut={rut} historial={historial}/></div>
            </div>
           
            
            
        </div>
    )
}
