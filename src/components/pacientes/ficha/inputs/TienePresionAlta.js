import React from 'react'

export const TienePresionAlta = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.tiene_presion_alta === 0){
            setfichaPaciente({
                ...fichaPaciente,
                tiene_presion_alta: 1
            })
          
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                tiene_presion_alta: 0
            })
      
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name= "tiene_presion_alta" id="tiene_presion_alta" onClick={handleOnClick} value = {fichaPaciente.tiene_presion_alta}/>
            <label class="form-check-label" htmlFor="tiene_presion_alta">
                ¿Presion Alta?
            </label>
        </div>
    )
}
