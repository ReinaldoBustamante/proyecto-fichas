import React from 'react'

export const PadreConVida = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.padre_con_vida === 0){
            setfichaPaciente({
                ...fichaPaciente,
                padre_con_vida: 1
            })
          
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                padre_con_vida: 0
            })
      
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name= "padre_con_vida" id="padre_con_vida" onClick={handleOnClick} value = {fichaPaciente.padre_con_vida}/>
            <label class="form-check-label" htmlFor="padre_con_vida">
                ¿Padre con vida?
            </label>
        </div>
    )
}
