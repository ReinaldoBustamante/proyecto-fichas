import React from 'react'

export const TomaSeguidoAspirina = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.toma_seguido_aspirina === 1?
                <div className="card bg-si mb-3 text-white" >
                    <div className="card-header c-header">Consume Aspirina </div>
                    <div className="card-body c-body">
                        <span className="">Si</span>
                    </div>
                </div>
            :
                <div className="card bg-no mb-3 text-white" >
                    <div className="card-header c-header">Consume aspirina </div>
                    <div className="card-body c-body">
                        <span className="">No</span>
                    </div>
                </div>

            }
        </div>
        
        
    )
}
