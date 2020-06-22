import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage'


class LoginPage extends Component {
    render() {
        return (
            <div className='loginPage'>
                <div>
                    <h2>Welcome back!</h2>
                    <form>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" name="password" required />

                        <Link to='/'>
                            <button type="cancel">Cancel</button>
                        </Link>

                        <Link to='/home'>
                            <button type="submit">Log in</button>
                        </Link>

                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;