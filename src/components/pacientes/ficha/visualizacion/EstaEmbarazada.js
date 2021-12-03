import React from 'react'

export const EstaEmbarazada = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.embarazada === 1?
                <div className="card bg-si mb-3 text-white" >
                    <div className="card-header c-header">Embarazada</div>
                    <div className="card-body c-body">
                        <span className="">Si</span>
                    </div>
                </div>
            :
                <div className="card bg-no mb-3 text-white" >
                    <div className="card-header c-header">Embarazada</div>
                    <div className="card-body c-body">
                        <span className="">No</span>
                    </div>
                </div>

            }
        </div>
        
        
    )
}
