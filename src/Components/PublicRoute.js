
import React from 'react'
import { Route } from 'react-router-dom'

export const PublicRoute = ({...props}) => {
    console.log(props, 'loginn')
    return <Route {...props} />
}