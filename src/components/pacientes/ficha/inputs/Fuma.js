import React from 'react'

export const Fuma = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.fuma === 0){
            setfichaPaciente({
                ...fichaPaciente,
                fuma: 1
            })
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                fuma: 0
            })
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" onClick={handleOnClick} type="checkbox" name= "fuma" value= {fichaPaciente.fuma} id="fuma"/>
            <label class="form-check-label" htmlFor="fuma">
                ¿Fuma?
            </label>
        </div>
    )
}
