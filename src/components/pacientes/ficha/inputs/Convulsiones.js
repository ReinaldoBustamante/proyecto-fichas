import React from 'react'

export const Convulsiones = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.convulsiones === 0){
            setfichaPaciente({
                ...fichaPaciente,
                convulsiones: 1
            })
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                convulsiones: 0
            })
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" onClick={handleOnClick} type="checkbox" name= "convulsiones" value= {fichaPaciente.convulsiones} id="convulsiones"/>
            <label class="form-check-label" htmlFor="convulsiones">
                ¿Convulsiones?
            </label>
        </div>
    )
}
