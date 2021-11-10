import React from 'react'
import { DatosBasicos } from '../form/DatosBasicos'
//import { DatosClinicos } from '../form/DatosClinicos'
export const Accordion = (props) => {

   // const {datosBasicos, setDatosBasicos, datosClinicos, setDatosClinicos} = props
   const {datosBasicos, setDatosBasicos} = props
   
    return (

        <div>
            {/* ACORDION */}
                <div className='accordion' id='accordionExample'>

                  {/* DATOS PERSONALES */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Datos Personales
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body m-2">
                        <DatosBasicos datosBasicos={datosBasicos} setDatosBasicos={setDatosBasicos}/>
                      </div>
                    </div>
                  </div>

                  {/* DATOS Clinicos 
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Datos Clinicos
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body m-2">
                        <DatosClinicos datosClinicos={datosClinicos} setDatosClinicos={setDatosClinicos}/>
                      </div>
                    </div>
                  </div>
                  */}
                  {/* Finalizar y Limpiar datos  */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Finalizar
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className='d-flex justify-content-center mt-4'>
                        <p className='h6'>Si está seguro de que sus datos sean correctos presione confirmar</p>
                      </div>
                      <div className="accordion-body d-flex justify-content-center gap-4 ">
                        <button type='submit' className='btn btn-primary' >Confirmar</button>
                        <button type='button' className='btn btn-danger' >Limpiar Datos</button>
                      </div>
                    </div>
                  </div>


                </div>
        </div>
    )
}
