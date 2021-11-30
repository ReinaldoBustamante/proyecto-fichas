import React from 'react'

export const Medicamentos = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            medicamentos: e.target.value
        })
    }
    return (
         <div class="form-floating">
            <input type = "text" class="form-control" onChange={handleOnChange} value= {fichaPaciente.medicamentos} name = "medicamentos" id="medicamentos"/>
            <label htmlFor= "medicamentos" >
                Que medicamentos consume
            </label>
        </div>
    )
}
