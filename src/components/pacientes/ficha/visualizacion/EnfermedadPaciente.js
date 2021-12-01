import React from 'react'

export const EnfermedadPaciente = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.paciente_enfermo === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Enfermedad Paciente</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.tratamiento_paciente}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.tratamiento_paciente === ""?
                <div className="card bg-vacio mb-3 text-dark" >
                    <div className="card-header c-header">Tratamiento del Paciente</div>
                    <div className="card-body c-body">
                        <span className="">Ninguno</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Tratamiento del Paciente</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.tratamiento_paciente}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}
