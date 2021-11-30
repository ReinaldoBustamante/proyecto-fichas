import React from 'react'

export const QueDrogaAlimento = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            que_droga_alimento: e.target.value
        })
    }
    return (
        <div class="form-floating">
            <input type = "text" onChange={handleOnChange} value={fichaPaciente.que_droga_alimento} class="form-control" name = "que_droga_alimento" id="que_droga_alimento"/>
            <label htmlFor= "que_droga_alimento" >
                A que droga / alimento
            </label>
        </div>
    )
}
