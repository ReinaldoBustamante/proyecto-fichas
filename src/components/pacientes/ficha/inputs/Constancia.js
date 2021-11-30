import React from 'react'

export const Constancia = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.constancia === 0){
            setfichaPaciente({
                ...fichaPaciente,
                constancia: 1
            })
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                constancia: 0
            })
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" onClick={handleOnClick} type="checkbox" name= "constancia" value= {fichaPaciente.constancia} id="constancia"/>
            <label class="form-check-label" htmlFor="constancia">
                ¿Quiere dejar constancia?
            </label>
        </div>
    )
}
