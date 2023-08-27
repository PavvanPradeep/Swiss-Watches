import React, { useEffect, useState } from 'react';
import '../../App.css';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='login-page'>
            <div className='form-container'>
                <div className='login'>
                    <p>LOGIN</p>
                </div>
                <form action=''>
                    <div className='form-boxes'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' id='email' placeholder='Enter your email address'/>
                    </div>
                    <div className='form-boxes'>
                        <label htmlFor='password'>Password</label>
                        <div className='password-input'>
                            <input type={showPassword ? "text" : "password"} name='password' id='password' placeholder='Enter a password' />
                            <button type='button' onClick={togglePasswordVisibility}>
                                {showPassword ? "SHOW" : "HIDE"}
                            </button>
                        </div>
                    </div>
                    <div className='forgot-password'>
                        <a href='google.com'>Forgot Password?</a>
                    </div>
                    <button className='button' type='submit'>LOGIN</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
