import React from 'react'

export const DiabetesControladaCon = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            diabetes_controlada_con: e.target.value
        })
    }
    return (
         <div class="form-floating">
            <input type = "text" class="form-control" onChange={handleOnChange} value= {fichaPaciente.diabetes_controlada_con} name = "diabetes_controlada_con" id="diabetes_controlada_con"/>
            <label htmlFor= "diabetes_controlada_con" >
                Controlada con
            </label>
        </div>
    )
}
