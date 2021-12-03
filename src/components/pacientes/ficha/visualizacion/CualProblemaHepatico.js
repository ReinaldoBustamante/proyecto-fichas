import React from 'react'

export const CualProblemaHepatico = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.problema_hepatico === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Cual problema hepatico</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.cual_problema_hepatico}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.cual_problema_hepatico === ""?
                <div className="card bg-vacio mb-3 text-dark" >
                    <div className="card-header c-header">Cual problema hepatico</div>
                    <div className="card-body c-body">
                        <span className="">Nada</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Cual problema hepatico</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.cual_problema_hepatico}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}