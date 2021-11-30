import React from 'react'

export const FueOperado = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    
    const handleOnClick = (e) => {
        if(fichaPaciente.fue_operado === 0){
            setfichaPaciente({
                ...fichaPaciente,
                fue_operado: 1
            })
        }
        else{
            setfichaPaciente({
                ...fichaPaciente,
                fue_operado: 0
            })
        }
        
    }
    return (
        <div class="form-check">
            <input class="form-check-input" onClick={handleOnClick} type="checkbox" name= "fue_operado" value= {fichaPaciente.fue_operado} id="fue_operado"/>
            <label class="form-check-label" htmlFor="fue_operado">
                ¿Fue operado?
            </label>
        </div>
    )
}
