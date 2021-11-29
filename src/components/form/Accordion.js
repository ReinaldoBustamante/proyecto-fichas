import React from 'react'
import { DatosBasicos } from '../form/DatosBasicos'
//import { DatosClinicos } from '../form/DatosClinicos'
export const Accordion = (props) => {

   // const {datosBasicos, setDatosBasicos, datosClinicos, setDatosClinicos} = props
   const {datosBasicos, setDatosBasicos} = props
   
    return (

        <div>
          <DatosBasicos datosBasicos={datosBasicos} setDatosBasicos={setDatosBasicos}/>
        </div>
      
    )
}
