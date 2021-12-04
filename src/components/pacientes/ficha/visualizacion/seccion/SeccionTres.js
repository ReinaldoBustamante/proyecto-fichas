import React from 'react'
import { Constancia } from '../Constancia'
import { CuantosFuma } from '../CuantosFuma'
import { DeCuantosMeses } from '../DeCuantosMeses'
import { EstaEmbarazada } from '../EstaEmbarazada'
import { Fuma } from '../Fuma'
import { ProblemasRespiratorio } from '../ProblemasRespiratorio'
import { QueConstancia } from '../QueConstancia'
import { QueProblemaRespiratorio } from '../QueProblemaRespiratorio'
import { UlceraGastrica } from '../UlceraGastrica'


export const SeccionTres = (props) => {
    const {datosFicha} = props
    
    //filtrar campos verdaderos
   
    return (
        <div class="border-c card">
            <div class="card-header  text-center"><span>ID: </span>{datosFicha.rut}</div>
            <div class="card-body">

                <div className="row d-flex">
                    <div className="col-3">
                        <ProblemasRespiratorio datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <QueProblemaRespiratorio datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <Fuma datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <CuantosFuma datosFicha= {datosFicha} />
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-3">
                        <EstaEmbarazada datosFicha = {datosFicha} />                    
                    </div>
                    <div className="col-3">
                        <DeCuantosMeses datosFicha = {datosFicha} />                    
                    </div>
                    <div className="col-3">
                        <UlceraGastrica datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <Constancia datosFicha= {datosFicha} />
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-12">
                        <QueConstancia datosFicha= {datosFicha} />
                    </div>
                    
                </div>

              

                
            </div>
        </div>
        
    )
}