import React from 'react'
import {Route , Redirect} from 'react-router-dom'

 export const PrivateRoute = ({path: Path, component:Component, ...props}) => {
    return localStorage.getItem('username') ? <Route path={Path} component={Component} /> : <Redirect to={{pathname: "/signin"}} />
}
