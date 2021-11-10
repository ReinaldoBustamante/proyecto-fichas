import React from 'react'
import {Route, Redirect} from 'react-router-dom'


export const RutaPrivada = ({children, ...restoPropiedades}) => {
    const {path, loginStatus} = restoPropiedades
    if(loginStatus){
        return <Route path={path}>{children}</Route>
    } else{
        return <Redirect to='/login' />
    }


    
}
