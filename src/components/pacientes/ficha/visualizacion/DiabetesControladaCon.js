import React from 'react'

export const DiabetesControladaCon = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.diabetes === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Diabetes controlada con</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.diabetes_controlada_con}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.diabetes_controlada_con === ""?
                <div className="card bg-vacio mb-3 text-w" >
                    <div className="card-header c-header">Diabetes controlada con</div>
                    <div className="card-body c-body">
                        <span className="">Nada</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Diabetes controlada con</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.diabetes_controlada_con}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}