import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <>
            <div className="container" style={{ margin: '10%' }}>
                {/* Div for login grid layout */}
                <div className="login-grid">
                    {/* Div for login text */}
                    <div className="login-text">
                        <h2>Login</h2>
                    </div>
                    {/* Additional login text with a link to Sign Up page */}
                    <div className="login-text">
                        Are you a new member? <span><Link to="/sign-up" style={{ color: '#2190FF' }}> Sign Up Here</Link></span>
                    </div>
                    <br />
                    {/* Div for login form */}
                    <div className="login-form">
                        <form>
                            {/* Form group for email input */}
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' id="email" className="form-control" placeholder="Enter your email"
                                    aria-describedby="helpId" />
                            </div>
                            {/* Form group for password input */}
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" className="form-control" placeholder="Enter your password"
                                    aria-describedby="helpId" />
                            </div>
                            {/* Button group for login and reset buttons */}
                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                            </div>
                            <br />
                            {/* Additional login text for 'Forgot Password' option */}
                            <div className="login-text">
                                Forgot Password?
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login