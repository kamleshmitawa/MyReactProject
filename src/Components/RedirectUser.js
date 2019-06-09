
import React from 'react'

export const RedirectUser = ({ path, ...props}) => {
    return props.history.push(path)
}