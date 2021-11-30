import React from 'react'

export const MedicamentoEpilepcia = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            medicamento_epilepcia: e.target.value
        })
    }
    return (
         <div class="form-floating">
            <input type = "text" class="form-control" onChange={handleOnChange} value= {fichaPaciente.medicamento_epilepcia} name = "medicamento_epilepcia" id="medicamento_epilepcia"/>
            <label htmlFor= "medicamento_epilepcia" >
                Con que medicamentos se trata
            </label>
        </div>
    )
}
