import React from 'react'
import { Redirect } from 'react-router-dom'
import { RedirectUser } from './RedirectUser';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            loggedIn: false
        }
    }

    OnChangeHandler = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
      
        e.preventDefault();
    }
 
    render() {
        console.log(this.state, 'state')
        return (
            <div>
                <div>SignIn</div>
                <form>
                    <label>
                        Username:
                        <input type="text" value={this.state.username} onChange={this.OnChangeHandler} name="username" />
                    </label>
                    <label>
                        Password:
                        <input type="text" value={this.state.password} onChange={this.OnChangeHandler} name="password" />
                    </label>
                    <button onClick={this.handleSubmit}> SignIn </button>
                </form>
            </div>

        )
    }
}

export default SignIn