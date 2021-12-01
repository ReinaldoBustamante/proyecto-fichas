import React from 'react'

export const FiebreReumatica = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.tiene_fiebre_reumatica === 1?
                <div className="card bg-si mb-3 text-white" >
                    <div className="card-header c-header">Fiebre Reumatica</div>
                    <div className="card-body c-body">
                        <span className="">Si</span>
                    </div>
                </div>
            :
                <div className="card bg-no mb-3 text-white" >
                    <div className="card-header c-header">Fiebre Reumatica</div>
                    <div className="card-body c-body">
                        <span className="">No</span>
                    </div>
                </div>

            }
        </div>
        
        
    )
}
