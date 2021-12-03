import React from 'react'

export const TratamientoPresionAlta = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.tiene_presion_alta === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Tratamiento presion alta</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.tratamiento_presion}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.tratamiento_presion === ""?
                <div className="card bg-vacio mb-3 text-dark" >
                    <div className="card-header c-header">Tratamiento presion alta</div>
                    <div className="card-body c-body">
                        <span className="">Ninguno</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Tratamiento presion alta</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.tratamiento_presion}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}