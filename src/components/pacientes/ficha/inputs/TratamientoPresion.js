import React from 'react'

export const TratamientoPresion = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            tratamiento_presion: e.target.value
        })
    }
    return (
        <div class="form-floating">
            <input type = "text" onChange={handleOnChange} value={fichaPaciente.tratamiento_presion} class="form-control" name = "tratamiento_presion" id="tratamiento_presion"/>
            <label htmlFor= "tratamiento_presion" >
                Tratamiento Presion Alta
            </label>
        </div>
    )
}
