import React from 'react'

export const TratamientoPaciente = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            tratamiento_paciente: e.target.value
        })
    }
    return (
        <div class="form-floating">
            <input type = "text" onChange={handleOnChange} value={fichaPaciente.tratamiento_paciente} class="form-control" name = "tratamiento_paciente" id="tratamiento_paciente"/>
            <label htmlFor= "tratamiento_paciente" >
                Enfermedad Paciente
            </label>
        </div>
    )
}
