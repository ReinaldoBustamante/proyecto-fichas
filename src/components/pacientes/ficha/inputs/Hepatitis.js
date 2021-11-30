import React from 'react'

export const Hepatitis = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.hepatitis === 0){
            setfichaPaciente({
                ...fichaPaciente,
                hepatitis: 1
            })
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                hepatitis: 0
            })
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" onClick={handleOnClick} type="checkbox" name= "hepatitis" value= {fichaPaciente.hepatitis} id="hepatitis"/>
            <label class="form-check-label" htmlFor="hepatitis">
                ¿Tiene Hepatitis?
            </label>
        </div>
    )
}
