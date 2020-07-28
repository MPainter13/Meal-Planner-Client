import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './SignUpPage'


class SignUpPage extends Component {

    state = { error: null }

    register = e => {
        e.preventDefault()
        const { username, email, password } = e.target
        const userInfo = {
            username: username.value,
            email: email.value,
            password: password.value
        }

        AuthApiService.postUser(userInfo)
            .then(() => {
                return AuthApiService.postLogin({
                    username: username.value,
                    password: password.value
                })
            })
            .then(res => {
                username.value = ''
                password.value = ''
                email.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.history.push('/home')
            })
            .catch(res => {
                this.setState({ error: res.error })        
    })
};

    render() {
        const { error } = this.state
        return (
            <div className='form'>
                <form onSubmit={this.register}>
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <fieldset>
                        <legend><h3>Sign Up</h3></legend>
                        <label htmlFor="username">User Name</label>
                        <input type="text" id="username" name="username" required />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                        <button type='submit'>Sign up</button>
                        <Link to='/'>
                            <button type="cancel">Cancel</button>
                        </Link>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default SignUpPage;