import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage'


class SignUpPage extends Component {
    static defaultProps = {
        onSignUpSuccess: () => {}
      }
    state = { error: null }

    register = e => {
        e.preventDefault()
        const { username, email, password } = e.target
        const user = {
            username: username.value,
            email: email.value,
            password: password.value
        }

        username.value = ''
        email.value = ''
        password.value = ''
        this.props.onSignUpSuccess()


        fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    this.props.setUser(data)
                    this.props.history.push('/home')  
                }
                else {
                    this.setState({
                        error:data.error
                    })
                }             
        })
    }
    render() {
        const { error } = this.state
        return (
            <div className='signUpPage'>
                <h2>Sign Up</h2>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <form onSubmit={this.register}>
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" required />

                    <button type='submit'>Sign up</button>

                    <Link to='/'>
                        <button type="cancel">Cancel</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default SignUpPage;