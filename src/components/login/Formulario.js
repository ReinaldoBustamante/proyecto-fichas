import React from 'react'

export const Formulario = (props) => {
    const { setusername,  setpassword} = props
    const handleOnChange = (e) =>{
        if (e.target.name === 'username'){
            setusername(e.target.value)
        }
        if (e.target.name === 'password'){
            setpassword(e.target.value)
        }
    }

    return (
        <div className='container mt-5'>
            <div className="card  mb-3 width shadow color">
                <div className="card-header bg-info h4 text-white">Ingrese sus datos</div>
                <div className="card-body">
                <div className='row'>
                    <div className='col'>
                        <label htmlFor=''>Usuario</label>
                        <input type='text' className='form-control' name='username' onChange = {handleOnChange} />
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col'>
                        <label htmlFor=''>Contraseña</label>
                        <input type='text' className='form-control' name='password' onChange = {handleOnChange} />
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col d-grid'>
                        <button type='submit' className='btn-lg btn-info text-white shadow mt-2 '>Iniciar Sesion</button>
                    </div>
                </div>
                </div>
            </div>
                
            
            
            
        </div>
    )
}
