import React from 'react'

export const TratamientoFiebreReumatica = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.tiene_fiebre_reumatica === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Tratamiento fiebre reumatica</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.tratamiento_fiebre_reumatica}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.tratamiento_fiebre_reumatica === ""?
                <div className="card bg-vacio mb-3 text-dark" >
                    <div className="card-header c-header">Tratamiento fiebre reumatica</div>
                    <div className="card-body c-body">
                        <span className="">Ninguno</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Tratamiento fiebre reumatica</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.tratamiento_fiebre_reumatica}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}