import React from 'react'

export const Diabetico = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.madre_con_vida === 0){
            setfichaPaciente({
                ...fichaPaciente,
                diabetico: 1
            })
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                diabetico: 0
            })
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" onClick={handleOnClick} type="checkbox" name= "diabetico" value= {fichaPaciente.diabetico} id="diabetico"/>
            <label class="form-check-label" htmlFor="diabetico">
                ¿Diabetico?
            </label>
        </div>
    )
}
