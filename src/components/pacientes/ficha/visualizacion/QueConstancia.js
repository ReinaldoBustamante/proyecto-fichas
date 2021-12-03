import React from 'react'

export const QueConstancia = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.constancia === 1 ?
            <div className="card constancia mb-3 text-dark" >
                <div className="card-header c-header">Constancia</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.que_constancia}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.que_constancia === ""?
                <div className="card constancia-vacio mb-3 text-dark" >
                    <div className="card-header c-header text-white">Constancia</div>
                    <div className="card-body c-body text-white">
                        <span className="">Ninguna</span>
                    </div>
                </div>
                :
                <div className="card constancia-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Constancia</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.que_constancia}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}

