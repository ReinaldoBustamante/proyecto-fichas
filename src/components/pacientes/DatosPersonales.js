import React from 'react'

export const DatosPersonales = (props) => {
    const {paciente} = props
    console.log(paciente)
    return (
        <div className="card text-white color-1 mb-3">
            <div className="card-header text-center"><span className="h4">{paciente.nombre}</span></div>
                <div className="card-body mt-3 pad ">
                    <div className= "row mt-5">
                        <div className="col">
                            <span className="h4">ID: <span className="h5">{paciente.rut}</span></span>
                        </div>
                        <div className="col">
                            <span className="h4">Edad: <span className="h5">{paciente.edad}</span></span>
                        </div>
                        <div className="col">
                            <span className="h4">Sexo: <span className="h5">{paciente.sexo}</span></span>
                        </div>
                    </div>
                    <div className= "row mt-5">
                        <div className="col">
                            <span className="h4">Telefono: <span className="h5">{paciente.telefono}</span></span>
                        </div>
                        <div className="col">
                            <span className="h4">Celular: <span className="h5">{paciente.celular}</span></span>
                        </div>
                        <div className="col">
                            <span className="h4">Estado Civil: <span className="h5">{paciente.estado_civil}</span></span>
                        </div>
                    </div>
                    <div className= "row mt-5 mb-5">
                        <div className="col">
                            <span className="h4">Domicilio: <span className="h5">{paciente.domicilio}</span></span>
                        </div>
                        <div className="col">
                            <span className="h4">Profesion: <span className="h5">{paciente.profesion}</span></span>
                        </div>
                        <div className="col">
                            <span className="h4">Trabaja en: <span className="h5">{paciente.lugar_trabajo}</span></span>
                        </div>
                    </div>
                        
                        
                        

            </div>
        </div>
         
    )
}
