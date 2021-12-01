import React from 'react'

export const PacienteEnfermo = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.paciente_enfermo === 1?
                <div className="card bg-si mb-3 text-white" >
                    <div className="card-header c-header">Paciente Enfermo</div>
                    <div className="card-body c-body">
                        <span className="">Si</span>
                    </div>
                </div>
            :
                <div className="card bg-no mb-3 text-white" >
                    <div className="card-header c-header">Paciente Enfermo</div>
                    <div className="card-body c-body">
                        <span className="">No</span>
                    </div>
                </div>

            }
        </div>
        
        
    )
}


