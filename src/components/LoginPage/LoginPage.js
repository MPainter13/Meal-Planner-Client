import React, { Component } from 'react';
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { Link } from 'react-router-dom';
import './LoginPage.css'
import Context from '../../Context';


class LoginPage extends Component {

    static contextType = Context

    state = { error: null }

    handleLogin = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { username, password } = e.target

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.history.push('/home')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }


    render() {
        const { error } = this.state
        return (
            <div className='form'>
                <form onSubmit={this.handleLogin}>
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <fieldset>
                        <legend><h3>Welcome back!</h3></legend>
                        <label htmlFor="username">User name</label>
                        <input type="username" id="username" name="username" required />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                        <button type="submit" className='loginButton'>Login</button>
                        <Link to='/'>
                            <button type="cancel">Cancel</button>
                        </Link>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default LoginPage;