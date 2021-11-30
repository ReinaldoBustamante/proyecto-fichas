import React from 'react'

export const PacienteEnfermo = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.paciente_enfermo === 0){
            setfichaPaciente({
                ...fichaPaciente,
                paciente_enfermo: 1
            })
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                paciente_enfermo: 0
            })
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" onClick={handleOnClick} type="checkbox" name= "paciente_enfermo" value= {fichaPaciente.paciente_enfermo} id="paciente_enfermo"/>
            <label class="form-check-label" htmlFor="paciente_enfermo">
               ¿Paciente Enfermo?
            </label>
        </div>
    )
}