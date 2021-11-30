import React from 'react'

export const EnfermedadMadre = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            enfermedad_madre: e.target.value
        })
    }
    return (
         <div class="form-floating">
            <input type = "text" class="form-control" onChange={handleOnChange} value= {fichaPaciente.enfermedad_madre} name = "enfermedad_madre" id="enfermedad_madre"/>
            <label htmlFor= "enfermedad_madre" >
                Enfermedad que padece o padecio
            </label>
        </div>
    )
}
