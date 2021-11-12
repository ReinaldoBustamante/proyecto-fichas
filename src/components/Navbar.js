import React from 'react'
import {
    Link,
    Redirect
  } from "react-router-dom";



export const Navbar = (props) => {

    const {setloginStatus, usuario} = props
    const {rol} = usuario
    console.log(rol)

    const cerrarSesion = () =>{
        setloginStatus(false)
        return <Redirect to='/login' />
        
    }
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand'>Clinica Fedent</Link>

                    {/* Boton para menu movil */}
                    <button 
                        className='navbar-toggler'
                        type = 'button'
                        data-bs-toggle='collpase'
                        data-bs-target='#menu'
                        aria-controls='menu'
                        aria-expanded = 'false'
                        aroa-label='Mostrar / Ocultar Menu'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>


                    {/* Menu de navegacion */}
                    {rol === "administrador"?
                    <div className = 'collpase navbar-collapse' id='menu'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0 '> 

                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Inicio</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/registrar-paciente' className='nav-link'>Registrar Paciente</Link>
                            </li>
                        
                            
                            <li className='nav-item'>
                                <Link to='/registrar-usuario' className='nav-link'>Registrar Usuario</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Registros
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/registros-usuarios' className='dropdown-item'>Usuarios</Link></li>
                                    <li><Link to='/registros-pacientes' className='dropdown-item'>Pacientes</Link></li>
                                    
                                </ul>
                            </li>
                            
                        
                            
                        </ul>
                        <button type='button' onClick={cerrarSesion} className='btn btn-outline-danger' >Cerrar Sesion</button>

                    </div>
                    :
                    <div className = 'collpase navbar-collapse' id='menu'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0 '> 

                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Inicio</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/registrar-paciente' className='nav-link'>Registrar Paciente</Link>
                            </li>             
                        </ul>
                        <button type='button' onClick={cerrarSesion} className='btn btn-outline-danger' >Cerrar Sesion</button>

                    </div>
                    }
                    


                </div>
            </nav>
        </div>
    )
}
