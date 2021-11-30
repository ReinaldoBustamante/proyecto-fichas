import React from 'react'
import "../../../../index.css"
import { CualProblemaHepatico } from '../inputs/CualProblemaHepatico'
import { CuantosFuma } from '../inputs/CuantosFuma'
import { DeCuantosMeses } from '../inputs/DeCuantosMeses'
import { Epileptico } from '../inputs/Epileptico'
import { EstaEmbarazada } from '../inputs/EstaEmbarazada'
import { FueOperado } from '../inputs/FueOperado'
import { Fuma } from '../inputs/Fuma'
import { Hepatitis } from '../inputs/Hepatitis'
import { MedicamentoEpilepcia } from '../inputs/MedicamentoEpilepcia'
import { OperadoDe } from '../inputs/OperadoDe'
import { ProblemaHepatico } from '../inputs/ProblemaHepatico'
import { ProblemasRespiratorios } from '../inputs/ProblemasRespiratorios'
import { QueProblemaRespiratorio } from '../inputs/QueProblemaRespiratorio'
import { TienePresionAlta } from '../inputs/TienePresionAlta'
import { TipoHepatitis } from '../inputs/TipoHepatitis'
import { TratamientoPresion } from '../inputs/TratamientoPresion'

export const SeccionDos = (props) => {
  
    const {setseccion, seccion, fichaPaciente, setfichaPaciente} = props


    const cambioSeccion = () => {
        setseccion(seccion+1)
    }

    return (
        <div className="mt-4 ">
            <div className="row ">
                <div className="d-flex align-items-center ">
                    <div className="col-2">
                        <TienePresionAlta fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <TratamientoPresion fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-2 p-f">
                        <Hepatitis fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <TipoHepatitis fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="d-flex align-items-center ">
                    <div className="col-2">
                        <ProblemaHepatico fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <CualProblemaHepatico fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-2 p-f">
                        <Epileptico fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <MedicamentoEpilepcia fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="d-flex align-items-center ">
                    <div className="col-2">
                        <ProblemasRespiratorios fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <QueProblemaRespiratorio fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-2 p-f">
                        <Fuma fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <CuantosFuma fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                   
                </div>
            </div>
            <div className="row mt-3">
                <div className="d-flex align-items-center ">
                    <div className="col-2">
                        <EstaEmbarazada fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <DeCuantosMeses fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-2 p-f">
                        <FueOperado fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <OperadoDe fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    
                   
                </div>
            </div>
            
            
            

            <div className= "col-12 d-flex justify-content-end mt-3">
                <button type="button" className= "btn btn-primary" onClick={cambioSeccion} >Siguiente</button>
            </div>
        
        </div>
        
    )
}