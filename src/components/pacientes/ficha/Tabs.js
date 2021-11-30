import React, { useState } from 'react'
import { SeccionDos } from './secciones/SeccionDos'
import { SeccionTres } from './secciones/SeccionTres'
import { SeccionUno } from './secciones/SeccionUno'
import "../../../index.css"
export const Tabs = (props) => {
    const [seccion, setseccion] = useState(1)
    const {rut} = props

    const [fichaPaciente, setfichaPaciente] = useState({
        padre_con_vida: 0, //
        enfermedad_padre: "", //
        madre_con_vida: 0, //
        enfermedad_madre: "",//
        paciente_enfermo: 0, //
        tratamiento_paciente:"", //
        medicamentos:"", //
        medicamentos_cinco_años:"", //
        alergico_droga_alimento:0, //
        que_droga_alimento:"",  //
        cicatriza_bien:"", //
        tiene_fiebre_reumatica:0, //
        tratamiento_fiebre_reumatica:"",//
        diabetico:0,//
        diabetes_controlada_con: "",//
        problema_cardiaco:0,//
        que_problema_cardiaco:"",//
        toma_seguido_aspirina:0, //
        frecuencia:"", //
        tiene_presion_alta:0, //
        tratamiento_presion:"", //
        problemas_renales:0, //
        ulcera_gastrica:0,
        hepatitis:0, //
        tipo_hepatitis:"", //
        problema_hepatico:0, //
        cual_problema_hepatico:"", //
        convulsiones:0,
        epileptico:0, //
        medicamento_epilepcia:"", //
        fue_operado:0, //
        operado_de:"", //
        problemas_respiratorios:0, //
        que_problema_respiratorio:"", //
        fuma:0, //
        cuantos_fuma:0 , //
        esta_embarazada:0, //
        de_cuantos_meses:0, //
        constancia:0,
        que_constancia:""

    })
    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(fichaPaciente)
    }

    const handleOnClick = (e) => {
        if(e.target.id === "pills-seccionUno-tab"){
            setseccion(1)
        }
        if(e.target.id === "pills-seccionDos-tab"){
            setseccion(2)
        }
        if(e.target.id === "pills-seccionTres-tab"){
            setseccion(3)
        }
    }

    return (
        <div className="container ">
            <form onSubmit= {handleOnSubmit}>
            {seccion === 1 ?
            <div>
                <div className="row d-flex ">
                    <ul className="nav nav-pills mt-2 mb-2 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button onClick={handleOnClick} className="tab-nav-active btn" id="pills-seccionUno-tab" data-bs-toggle="pill" data-bs-target="#pills-seccionUno" type="button" role="tab" aria-controls="pills-SeccionUno" aria-selected="false">1</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button onClick={handleOnClick} className=" btn tab-nav-disabled" disabled id="pills-seccionDos-tab" data-bs-toggle="pill" data-bs-target="#pills-seccionDos" type="button" role="tab" aria-controls="pills-seccionDos" aria-selected="false">2</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button onClick={handleOnClick} className="btn tab-nav-disabled" disabled id="pills-seccionTres-tab" data-bs-toggle="pill" data-bs-target="#pills-seccionTres" type="button" role="tab" aria-controls="pills-seccionTres" aria-selected="false">3</button>
                        </li>
                       
                    </ul>
                
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-seccionUno" role="tabpanel" aria-labelledby="pills-seccionUno-tab"><SeccionUno setseccion = {setseccion} seccion = {seccion} fichaPaciente = {fichaPaciente} setfichaPaciente = {setfichaPaciente}/></div>
                    <div className="tab-pane fade" id="pills-seccionDos" role="tabpanel" aria-labelledby="pills-seccionDos-tab"><SeccionDos setseccion = {setseccion} seccion = {seccion} fichaPaciente = {fichaPaciente} setfichaPaciente = {setfichaPaciente}/></div>
                    <div className="tab-pane fade" id="pills-seccionTres" role="tabpanel" aria-labelledby="pills-seccionTres-tab"><SeccionTres setseccion = {setseccion} seccion = {seccion} fichaPaciente = {fichaPaciente} setfichaPaciente = {setfichaPaciente}/></div>
                </div>
            </div>
            :
            seccion === 2 ?
            <div>
                <div className="row d-flex ">
                    <ul className="nav nav-pills mt-2 mb-2 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button onClick={handleOnClick} className="tab-nav-rellenado btn" id="pills-seccionUno-tab" data-bs-toggle="pill" data-bs-target="#pills-seccionUno" type="button" role="tab" aria-controls="pills-SeccionUno" aria-selected="false">1</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button onClick={handleOnClick} className="tab-nav-active btn" disabled id="pills-seccionDos-tab" data-bs-toggle="pill" data-bs-target="#pills-seccionDos" type="button" role="tab" aria-controls="pills-seccionDos" aria-selected="false">2</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button onClick={handleOnClick} className="btn tab-nav-disabled" disabled id="pills-seccionTres-tab" data-bs-toggle="pill" data-bs-target="#pills-seccionTres" type="button" role="tab" aria-controls="pills-seccionTres" aria-selected="false">3</button>
                        </li>
                    </ul>
                
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade" id="pills-seccionUno" role="tabpanel" aria-labelledby="pills-seccionUno-tab"><SeccionUno setseccion = {setseccion} seccion = {seccion} fichaPaciente = {fichaPaciente} setfichaPaciente = {setfichaPaciente}/></div>
                    <div className="tab-pane fade show active" id="pills-seccionDos" role="tabpanel" aria-labelledby="pills-seccionDos-tab"><SeccionDos setseccion = {setseccion} seccion = {seccion} fichaPaciente = {fichaPaciente} setfichaPaciente = {setfichaPaciente}  /></div>
                    <div className="tab-pane fade" id="pills-seccionTres" role="tabpanel" aria-labelledby="pills-seccionTres-tab"><SeccionTres setseccion = {setseccion} seccion = {seccion} fichaPaciente = {fichaPaciente} setfichaPaciente = {setfichaPaciente}  /></div>
                </div>
            </div>
            :
            <div>
                <div className="row d-flex ">
                    <ul className="nav nav-pills mt-2 mb-2 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button onClick={handleOnClick} className="tab-nav-rellenado btn" id="pills-seccionUno-tab" data-bs-toggle="pill" data-bs-target="#pills-seccionUno" type="button" role="tab" aria-controls="pills-SeccionUno" aria-selected="false">1</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button onClick={handleOnClick} className="tab-nav-rellenado btn" id="pills-seccionDos-tab" data-bs-toggle="pill" data-bs-target="#pills-seccionDos" type="button" role="tab" aria-controls="pills-seccionDos" aria-selected="false">2</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button onClick={handleOnClick} className="btn tab-nav-active" disabled id="pills-seccionTres-tab" data-bs-toggle="pill" data-bs-target="#pills-seccionTres" type="button" role="tab" aria-controls="pills-seccionTres" aria-selected="false">3</button>
                        </li>
                      
                    </ul>
                
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade" id="pills-seccionUno" role="tabpanel" aria-labelledby="pills-seccionUno-tab"><SeccionUno setseccion = {setseccion} seccion = {seccion} fichaPaciente = {fichaPaciente} setfichaPaciente = {setfichaPaciente}/></div>
                    <div className="tab-pane fade" id="pills-seccionDos" role="tabpanel" aria-labelledby="pills-seccionDos-tab"><SeccionDos setseccion = {setseccion} seccion = {seccion} fichaPaciente = {fichaPaciente} setfichaPaciente = {setfichaPaciente}/></div>
                    <div className="tab-pane fade show active" id="pills-seccionTres" role="tabpanel" aria-labelledby="pills-seccionTres-tab"><SeccionTres setseccion = {setseccion} seccion = {seccion}  fichaPaciente = {fichaPaciente} setfichaPaciente = {setfichaPaciente}/></div>
                </div>
            </div>
            
            }
            
            
            </form>
            
        </div>
    )
}
