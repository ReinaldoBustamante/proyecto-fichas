import React from 'react'

export const QueConstancia = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            que_constancia: e.target.value
        })
    }
    return (
        <div class="form-floating">
            <input type = "text" onChange={handleOnChange} value={fichaPaciente.que_constancia} class="form-control" name = "que_constancia" id="que_constancia"/>
            <label htmlFor= "que_constancia" >
                Alguna enfermedad o recomendacion de su medico
            </label>
        </div>
    )
}
