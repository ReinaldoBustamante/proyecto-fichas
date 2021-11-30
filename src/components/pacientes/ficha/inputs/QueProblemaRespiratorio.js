import React from 'react'

export const QueProblemaRespiratorio = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            que_problema_respiratorio: e.target.value
        })
    }
    return (
        <div class="form-floating">
            <input type = "text" onChange={handleOnChange} value={fichaPaciente.que_problema_respiratorio} class="form-control" name = "que_problema_respiratorio" id="que_problema_respiratorio"/>
            <label htmlFor= "que_problema_respiratorio" >
               Que problema respiratorio
            </label>
        </div>
    )
}
