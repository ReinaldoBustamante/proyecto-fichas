import React from 'react'
import { CicatrizaBien } from '../inputs/CicatrizaBien'
import { Constancia } from '../inputs/Constancia'
import { Convulsiones } from '../inputs/Convulsiones'
import { Medicamentos } from '../inputs/Medicamentos'
import { MedicamentosCincoAños } from '../inputs/MedicamentosCincoAños'
import { ProblemasRenales } from '../inputs/ProblemasRenales'
import { QueConstancia } from '../inputs/QueConstancia'
import { UlceraGastrica } from '../inputs/UlceraGastrica'

export const SeccionTres = (props) => {
    const {setseccion, seccion, fichaPaciente, setfichaPaciente} = props


    return (
        <div className="mt-4 ">
            <div className="row ">
                <div className="d-flex align-items-center ">
                    <div className="col-6">
                        <Medicamentos fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-6 p-f">
                        <MedicamentosCincoAños fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="d-flex align-items-center ">
                    <div className="col-6">
                        <CicatrizaBien fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-2 p-f">
                        <ProblemasRenales fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-2 p-p">
                        <Convulsiones fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-2 ">
                        <UlceraGastrica fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    
                </div>
            </div>
            <div className="row mt-3">
                <div className="d-flex align-items-center ">
                    <div className="col-3">
                        <Constancia fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    <div className="col-9 p-f">
                        <QueConstancia fichaPaciente = {fichaPaciente} setfichaPaciente={setfichaPaciente}/>
                    </div>
                    
                    
                </div>
            </div>

            
            
            
            

            <div className= "col-12 d-flex justify-content-end mt-3">
                <button type="submit" className= "btn btn-primary" >Finalizar</button>
            </div>
        
        </div>
        
    )
}
    