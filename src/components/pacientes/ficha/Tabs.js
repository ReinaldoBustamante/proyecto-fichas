import React, { useState } from 'react'
import Axios from "axios"
import { SeccionDos } from './secciones/SeccionDos'
import { SeccionTres } from './secciones/SeccionTres'
import { SeccionUno } from './secciones/SeccionUno'


import Swal from 'sweetalert2'
import "../../../index.css"
export const Tabs = (props) => {
  
    const [seccion, setseccion] = useState(1)
    const {rut, paciente, cargaPagina, setcargaPagina} = props
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    const hoy = fecha.getDate();
    const mesActual = fecha.getMonth() + 1; 
    const creacion_ficha = new Date(añoActual+"-"+mesActual+"-"+hoy)
    const nacimiento = paciente.fecha_nacimiento

    const [fichaPaciente, setfichaPaciente] = useState({
        padre_con_vida: 0, // *
        enfermedad_padre: "", // *
        madre_con_vida: 0, // *
        enfermedad_madre: "",// *
        paciente_enfermo: 0, // *
        tratamiento_paciente:"", // *
        medicamentos:"", // *
        medicamentos_cinco_años:"", // *
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
        ulcera_gastrica:0, //
        hepatitis:0, //
        tipo_hepatitis:"", //
        problema_hepatico:0, //
        cual_problema_hepatico:"", //
        convulsiones:0, //
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
        console.log("click")
        //posteo a api
        Axios.post('https://api-rest-cfedent.herokuapp.com/fichas',{
            rut: rut,
            fecha_nacimiento: nacimiento,
            fecha_ficha: creacion_ficha,
            padre_con_vida: fichaPaciente.padre_con_vida,
            enfermedad_padre: fichaPaciente.enfermedad_padre,
            madre_con_vida: fichaPaciente.madre_con_vida,
            enfermedad_madre: fichaPaciente.enfermedad_madre,
            paciente_enfermo: fichaPaciente.paciente_enfermo,
            tratamiento_paciente: fichaPaciente.tratamiento_paciente,
            medicamentos: fichaPaciente.medicamentos,
            medicamentos_cinco_años: fichaPaciente.medicamentos_cinco_años,
            alergico_droga_alimento: fichaPaciente.alergico_droga_alimento,
            que_droga_alimento: fichaPaciente.que_droga_alimento,
            cicatriza_bien: fichaPaciente.cicatriza_bien,
            tiene_fiebre_reumatica: fichaPaciente.tiene_fiebre_reumatica,
            tratamiento_fiebre_reumatica: fichaPaciente.tratamiento_fiebre_reumatica,
            diabetico: fichaPaciente.diabetico,
            diabetes_controlada_con: fichaPaciente.diabetes_controlada_con,
            problema_cardiaco: fichaPaciente.problema_cardiaco,
            que_problema_cardiaco:fichaPaciente.que_problema_cardiaco,
            toma_seguido_aspirina:fichaPaciente.toma_seguido_aspirina,
            frecuencia:fichaPaciente.frecuencia,
            tiene_presion_alta:fichaPaciente.tiene_presion_alta,
            tratamiento_presion:fichaPaciente.tratamiento_presion,
            problemas_renales:fichaPaciente.problemas_renales,
            ulcera_gastrica:fichaPaciente.ulcera_gastrica,
            hepatitis:fichaPaciente.hepatitis,
            tipo_hepatitis:fichaPaciente.tipo_hepatitis,
            problema_hepatico:fichaPaciente.problema_hepatico,
            cual_problema_hepatico:fichaPaciente.cual_problema_hepatico,
            convulsiones:fichaPaciente.convulsiones,
            epileptico:fichaPaciente.epileptico,
            medicamento_epilepcia:fichaPaciente.medicamento_epilepcia,
            fue_operado:fichaPaciente.fue_operado,
            operado_de:fichaPaciente.operado_de,
            problemas_respiratorios:fichaPaciente.problemas_respiratorios,
            que_problema_respiratorio:fichaPaciente.que_problema_respiratorio,
            fuma:fichaPaciente.fuma,
            cuantos_fuma:fichaPaciente.cuantos_fuma,
            esta_embarazada:fichaPaciente.esta_embarazada,
            de_cuantos_meses:fichaPaciente.de_cuantos_meses,
            constancia:fichaPaciente.constancia,
            que_constancia:fichaPaciente.que_constancia
            
            
        }).then((response) => {
            console.log("paso")
            if(response.status === 200){
                Swal.fire(
                    'Usuario Registrado Correctamente!',
                    'Se registro una ficha: ',
                    'success'
                )
                setcargaPagina(cargaPagina+1)
            }
        }).catch(err =>{
            console.log(err)
        })  
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
