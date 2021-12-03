import React from 'react'

export const TipoHepatitis = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.TipoHepatitis === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Tipo hepatitis</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.tipo_hepatitis}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.tipo_hepatitis === ""?
                <div className="card bg-vacio mb-3 text-dark" >
                    <div className="card-header c-header">Tipo hepatitis</div>
                    <div className="card-body c-body">
                        <span className="">Ninguno</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Tipo hepatitis</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.tipo_hepatitis}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}