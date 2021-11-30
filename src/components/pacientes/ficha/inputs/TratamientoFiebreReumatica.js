import React from 'react'

export const TratamientoFiebreReumatica = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            tratamiento_fiebre_reumatica: e.target.value
        })
    }
    return (
        <div class="form-floating">
            <input type = "text" onChange={handleOnChange} value={fichaPaciente.tratamiento_fiebre_reumatica} class="form-control" name = "tratamiento_fiebre_reumatica" id="tratamiento_fiebre_reumatica"/>
            <label htmlFor= "tratamiento_fiebre_reumatica" >
                Con que se trata
            </label>
        </div>
    )
}
