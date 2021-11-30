import React from 'react'

export const Frecuencia = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            frecuencia: e.target.value
        })
    }
    return (
         <div class="form-floating">
            <input type = "text" class="form-control" onChange={handleOnChange} value= {fichaPaciente.frecuencia} name = "frecuencia" id="frecuencia"/>
            <label htmlFor= "frecuencia" >
                Con que frecuencia 
            </label>
        </div>
    )
}
