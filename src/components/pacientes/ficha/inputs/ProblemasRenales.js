import React from 'react'

export const ProblemasRenales = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.problemas_renales === 0){
            setfichaPaciente({
                ...fichaPaciente,
                problemas_renales: 1
            })
          
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                problemas_renales: 0
            })
      
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name= "problemas_renales" id="problemas_renales" onClick={handleOnClick} value = {fichaPaciente.problemas_renales}/>
            <label class="form-check-label" htmlFor="problemas_renales">
                ¿Problemas Renales?
            </label>
        </div>
    )
}
