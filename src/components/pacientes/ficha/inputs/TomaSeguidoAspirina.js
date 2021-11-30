import React from 'react'

export const TomaSeguidoAspirina = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.toma_seguido_aspirina === 0){
            setfichaPaciente({
                ...fichaPaciente,
                toma_seguido_aspirina: 1
            })
          
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                toma_seguido_aspirina: 0
            })
      
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name= "toma_seguido_aspirina" id="toma_seguido_aspirina" onClick={handleOnClick} value = {fichaPaciente.toma_seguido_aspirina}/>
            <label class="form-check-label" htmlFor="toma_seguido_aspirina">
                ¿Consume Aspirina?
            </label>
        </div>
    )
}
