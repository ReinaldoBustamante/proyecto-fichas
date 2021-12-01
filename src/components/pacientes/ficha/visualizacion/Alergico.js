import React from 'react'

export const Alergico = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.alegico_droga_alimento === 1?
                <div className="card bg-si mb-3 text-white" >
                    <div className="card-header c-header">Alergico</div>
                    <div className="card-body c-body">
                        <span className="">Si</span>
                    </div>
                </div>
            :
                <div className="card bg-no mb-3 text-white" >
                    <div className="card-header c-header">Alergico</div>
                    <div className="card-body c-body">
                        <span className="">No</span>
                    </div>
                </div>

            }
        </div>
        
        
    )
}
