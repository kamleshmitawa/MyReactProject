import React from 'react'

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username: '',
            password: '',
            loggedin: false
        }
    }

    handleChange = (e) =>{
        const { name, value } = e.target
        this.setState({ [name] : value })
    }
    handleSubmit = (e) => {
        const { username, password } = this.state
        if(username && password)
            {    this.setState({
                    loggedin: true
                })
                localStorage.setItem('username',username )
                this.props.history.push('/profile')
            }
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form>
                    <label>
                        USERNAME:
                        <input name="username" value={this.state.username} onChange={this.handleChange} />
                    </label>
                    <label>
                        PASSWORD:
                        <input name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <button type="button" onClick={this.handleSubmit}> Submit </button>
                </form>
            </div>
        )
    }
}

export default Login