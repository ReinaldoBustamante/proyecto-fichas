import React from 'react'
import { ProblemaCardiaco } from '../ProblemaCardiaco'
import { DiabetesControladaCon } from '../DiabetesControladaCon'
import { Diabetico } from '../Diabetico'
import { QueProblemaCardiaco } from '../QueProblemaCardiaco'
import { TomaSeguidoAspirina } from '../TomaSeguidoAspirina'
import { Frecuencia } from '../Frecuencia'
import { TienePresionAlta } from '../TienePresionAlta'
import { TratamientoPresionAlta } from '../TratamientoPresionAlta'
import { Hepatitis } from '../Hepatitis'
import { TipoHepatitis } from '../TipoHepatitis'
import { ProblemaHepatico } from '../ProblemaHepatico'
import { CualProblemaHepatico } from '../CualProblemaHepatico'
import { Epileptico } from '../Epileptico'
import { MedicamentosEpilepsia } from '../MedicamentosEpilepsia'
import { FueOperado } from '../FueOperado'
import { OperadoDe } from '../OperadoDe'



export const SeccionDos = (props) => {
    const {datosFicha} = props
    console.log(datosFicha.toma_seguido_aspirina)
    //filtrar campos verdaderos
   
    return (
        <div class="border-c card">
            <div class="card-header  text-center"><span>ID: </span>{datosFicha.rut}</div>
            <div class="card-body">
                <div className="row d-flex">
                    <div className="col-3">
                        <Diabetico datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <DiabetesControladaCon datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <ProblemaCardiaco datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <QueProblemaCardiaco datosFicha= {datosFicha} />
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-3">
                        <TomaSeguidoAspirina datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <Frecuencia datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <TienePresionAlta datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <TratamientoPresionAlta datosFicha= {datosFicha} />
                    </div>
                    
                </div>
                <div className="row d-flex">
                    <div className="col-3">
                        <Hepatitis datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <TipoHepatitis datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <ProblemaHepatico datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <CualProblemaHepatico datosFicha= {datosFicha} />
                    </div>
                    
                </div>
                <div className="row d-flex">
                    <div className="col-3">
                        <Epileptico datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <MedicamentosEpilepsia datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <FueOperado datosFicha= {datosFicha} />
                    </div>
                    <div className="col-3">
                        <OperadoDe datosFicha= {datosFicha} />
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}
