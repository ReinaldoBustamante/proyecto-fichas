import React from 'react'

export const QueProblemaCardiaco = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            que_problema_cardiaco: e.target.value
        })
    }
    return (
        <div class="form-floating">
            <input type = "text" onChange={handleOnChange} value={fichaPaciente.que_problema_cardiaco} class="form-control" name = "que_problema_cardiaco" id="que_problema_cardiaco"/>
            <label htmlFor= "que_problema_cardiaco" >
                Cual problema cardiaco
            </label>
        </div>
    )
}
