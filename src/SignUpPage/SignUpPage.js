import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage'


class SignUpPage extends Component {
    render() {
        return (
            <div className='signUpPage'>
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" id="full-name" name="full-name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" required />
                    <Link to='/home'>
                        <button type="submit">Sign up</button>
                    </Link>
                    <Link to='/'>
                        <button type="cancel">Cancel</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default SignUpPage;