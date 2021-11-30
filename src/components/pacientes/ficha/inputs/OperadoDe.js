import React from 'react'

export const OperadoDe = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            operado_de: e.target.value
        })
    }
    return (
         <div class="form-floating">
            <input type = "text" class="form-control" onChange={handleOnChange} value= {fichaPaciente.operado_de} name = "operado_de" id="operado_de"/>
            <label htmlFor= "operado_de" >
                Fue operado de
            </label>
        </div>
    )
}
