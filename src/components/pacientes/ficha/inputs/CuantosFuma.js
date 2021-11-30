import React from 'react'

export const CuantosFuma = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            cuantos_fuma: e.target.value
        })
    }
    return (
         <div class="form-floating">
            <input type = "number" class="form-control" placeholder="" onChange={handleOnChange} value= {fichaPaciente.cuantos_fuma} name = "cuantos_fuma" id="cuantos_fuma"/>
            <label htmlFor= "cuantos_fuma" >
                Cuantos Fuma
            </label>
        </div>
    )
}
