import React from 'react'
import './Sign_Up.css';
import { Link } from 'react-router-dom';

const Sign_up = () => {
    return (
        <>
            <div className="container" style={{ margin: '10%' }}> {/* Main container with margin-top*/}
                <div className="signup-grid"> {/* Grid layout for sign-up form*/}
                    <div className="signup-text"> {/* Title for the sign-up form*/}
                        <h1>Sign Up</h1>
                    </div>
                    <div className="signup-text1" style={{ textAlign: 'left' }}>
                        Already a member? <span><Link to="/login" style={{ color: '#2190FF' }}> Login</Link></span></div>
                </div>
                <div className="signup-form"> {/* Form for user sign-up*/}
                    <form> {/* Start of the form*/}

                        <div className="form-group"> {/* Form group for user's name*/}
                            <label for="name">Name</label> {/* Label for name input field*/}
                            <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name"
                                aria-describedby="helpId" /> {/* Text input field for name*/}
                        </div>

                        <div className="form-group"> {/* Form group for user's phone number*/}
                            <label for="phone">Phone</label> {/* Label for phone input field*/}
                            <input type="tel" name="phone" id="phone" required className="form-control"
                                placeholder="Enter your phone number" pattern='[0-9]{10}' aria-describedby="helpId" />
                            {/* Tel input field for phone number*/}
                        </div>

                        <div className="form-group"> {/* Form group for user's email*/}
                            <label for="email">Email</label> {/* Label for email input field*/}
                            <input type="email" name="email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' id="email" required className="form-control" placeholder="Enter your email"
                                aria-describedby="helpId" /> {/* Email input field*/}
                        </div>

                        <div className="form-group"> {/* Form group for user's password*/}
                            <label for="password">Password</label> {/* Label for password input field*/}
                            <input name="password" id="password" required className="form-control" placeholder="Enter your password"
                                aria-describedby="helpId" /> {/* Password input field*/}
                        </div>

                        <div className="btn-group"> {/* Button group for form submission and reset*/}
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            {/* Submit button*/}
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                            {/* Reset button*/}
                        </div>
                    </form> {/* End of the form*/}
                </div>
            </div>
        </>
    )
}

export default Sign_up