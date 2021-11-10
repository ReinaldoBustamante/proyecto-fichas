import React, { useState } from 'react'

import { Navbar } from './components/Navbar'
import { Inicio } from './pages/Inicio'
import { RutaPrivada } from './components/RutaPrivada'
import { RegistraPaciente } from './pages/RegistraPaciente'
import { Login } from './pages/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { RegistrarUsuario } from './pages/RegistrarUsuario'
import { Paciente } from './pages/Paciente'



export const App = () => {

  const [loginStatus, setloginStatus] = useState(false)

  const [usuario, setusuario] = useState({
    nombre: '',
    rut: '',
    correo: '',
    rol: '',
    telefono: '',
    username: ''
  })

  const [paciente, setpaciente] = useState('')
  return (
    <div className='container-flush'>
      <Router>
        {loginStatus === true?
        <Navbar setloginStatus={setloginStatus} usuario = {usuario}/>
        :
        ""
        }
        

        <Switch>
          {/* RUTA LOGIN*/}
          <Route path='/login'>
            <Login loginStatus = {loginStatus} setloginStatus = {setloginStatus} setusuario = {setusuario} />
          </Route>

          <RutaPrivada path='/registrar-paciente' loginStatus={loginStatus}>

            <RegistraPaciente />
    
          </RutaPrivada>

          <RutaPrivada path='/registrar-usuario' loginStatus={loginStatus}>

            <RegistrarUsuario />
    
          </RutaPrivada>

          <RutaPrivada path='/paciente' loginStatus={loginStatus}>

            <Paciente paciente = { paciente }/>
    
          </RutaPrivada>

          <RutaPrivada path='/' loginStatus={loginStatus} >

            <Inicio usuario = {usuario} setpaciente = {setpaciente}/>
    
          </RutaPrivada>
          {/*
          <Route path='/registrar-paciente'>
            <RegistraPaciente />
          </Route>*/}

          {/* 
          <Route path='/'>
            <Inicio />
          </Route>*/}


        </Switch>
          
      </Router>
      
      
    </div>
    
    
  )
}
