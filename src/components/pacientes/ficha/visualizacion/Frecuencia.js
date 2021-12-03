import React from 'react'

export const Frecuencia = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.toma_seguido_aspirina === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Frecuencia</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.frecuencia}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.frecuencia === ""?
                <div className="card bg-vacio mb-3 text-w" >
                    <div className="card-header c-header">Frecuencia</div>
                    <div className="card-body c-body">
                        <span className="">No toma aspirina</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Frecuencia</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.frecuencia}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}
