import React from 'react'
import { PadreConVida } from '../PadreConVida'
import { FechaFicha } from '../FechaFicha'
import { FechaNacimiento } from '../FechaNacimiento'
import { EnfermedadPadre } from '../EnfermedadPadre'
import { MadreConVida } from '../MadreConVida'
import { EnfermedadMadre } from '../EnfermedadMadre'
import { PacienteEnfermo } from '../PacienteEnfermo'
import { EnfermedadPaciente } from '../EnfermedadPaciente'
import { Medicamentos } from '../Medicamentos'
import { MedicamentosCinco } from '../MedicamentosCinco'
import { Alergico } from '../Alergico'
import { QueDrogaAlimento } from '../QueDrogaAlimento'
import { CicatrizaBien } from '../CicatrizaBien'
import { FiebreReumatica } from '../FiebreReumatica'
import { TratamientoFiebreReumatica } from '../TratamientoFiebreReumatica'
import { ProblemasRenales } from '../ProblemasRenales'


export const SeccionUno = (props) => {
    const {datosFicha} = props
    
    //filtrar campos verdaderos
   
    return (
        <div class="border-c card">
            <div class="card-header  text-center"><span>ID: </span>{datosFicha.rut}</div>
            <div class="card-body">

                <div className="row d-flex">
                    <div className="col-12">
                        <FechaFicha datosFicha= {datosFicha} />
                    </div>
                </div>

                <div className="row d-flex">
                    <div className="col-3">
                        <FechaNacimiento datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <PadreConVida datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <EnfermedadPadre datosFicha= {datosFicha} />
                    </div>
                </div>

                <div className="row d-flex">
                    <div className="col-3">
                        <MadreConVida datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <EnfermedadMadre datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <PacienteEnfermo datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <EnfermedadPaciente datosFicha= {datosFicha} />
                    </div>
                </div>

                <div className="row d-flex">
                    <div className="col-3">
                        <Medicamentos datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <MedicamentosCinco datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <Alergico datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <QueDrogaAlimento datosFicha= {datosFicha} />
                    </div>
                </div>

                <div className="row d-flex">
                    <div className="col-3">
                        <CicatrizaBien datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <FiebreReumatica datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <TratamientoFiebreReumatica datosFicha= {datosFicha} />
                    </div>

                    <div className="col-3">
                        <ProblemasRenales datosFicha= {datosFicha} />
                    </div>
                </div>

                
            </div>
        </div>
        
    )
}