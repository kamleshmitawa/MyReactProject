import React from 'react'
import Name from './Name';
import { Route } from 'react-router-dom';

class Profile extends React.Component{
    render(){
        const { match } = this.props
        console.log(this.props, 'propfile props')
        let username = localStorage.getItem('username')
        return(
           <div>
               <ul>{username}</ul>
            <div>Profile</div>
                <Route path={`${match.path}/${username}`} component={Name} />
           </div>
        )
    }
}

export default Profile