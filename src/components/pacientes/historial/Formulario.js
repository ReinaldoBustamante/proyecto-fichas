import React, { useEffect, useState } from 'react'
import Axios from "axios"
import Swal from 'sweetalert2'
import Moment from "moment"
export const Formulario = (props) => {
    const {rut, setcargaHistorial, cargaHistorial} = props
    const [historial, sethistorial] = useState({
        fecha: "",
        razon_ingreso:"",
        detalles: "",
        rut:""
    })
    
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    const hoy = fecha.getDate();
    const mesActual = fecha.getMonth() + 1; 
    const creacion_historial = new Date(añoActual+"-"+mesActual+"-"+hoy)
    const [historiales, sethistoriales] = useState("")

    useEffect(() => {
        Axios.get(`http://localhost:5000/historiales-clinicos/${rut}/${añoActual+"-"+mesActual+"-"+hoy}/`).then( (response) =>{
        sethistoriales(response.data)
        })
    
    }, [])
  
    



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

    const handleOnChange = (e) => {
        if(e.target.name ==="razon_ingreso"){
            sethistorial({
                ...historial,
                razon_ingreso: e.target.value
            })
        }
        if(e.target.name ==="detalles"){
            sethistorial({
                ...historial,
                detalles: e.target.value
            })
        }
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        {historiales[0] === undefined ?
            Axios.post('http://localhost:5000/historiales-clinicos',{
                fecha: creacion_historial,
                detalles: historial.detalles,
                razon_ingreso: historial.razon_ingreso,
                rut: rut
                
                
                
            }).then((response) => {
                if(response.status === 200){
                    setcargaHistorial(cargaHistorial +1)
                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                    sethistorial({
                        ...historial,
                        razon_ingreso: "",
                        detalles: ""
                    })
                }
            }).catch(err =>{
                console.log(err)
            }) 
    
        :
        Toast.fire({
            icon: 'error',
            title: 'Ya existe un historial creado en la fecha actual'
        })
        }
       
    }

    return (
        <form action="" onSubmit = {handleOnSubmit}>
            <div className="row">
                <div className="col">
                    <div class="form-floating">
                        <input type = "text" class="form-control" value={historial.razon_ingreso} onChange={handleOnChange} name = "razon_ingreso"/>
                        <label htmlFor= "razon_ingreso" >
                            Razon de ingreso
                        </label>
                    </div>
                </div>

                <div className="col">
                    <div class="form-floating">
                        <input type = "text" class="form-control" onChange={handleOnChange} name = "detalles" value={historial.detalles}/>
                        <label htmlFor= "detalles" >
                            Detalles
                        </label>
                    </div>
                </div>                
            </div>
            <div className="row">
                <button className="btn btn-primary mt-3" data-bs-dismiss="modal" >Registrar</button>
            </div>
            
        </form>
        
   )
}
