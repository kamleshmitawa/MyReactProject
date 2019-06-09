import React from 'react'
import { Redirect } from 'react-router-dom'
import Profile from './Profile';

class Home extends React.Component {

    handleProfile = (e) => {
        console.log(this.props, 'history')
        return this.props.history.push('/profile')
    }
    handleLogin = (e) => {
        return this.props.history.push('/login')
    }
    render() {
        console.log(this.props, 'this.props')
        return (
            <div>
                <div>Home</div>
                <button onClick={this.handleProfile}>Profile</button>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Home