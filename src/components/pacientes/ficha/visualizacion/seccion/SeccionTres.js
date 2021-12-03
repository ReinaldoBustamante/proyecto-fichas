import React, { useState } from 'react'
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
                        <UlceraGastrica datosFicha= {datosFicha} />
                    </div>
                </div>

              

                
            </div>
        </div>
        
    )
}