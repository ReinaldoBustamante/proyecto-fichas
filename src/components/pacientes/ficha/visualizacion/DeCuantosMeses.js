import React from 'react'

export const DeCuantosMeses = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.embarazada === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Meses</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.de_cuantos_meses}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.de_cuantos_meses === ""?
                <div className="card bg-vacio mb-3 text-dark" >
                    <div className="card-header c-header">Meses</div>
                    <div className="card-body c-body">
                        <span className="">Nada</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Meses</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.de_cuantos_meses}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}