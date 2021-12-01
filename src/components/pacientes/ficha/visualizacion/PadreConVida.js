import React from 'react'

export const PadreConVida = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.padre_con_vida === 1?
                <div className="card bg-si mb-3 text-white" >
                    <div className="card-header c-header">Padre Con Vida</div>
                    <div className="card-body c-body">
                        <span className="">Si</span>
                    </div>
                </div>
            :
                <div className="card bg-no mb-3 text-white" >
                    <div className="card-header c-header">Padre Con Vida</div>
                    <div className="card-body c-body">
                        <span className="">No</span>
                    </div>
                </div>

            }
        </div>
        
        
    )
}
