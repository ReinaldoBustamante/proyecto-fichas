import React from 'react'

export const ProblemasRespiratorios = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.problemas_respiratorios === 0){
            setfichaPaciente({
                ...fichaPaciente,
                problemas_respiratorios: 1
            })
          
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                problemas_respiratorios: 0
            })
      
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name= "problemas_respiratorios" id="problemas_respiratorios" onClick={handleOnClick} value = {fichaPaciente.problemas_respiratorios}/>
            <label class="form-check-label" htmlFor="problemas_respiratorios">
                ¿Problemas Respiratorios?
            </label>
        </div>
    )
}
