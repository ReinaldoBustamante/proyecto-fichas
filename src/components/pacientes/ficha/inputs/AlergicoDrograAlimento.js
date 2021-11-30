import React from 'react'

export const AlergicoDrograAlimento = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.alergico_droga_alimento === 0){
            setfichaPaciente({
                ...fichaPaciente,
                alergico_droga_alimento: 1
            })
          
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                alergico_droga_alimento: 0
            })
      
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name= "alergico_droga_alimento" id="alergico_droga_alimento" onClick={handleOnClick} value = {fichaPaciente.alergico_droga_alimento}/>
            <label class="form-check-label" htmlFor="alergico_droga_alimento">
               ¿Presenta alergias?
            </label>
        </div>
    )
}
