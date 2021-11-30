import React from 'react'

export const EnfermedadPadre = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            enfermedad_padre: e.target.value
        })
    }
    return (
        <div class="form-floating">
            <input type = "text" onChange={handleOnChange} value={fichaPaciente.enfermedad_padre} class="form-control" name = "enfermedad_padre" id="enfermedad_padre"/>
            <label htmlFor= "enfermedad_padre" >
                Enfermedad que padece o padecio
            </label>
        </div>
    )
}
