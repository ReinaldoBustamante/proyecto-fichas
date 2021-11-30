import React from 'react'
import "../../../../index.css"
import { AlergicoDrograAlimento } from '../inputs/AlergicoDrograAlimento'
import { DiabetesControladaCon } from '../inputs/DiabetesControladaCon'
import { Diabetico } from '../inputs/Diabetico'
import { EnfermedadMadre } from '../inputs/EnfermedadMadre'
import { EnfermedadPadre } from '../inputs/EnfermedadPadre'
import { Frecuencia } from '../inputs/Frecuencia'
import { MadreConVida } from '../inputs/MadreConVida'
import { PacienteEnfermo } from '../inputs/PacienteEnfermo'
import { PadreConVida } from '../inputs/PadreConVida'
import { ProblemaCardiaco } from '../inputs/ProblemaCardiaco'
import { QueDrogaAlimento } from '../inputs/QueDrogaAlimento'
import { QueProblemaCardiaco } from '../inputs/QueProblemaCardiaco'
import { TieneFiebreReumatica } from '../inputs/TieneFiebreReumatica'
import { TomaSeguidoAspirina } from '../inputs/TomaSeguidoAspirina'
import { TratamientoFiebreReumatica } from '../inputs/TratamientoFiebreReumatica'
import { TratamientoPaciente } from '../inputs/TratamientoPaciente'

export const SeccionUno = (props) => {
    const {setseccion, seccion, fichaPaciente, setfichaPaciente} = props


    const cambioSeccion = () => {
        setseccion(seccion+1)
    }

    return (
        <div className="mt-4 ">
            <div className="row ">
                <div className="d-flex align-items-center ">
                    <div className="col-2">
                        <PadreConVida fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <EnfermedadPadre fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente} />
                    </div>
                    <div className="col-2 p-f">
                        <MadreConVida  fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <EnfermedadMadre fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente} />
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="d-flex align-items-center ">
                    <div className="col-2">
                        <PacienteEnfermo fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <TratamientoPaciente fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-2 p-f">
                        <AlergicoDrograAlimento fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <QueDrogaAlimento fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="d-flex align-items-center ">
                    <div className="col-2">
                        <TieneFiebreReumatica fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <TratamientoFiebreReumatica fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-2 p-f">
                        <Diabetico fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <DiabetesControladaCon fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                  
                </div>
            </div>

            <div className="row mt-3">
                <div className="d-flex align-items-center ">
                    <div className="col-2">
                        <ProblemaCardiaco fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4 ">
                        <QueProblemaCardiaco fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-2 p-f">
                        <TomaSeguidoAspirina fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-4">
                        <Frecuencia fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                </div>
            </div>
            
            
            
            
            <div className= "col-12 d-flex justify-content-end mt-3">
                <button type="button" className= "btn btn-primary" onClick={cambioSeccion} >Siguiente</button>
            </div>
        
        </div>
        
    )
}
