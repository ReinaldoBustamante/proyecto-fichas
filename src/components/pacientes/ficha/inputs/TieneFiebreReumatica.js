import React from 'react'

export const TieneFiebreReumatica = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.tiene_fiebre_reumatica === 0){
            setfichaPaciente({
                ...fichaPaciente,
                tiene_fiebre_reumatica: 1
            })
          
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                tiene_fiebre_reumatica: 0
            })
      
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name= "tiene_fiebre_reumatica" id="tiene_fiebre_reumatica" onClick={handleOnClick} value = {fichaPaciente.tiene_fiebre_reumatica}/>
            <label class="form-check-label" htmlFor="tiene_fiebre_reumatica">
                ¿Fiebre Reumatica?
            </label>
        </div>
    )
}
