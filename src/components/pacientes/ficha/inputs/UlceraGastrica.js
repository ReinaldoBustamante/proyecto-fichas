import React from 'react'

export const UlceraGastrica = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.ulcera_gastrica === 0){
            setfichaPaciente({
                ...fichaPaciente,
                ulcera_gastrica: 1
            })
          
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                ulcera_gastrica: 0
            })
      
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name= "ulcera_gastrica" id="ulcera_gastrica" onClick={handleOnClick} value = {fichaPaciente.ulcera_gastrica}/>
            <label class="form-check-label" htmlFor="ulcera_gastrica">
                ¿Ulcera Gastrica?
            </label>
        </div>
    )
}
