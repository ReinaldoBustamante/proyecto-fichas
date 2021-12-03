import React from 'react'

export const FueOperado = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.fue_operado === 1?
                <div className="card bg-si mb-3 text-white" >
                    <div className="card-header c-header">Fue operado</div>
                    <div className="card-body c-body">
                        <span className="">Si</span>
                    </div>
                </div>
            :
                <div className="card bg-no mb-3 text-white" >
                    <div className="card-header c-header">Fue operado</div>
                    <div className="card-body c-body">
                        <span className="">No</span>
                    </div>
                </div>

            }
        </div>
        
        
    )
}