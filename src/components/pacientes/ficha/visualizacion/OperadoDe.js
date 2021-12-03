import React from 'react'

export const OperadoDe = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.fue_operado === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Operado de</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.operado_de}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.operado_de === ""?
                <div className="card bg-vacio mb-3 text-dark text-white" >
                    <div className="card-header c-header">Operado de</div>
                    <div className="card-body c-body">
                        <span className="">Nada</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Operado de</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.operado_de}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}