import React from 'react'

export const Diabetico = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.diabetico === 1?
                <div className="card bg-si mb-3 text-white" >
                    <div className="card-header c-header">Diabetico</div>
                    <div className="card-body c-body">
                        <span className="">Si</span>
                    </div>
                </div>
            :
                <div className="card bg-no mb-3 text-white" >
                    <div className="card-header c-header">Diabetico</div>
                    <div className="card-body c-body">
                        <span className="">No</span>
                    </div>
                </div>

            }
        </div>
        
        
    )
}
