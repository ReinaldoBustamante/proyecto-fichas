import React from 'react'

export const CicatrizaBien = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            cicatriza_bien: e.target.value
        })
    }
    return (
         <div class="form-floating">
            <input type = "text" class="form-control" onChange={handleOnChange} value= {fichaPaciente.cicatriza_bien} name = "cicatriza_bien"/>
            <label htmlFor= "cicatriza_bien" >
                Cuando le sacan una muela o se lastima, cicatriza bien? sangra mucho?
            </label>
        </div>
    )
}
