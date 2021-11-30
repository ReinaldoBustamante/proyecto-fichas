import React from 'react'

export const MadreConVida = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.madre_con_vida === 0){
            setfichaPaciente({
                ...fichaPaciente,
                madre_con_vida: 1
            })
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                madre_con_vida: 0
            })
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" onClick={handleOnClick} type="checkbox" name= "madre_con_vida" value= {fichaPaciente.madre_con_vida} id="madre_con_vida"/>
            <label class="form-check-label" htmlFor="madre_con_vida">
                ¿Madre con vida?
            </label>
        </div>
    )
}
