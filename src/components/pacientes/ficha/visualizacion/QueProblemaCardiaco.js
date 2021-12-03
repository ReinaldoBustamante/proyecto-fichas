import React from 'react'

export const QueProblemaCardiaco = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.problema_cardiaco === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Que problema cardiaco</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.que_problema_cardiaco}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.que_problema_cardiaco === ""?
                <div className="card bg-vacio mb-3 text-dark" >
                    <div className="card-header c-header">Que problema cardiaco</div>
                    <div className="card-body c-body">
                        <span className="">Ninguno</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Que problema cardiaco</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.que_problema_cardiaco}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}