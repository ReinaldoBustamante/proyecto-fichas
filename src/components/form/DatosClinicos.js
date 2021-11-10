import React from 'react'



export const DatosClinicos = (props) => {

    const {datosClinicos, setDatosClinicos} = props

    const handleOnClick = (e) =>{

        //Padre Vivo
        if (e.target.name === 'padreVivo'){
            if(e.target.value === 'false'){
                setDatosClinicos({
                    ...datosClinicos,
                    padreVivo: true
                })
            }
            else{
                setDatosClinicos({
                    ...datosClinicos,
                    padreVivo: false
                })
            }
        }
        // Madre Viva
        if (e.target.name === 'madreViva'){
            if(e.target.value === 'false'){
                setDatosClinicos({
                    ...datosClinicos,
                    madreViva: true
                })
            }
            else{
                setDatosClinicos({
                    ...datosClinicos,
                    madreViva: false
                })
            }
        }
        // Paciente enfermo
        if (e.target.name === 'pacienteEnfermo'){
            if(e.target.value === 'false'){
                setDatosClinicos({
                    ...datosClinicos,
                    pacienteEnfermo: true
                })
            }
            else{
                setDatosClinicos({
                    ...datosClinicos,
                    pacienteEnfermo: false
                })
            }
        }
        // Esta en tratamiento
        if (e.target.name === 'estaEnTratamiento'){
            if(e.target.value === 'false'){
                setDatosClinicos({
                    ...datosClinicos,
                    estaEnTratamiento: true
                })
            }
            else{
                setDatosClinicos({
                    ...datosClinicos,
                    estaEnTratamiento: false
                })
            }
        }
        // paciente es alergico
        if (e.target.name === 'alergico'){
            if(e.target.value === 'false'){
                setDatosClinicos({
                    ...datosClinicos,
                    alergico: true
                })
            }
            else{
                setDatosClinicos({
                    ...datosClinicos,
                    alergico: false
                })
            }
        }
        //paciente es diabetico
        if (e.target.name === 'diabetico'){
            if(e.target.value === 'false'){
                setDatosClinicos({
                    ...datosClinicos,
                    diabetico: true
                })
            }
            else{
                setDatosClinicos({
                    ...datosClinicos,
                    diabetico: false
                })
            }
        }
        //paciente fuma
        if (e.target.name === 'fuma'){
            if(e.target.value === 'false'){
                setDatosClinicos({
                    ...datosClinicos,
                    fuma: true
                })
            }
            else{
                setDatosClinicos({
                    ...datosClinicos,
                    fuma: false
                })
            }
        }


  
    }

    const handleOnChange = (e) =>{
        if(e.target.name === 'enfermedad-padre'){
            setDatosClinicos({
                ...datosClinicos,
                enfermedadPadre: e.target.value
            })
        }
        if(e.target.name === 'enfermedad-madre'){
            setDatosClinicos({
                ...datosClinicos,
                enfermedadMadre: e.target.value
            })
        }
        if(e.target.name === 'enfermedadPaciente'){
            setDatosClinicos({
                ...datosClinicos,
                enfermedadPaciente: e.target.value
            })
        }
        if(e.target.name === 'queTratamiento'){
            setDatosClinicos({
                ...datosClinicos,
                queTratamiento: e.target.value
            })
        }
        if(e.target.name === 'alergicoA'){
            setDatosClinicos({
                ...datosClinicos,
                alergicoA: e.target.value
            })
        }
        if(e.target.name === 'diabetesControlada'){
            setDatosClinicos({
                ...datosClinicos,
                diabetesControlada: e.target.value
            })
        }
        if(e.target.name === 'cicatrizaBien'){
            setDatosClinicos({
                ...datosClinicos,
                cicatrizaBien: e.target.value
            })
        }
        if(e.target.name === 'cuantos'){
            setDatosClinicos({
                ...datosClinicos,
                cuantos: e.target.value
            })
        }
        if(e.target.name === 'medicamentosConsumidosHabitualmente'){
            setDatosClinicos({
                ...datosClinicos,
                medicamentosConsumidosHabitualmente: e.target.value
            })
        }
        if(e.target.name === 'medicamentosUltimosCincoAños'){
            setDatosClinicos({
                ...datosClinicos,
                medicamentosUltimosCincoAños: e.target.value
            })
        }
        
    }
    console.log(datosClinicos)
    return (
        <div>

            {/* medicamentos consumidos habitualmente y durante 5 años */}
            <div className='row mb-3 '>
                {/* medicamentosConsumidosHabitualmente*/}
                <div className="col d-flex align-items-center ">
                    <div className='col ' >
                        <div className='form-floating'>
                            <input type='text' name='medicamentosConsumidosHabitualmente' id='medicamentosConsumidosHabitualmente' className='form-control' placeholder='ingrese medicamentos habituales' value={datosClinicos.medicamentosConsumidosHabitualmente} onChange={handleOnChange} required/>
                            <label htmlFor ='medicamentosConsumidosHabitualmente'>Indique los medicamentos que consume habitualmente el paciente</label>
                        </div>
                    </div>
                </div>
                {/* medicamentosUltimosCincoAños */}
                <div className="col d-flex align-items-center ">
                    <div className='col ' >
                        <div className='form-floating'>
                            <input type='text' name='medicamentosUltimosCincoAños' id='medicamentosUltimosCincoAños' className='form-control' placeholder='medicamentosUltimosCincoAños ' value={datosClinicos.medicamentosUltimosCincoAños} onChange={handleOnChange} required/>
                            <label htmlFor ='medicamentosUltimosCincoAños'>Indique los medicamentos que el paciente ha consumido en los ultimos 5 años</label>
                        </div>
                    </div>
                </div>
                
                    
            </div>

            {/* PADRE Y MADRE VIVA */}
            <div className='row mb-3 '>
            
                {/* Cicatriza bien*/}
                <div className="col d-flex align-items-center ">
                    <div className='col ' >
                        <div className='form-floating'>
                            <input type='text' name='cicatrizaBien' id='cicatrizaBien' className='form-control' placeholder='ingrese cicatrizacion ' value={datosClinicos.cicatrizaBien} onChange={handleOnChange} required/>
                            <label htmlFor ='cicatrizaBien'>Indique que tal cicatriza el paciente</label>
                        </div>
                    </div>
                </div>
                
                {/* Madre Viva ? */}    
                <div className='col d-flex align-items-center'>
                    <div>
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="checkbox" name = 'madreViva'  id="madreViva" value={datosClinicos.madreViva} onClick={handleOnClick} />
                            <label className="form-check-label" htmlFor="madreViva">
                                Madre Viva
                            </label>
                        </div>    
                    </div>

                    <div className='col ' >
                        <div className='form-floating'>
                            <input type='text' name='enfermedad-madre' id='enfermedad-madre' className='form-control' placeholder='ingrese enfermedad madre 'value={datosClinicos.enfermedadMadre} onChange={handleOnChange}  required/>
                            <label htmlFor ='enfermedad-madre'>Enfermedad que padece o padecio</label>
                        </div>
                    </div>
                </div>
            </div>

            {/* fumador y cicatrizacion */}
            <div className='row mb-3 '>
                {/* Padre Vivo ? */}
                <div className="col d-flex align-items-center">
                    <div >
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input " type="checkbox" name = 'padreVivo'  id="padreVivo" value={datosClinicos.padreVivo} onClick={handleOnClick} />
                            <label className="form-check-label" htmlFor="padreVivo">
                                Padre Vivo
                            </label>
                        </div>     
                    </div>

                    <div className='col' >
                            <div className='form-floating'>
                                <input type='text' name='enfermedad-padre' id='enfermedad-padre' className='form-control' placeholder='ingrese enfermedad padre ' value={datosClinicos.enfermedadPadre} onChange={handleOnChange} required/>
                                <label htmlFor ='enfermedad-padre'>Enfermedad que padece o padecio</label>
                            </div>
                    </div>
                </div>
                {/* Fuma*/}
                <div className="col d-flex align-items-center">
                    <div>
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="checkbox" name = 'fuma'  id="fuma" value={datosClinicos.fuma } onClick={handleOnClick} />
                            <label className="form-check-label" htmlFor="fuma">
                                Es fumador
                            </label>
                        </div>
                    </div>
                        
                    
                    {/* Si es true entonces muestra el siguiente campo*/}
                    {datosClinicos.fuma === true ?
                    <div className='col ' >
                        <div className='form-floating'>
                            <input type='text' name='cuantos' id='cuantos' className='form-control' placeholder='cuantos cigarrillos ' value={datosClinicos.cuantos} onChange={handleOnChange} required/>
                            <label htmlFor ='cuantos'>Cuantos cigarrillos al dia</label>
                        </div>
                    </div>
                    :
                    null
                    }
                </div>
                    
            </div>

            {/* Alergia y diabetes */}
            <div className='row mb-3 '>
                {/* Paciente alergico? */}
                    <div className="col d-flex align-items-center">
                        <div>
                            <div className="form-check form-check-inline ">
                                <input className="form-check-input" type="checkbox" name = 'alergico'  id="alergico" value={datosClinicos.alergico } onClick={handleOnClick} />
                                <label className="form-check-label" htmlFor="alergico">
                                    Alergico
                                </label>
                            </div>
                        </div>
                        
                    
                        {/* Si es true entonces muestra el siguiente campo*/}
                        {datosClinicos.alergico === true ?
                        <div className='col ' >
                            <div className='form-floating'>
                                <input type='text' name='alergicoA' id='alergicoA' className='form-control' placeholder='ingrese alergia paciente ' value={datosClinicos.alergicoA} onChange={handleOnChange} required/>
                                <label htmlFor ='alergicoA'>Indique alergia</label>
                            </div>
                        </div>
                        :
                        null
                        }
                    </div>
                    {/* Es diabetico? */}
                    <div className="col d-flex align-items-center ">
                        <div>
                            <div className="form-check form-check-inline ">
                                <input className="form-check-input" type="checkbox" name = 'diabetico'  id="diabetico" value={datosClinicos.diabetico } onClick={handleOnClick} />
                                <label className="form-check-label" htmlFor="diabetico">
                                    Diabetico
                                </label>
                            </div>
                        </div>
                        
                    
                        {/* Si es true entonces muestra el siguiente campo*/}
                        {datosClinicos.diabetico === true ?
                        <div className='col ' >
                            <div className='form-floating'>
                                <input type='text' name='diabetesControlada' id='diabetesControlada' className='form-control' placeholder='con que controla su diabetes' value={datosClinicos.diabetesControlada} onChange={handleOnChange} required/>
                                <label htmlFor ='diabetesControlada'>Con que controla su diabetes</label>
                            </div>
                        </div>
                        :
                        null
                        }
                    </div>
   
            </div>
            
            {/* Paciente enfermo y tratamiento */}
            <div className='row mb-3 '>
                {/* Paciente enfermo? */}
                    <div className="col d-flex align-items-center">
                        <div>
                            <div className="form-check form-check-inline ">
                                <input className="form-check-input" type="checkbox" name = 'pacienteEnfermo'  id="pacienteEnfermo" value={datosClinicos.pacienteEnfermo } onClick={handleOnClick} />
                                <label className="form-check-label" htmlFor="pacienteEnfermo">
                                    Paciente Enfermo
                                </label>
                            </div>
                        </div>
                        
                    
                        {/* Si es true entonces muestra el siguiente campo*/}
                        {datosClinicos.pacienteEnfermo === true ?
                        <div className='col ' >
                            <div className='form-floating'>
                                <input type='text' name='enfermedadPaciente' id='enfermedadPaciente' className='form-control' placeholder='ingrese enfermedad paciente ' value={datosClinicos.enfermedadPaciente} onChange={handleOnChange} required/>
                                <label htmlFor ='enfermedadPaciente'>Indique enfermedad</label>
                            </div>
                        </div>
                        :
                        null
                        }
                    </div>
                    {/* Esta en tratamiento? */}
                    <div className="col d-flex align-items-center ">
                        <div>
                            <div className="form-check form-check-inline ">
                                <input className="form-check-input" type="checkbox" name = 'estaEnTratamiento'  id="estaEnTratamiento" value={datosClinicos.estaEnTratamiento } onClick={handleOnClick} />
                                <label className="form-check-label" htmlFor="estaEnTratamiento">
                                    Esta tratandose
                                </label>
                            </div>
                        </div>
                        
                    
                        {/* Si es true entonces muestra el siguiente campo*/}
                        {datosClinicos.estaEnTratamiento === true ?
                        <div className='col ' >
                            <div className='form-floating'>
                                <input type='text' name='queTratamiento' id='queTratamiento' className='form-control' placeholder='indique tratamiento del paciente ' value={datosClinicos.queTratamiento} onChange={handleOnChange} required/>
                                <label htmlFor ='queTratamiento'>Indique tratamiento</label>
                            </div>
                        </div>
                        :
                        null
                        }
                    </div>


                    

                   
                      
                    
            </div>

        

            

        </div>
    )
}
