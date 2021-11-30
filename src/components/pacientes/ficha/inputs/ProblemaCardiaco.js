import React from 'react'

export const ProblemaCardiaco = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.problema_cardiaco === 0){
            setfichaPaciente({
                ...fichaPaciente,
                problema_cardiaco: 1
            })
          
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                problema_cardiaco: 0
            })
      
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name= "problema_cardiaco" id="problema_cardiaco" onClick={handleOnClick} value = {fichaPaciente.problema_cardiaco}/>
            <label class="form-check-label" htmlFor="problema_cardiaco">
                ¿Problema Cardiaco?
            </label>
        </div>
    )
}
