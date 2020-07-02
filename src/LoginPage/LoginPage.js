import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'
import Context from '../Context';


class LoginPage extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }
    static contextType = Context

    state = { error: null }

    handleLogin = e => {
        e.preventDefault()
        const { username, password } = e.target
        const user = {
            username: username.value,
            password: password.value
        }

        username.value = ''
        password.value = ''
        this.props.onLoginSuccess()

        fetch('http://localhost:8000/auth/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.context.setUser(data)
                localStorage.authToken=data.authToken
                this.props.history.push('/home')
        })
        }


    render() {
        const { error } = this.state
        return (
            <div className='loginPage'>
                <div>
                    <h2>Welcome back!</h2>
                    
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <form className='form' onSubmit={this.handleLogin}>
                        <label htmlFor="username">User name</label>
                        <input type="username" id="username" name="username" required />
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" name="password" required />

                        <Link to='/'>
                            <button type="cancel">Cancel</button>
                        </Link>

                            <button type="submit">Log in</button>
                        

                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;