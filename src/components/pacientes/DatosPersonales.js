import React from 'react'

export const DatosPersonales = (props) => {
    const {paciente} = props
    
    return (
        <div>
            {paciente === "" ?
            ""
            :
            <div className="text-white color-1 mb-3">
            <div className="card-header text-center"><span className="h5">{paciente.nombre}</span></div>
                <div className="card-body card-text">
                    <div className= "row mt-1">
                        <div className="col">
                            <span className="h5">ID: <span className="h6">{paciente.rut}</span></span>
                        </div>
                        <div className="col">
                            <span className="h5">Nacimiento: <span className="h6">{paciente.fecha_nacimiento}</span></span>
                        </div>
                        <div className="col">
                            <span className="h5">Sexo: <span className="h6">{paciente.sexo}</span></span>
                        </div>
                    </div>
                    <div className= "row mt-1">
                        <div className="col">
                            <span className="h5">Telefono: <span className="h6">{paciente.telefono}</span></span>
                        </div>
                        <div className="col">
                            <span className="h5">Celular: <span className="h6">{paciente.celular}</span></span>
                        </div>
                        <div className="col">
                            <span className="h5">Estado Civil: <span className="h6">{paciente.estado_civil}</span></span>
                        </div>
                    </div>
                    <div className= "row mt-1">
                        <div className="col">
                            <span className="h5">Domicilio: <span className="h6">{paciente.domicilio}</span></span>
                        </div>
                        <div className="col">
                            <span className="h5">Profesion: <span className="h6">{paciente.profesion}</span></span>
                        </div>
                        <div className="col">
                            <span className="h5">Trabaja en: <span className="h6">{paciente.lugar_trabajo}</span></span>
                        </div>
                    </div>
                        
                        
                        

            </div>
        </div>
            }
        </div>
        
        
        
         
    )
}
