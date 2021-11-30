import React from 'react'
import { useHistory } from "react-router-dom";
import { DatosPersonales } from '../components/pacientes/DatosPersonales';
import { useParams } from 'react-router-dom';
import { Ficha } from '../components/pacientes/Ficha';
import { Historial } from '../components/pacientes/Historial';
import { Odontograma } from '../components/pacientes/Odontograma';

export const Paciente = (props) => {
    let history = useHistory()
    const { rut } = useParams()
    const {paciente} = props


    return (
        <div className='container-flush' >
            <div className = "row">
                <div className="col-12">
                    <DatosPersonales paciente = {paciente} params = {rut}/>
                </div>
            </div>
            <div className="row d-flex ">
                <ul className="nav nav-pills mt-2 mb-2 justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-ficha-tab" data-bs-toggle="pill" data-bs-target="#pills-ficha" type="button" role="tab" aria-controls="pills-ficha" aria-selected="false">Ficha Clinica</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-historial-tab" data-bs-toggle="pill" data-bs-target="#pills-historial" type="button" role="tab" aria-controls="pills-historial" aria-selected="false">Historial Clinico</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-odontograma-tab" data-bs-toggle="pill" data-bs-target="#pills-odontograma" type="button" role="tab" aria-controls="pills-odontograma" aria-selected="false">Odontograma</button>
                    </li>
                </ul>
                
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-ficha" role="tabpanel" aria-labelledby="pills-ficha-tab"><Ficha rut={rut} /></div>
                <div className="tab-pane fade" id="pills-historial" role="tabpanel" aria-labelledby="pills-historial-tab"><Historial rut ={rut}/></div>
                <div className="tab-pane fade" id="pills-odontograma" role="tabpanel" aria-labelledby="pills-odontograma-tab"><Odontograma rut={rut} /></div>
            </div>
           
            
            
        </div>
    )
}
