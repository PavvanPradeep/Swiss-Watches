import React, { useEffect, useState } from 'react';
import './Login.css';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
            <div className='form-container'>

                <form action=''>
                    <div className='login'>
                        <p>LOGIN</p>
                    </div>
                    <div className='form-boxes'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' id='email' className='bg-slate-50' placeholder='Enter your email address'/>
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
                    <button className='button bg-black' type='submit'>LOGIN</button>
                </form>
            </div>
    );
};

export default Login;
