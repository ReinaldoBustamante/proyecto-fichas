import React from 'react'

export const CualProblemaHepatico = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            cual_problema_hepatico: e.target.value
        })
    }
    return (
         <div class="form-floating">
            <input type = "text" class="form-control" onChange={handleOnChange} value= {fichaPaciente.cual_problema_hepatico} name = "cual_problema_hepatico" id="cual_problema_hepatico"/>
            <label htmlFor= "cual_problema_hepatico" >
                Cual Problema Hepatico
            </label>
        </div>
    )
}
