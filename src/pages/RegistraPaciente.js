import React, { useState } from 'react'
import { Accordion } from '../components/form/Accordion'
import Swal from 'sweetalert2'
import Axios from 'axios'
import { useHistory } from "react-router-dom";

export const RegistraPaciente= () => {
    let history = useHistory()
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    const [datosBasicos, setDatosBasicos] = useState({
        id_odontologo: '',
        nombre: '',
        sexo: 'Hombre',
        rut: '',
        dia: '',
        mes: "",
        año: "",
        telefono: '',
        celular: '',
        domicilio: '',
        estadoCivil: 'Soltero',
        profesion: '',
        lugarTrabajo: ''
    })


    /*const [datosClinicos, setDatosClinicos] = useState({
        padreVivo: false,
        enfermedadPadre: '',
        madreViva: false,
        enfermedadMadre: '',
        pacienteEnfermo: false,
        enfermedadPaciente: '',
        estaEnTratamiento: false,
        queTratamiento: '',
        medicamentosConsumidosHabitualmente: '', //*
        medicamentosUltimosCincoAños: '',        //*
        alergico: false,
        alergicoA: '',
        cicatrizaBien: '',                      //*
        diabetico: false,
        diabetesControlada: '',
        fuma: false,
        cuantos: ''
    }) */



    
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        if (datosBasicos.id_odontologo === '' || datosBasicos.nombre === ''|| datosBasicos.sexo=== '' || datosBasicos.rut === ''|| datosBasicos.edad=== '' || datosBasicos.telefono=== '' || datosBasicos.celular === ''||
            datosBasicos.domicilio === '' || datosBasicos.estadoCivil === '' || datosBasicos.profesion === '' || datosBasicos.lugarTrabajo===''
        ){
            Toast.fire({
                icon: 'error',
                title: 'Ingrese todos los campos'
            })
        }
        else{
            Axios.post('https://api-rest-fedent.herokuapp.com/pacientes',{
                id_odontologo: datosBasicos.id_odontologo,
                nombre: datosBasicos.nombre,
                sexo: datosBasicos.sexo,
                rut: datosBasicos.rut,
                fecha_nacimiento: datosBasicos.dia+"/"+datosBasicos.mes+"/"+datosBasicos.año,
                telefono: datosBasicos.telefono,
                celular: datosBasicos.celular,
                domicilio: datosBasicos.domicilio,
                estadoCivil: datosBasicos.estadoCivil,
                profesion: datosBasicos.profesion,
                lugarTrabajo: datosBasicos.lugarTrabajo
            }).then((response) => {
                if(response.status === 200){
                    Swal.fire(
                        'Usuario Registrado Correctamente!',
                        'se registro el usuario: '+datosBasicos.nombre,
                        'success'
                    )
                    history.push(`/paciente/${datosBasicos.rut}`)
                }
                
            })
            
            
            
            
        
           
        }
    }

    return (
        <div className='m-4'>
            <h2>Registro de Paciente</h2>
            <div className='container mt-5'>
                
                <div className='row d-flex justify-content-center'>
                    <div className='col-12'>
                        {/*FORMULARIO */}

                        <form action =""  className='was-validated' onSubmit={handleOnSubmit} noValidate>
                            <Accordion datosBasicos={datosBasicos} setDatosBasicos={setDatosBasicos} />
                        </form>

                
                    </div>
                </div>
            </div>
        </div>
        
    )
}
