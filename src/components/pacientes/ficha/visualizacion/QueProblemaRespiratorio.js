import React from 'react'

export const QueProblemaRespiratorio = (props) => {
    const {datosFicha} = props
    console.log(datosFicha.problemas_respiratorio)
    console.log(datosFicha.que_problema_respiratorio)
    return (
        <div>
            {datosFicha.problemas_respiratorio === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Que Problema Respiratorio</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.que_problema_respiratorio}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.que_problema_respiratorio === ""?
                <div className="card bg-vacio mb-3 text-dark" >
                    <div className="card-header c-header">Que Problema Respiratorio</div>
                    <div className="card-body c-body">
                        <span className="">Ninguno</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Que Problema Respiratorio</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.que_problema_respiratorio}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}
