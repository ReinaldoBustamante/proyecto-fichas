import React from 'react'

export const MedicamentosCincoAños = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            medicamentos_cinco_años: e.target.value
        })
    }
    return (
         <div class="form-floating">
            <input type = "text" class="form-control" onChange={handleOnChange} value= {fichaPaciente.medicamentos_cinco_años} name = "medicamentos_cinco_años" id="medicamentos_cinco_años"/>
            <label htmlFor= "medicamentos_cinco_años" >
                Medicamentos consumidos en los ultimos 5 años
            </label>
        </div>
    )
}
