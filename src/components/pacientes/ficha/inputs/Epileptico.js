import React from 'react'

export const Epileptico = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.epileptico === 0){
            setfichaPaciente({
                ...fichaPaciente,
                epileptico: 1
            })
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                epileptico: 0
            })
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" onClick={handleOnClick} type="checkbox" name= "epileptico" value= {fichaPaciente.epileptico} id="epileptico"/>
            <label class="form-check-label" htmlFor="epileptico">
                ¿Epilepsia?
            </label>
        </div>
    )
}
