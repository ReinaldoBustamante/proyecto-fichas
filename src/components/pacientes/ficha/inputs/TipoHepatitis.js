import React from 'react'

export const TipoHepatitis = (props) => {
    const {fichaPaciente, setfichaPaciente} = props
    const handleOnChange = (e) =>{
        setfichaPaciente({
            ...fichaPaciente,
            tipo_hepatitis: e.target.value
        })
    }
    return (
        <div class="form-floating">
            <input type = "text" onChange={handleOnChange} value={fichaPaciente.tipo_hepatitis} class="form-control" name = "tipo_hepatitis" id="tipo_hepatitis"/>
            <label htmlFor= "tipo_hepatitis" >
                Tipo
            </label>
        </div>
    )
}
