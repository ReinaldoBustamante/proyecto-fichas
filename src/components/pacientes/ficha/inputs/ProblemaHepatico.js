import React from 'react'

export const ProblemaHepatico = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.problema_hepatico === 0){
            setfichaPaciente({
                ...fichaPaciente,
                problema_hepatico: 1
            })
          
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                problema_hepatico: 0
            })
      
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name= "problema_hepatico" id="problema_hepatico" onClick={handleOnClick} value = {fichaPaciente.problema_hepatico}/>
            <label class="form-check-label" htmlFor="problema_hepatico">
                ¿Problema Hepatico?
            </label>
        </div>
    )
}
