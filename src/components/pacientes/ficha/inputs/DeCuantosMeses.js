import React from 'react'

export const DeCuantosMeses = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            de_cuantos_meses: e.target.value
        })
    }
    return (
         <div class="form-floating">
            <input type = "number" class="form-control" onChange={handleOnChange} value= {fichaPaciente.de_cuantos_meses} name = "de_cuantos_meses" id="de_cuantos_meses"/>
            <label htmlFor= "de_cuantos_meses" >
                Cuantos meses
            </label>
        </div>
    )
}
