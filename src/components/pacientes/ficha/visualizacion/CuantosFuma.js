import React from 'react'

export const CuantosFuma = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.fuma === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Cuantos fuma</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.cuantos_fuma}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.cuantos_fuma === ""?
                <div className="card bg-vacio mb-3 text-dark" >
                    <div className="card-header c-header">Cuantos fuma</div>
                    <div className="card-body c-body">
                        <span className="">Nada</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Cuantos fuma</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.cuantos_fuma}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}