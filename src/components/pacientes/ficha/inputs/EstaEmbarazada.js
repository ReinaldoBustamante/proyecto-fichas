import React from 'react'

export const EstaEmbarazada = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.esta_embarazada === 0){
            setfichaPaciente({
                ...fichaPaciente,
                esta_embarazada: 1
            })
          
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                esta_embarazada: 0
            })
      
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name= "esta_embarazada" id="esta_embarazada" onClick={handleOnClick} value = {fichaPaciente.esta_embarazada}/>
            <label class="form-check-label" htmlFor="esta_embarazada">
                ¿Esta Embarazada?
            </label>
        </div>
    )
}
