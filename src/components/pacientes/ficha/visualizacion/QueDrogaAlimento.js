import React from 'react'

export const QueDrogaAlimento = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.alegico_droga_alimento === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Alergico a</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.que_drogra_alimento}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.que_drogra_alimento === ""?
                <div className="card bg-vacio mb-3 text-dark" >
                    <div className="card-header c-header">Alergico a</div>
                    <div className="card-body c-body">
                        <span className="">Nada</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Alergico a</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.que_drogra_alimento}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}