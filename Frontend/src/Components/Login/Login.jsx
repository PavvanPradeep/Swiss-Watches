import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
  });
  
const Login = () => {

    const navigate = useNavigate();

    const navigateToSignup = () => {
        navigate('/signup');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
  
    useEffect(() => {
        client.get("/auth/user")
        .then(function(res) {
          setCurrentUser(true);
        })
        .catch(function(error) {
          setCurrentUser(false);
        });
      }, []);

      function submitLogin(e) {
        e.preventDefault();
        client.post(
          "/auth/auth/login",
          {
            email: email,
            password: password
          }
        ).then(function(res) {
          setCurrentUser(true);
        });
      }
      if (currentUser) {
        console.log("logged in");
        alert('Logged in')
      };

      
    return (
            <div className='form-container'>

                <form action=''>
                    <div className='login'>
                        <p>LOGIN</p>
                    </div>
                    <div className='dont-have-account'>
                        <p>Don't have an account? <a className='login-s' onClick={navigateToSignup}>Signup</a></p>
                    </div>
                    <div className='login-form-boxes'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' id='email' className='bg-slate-50' placeholder='Enter your email address' value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='login-form-boxes'>
                        <label htmlFor='password'>Password</label>
                        <div className='password-input'>
                            <input type={showPassword ? "text" : "password"} name='password' id='password' placeholder='Enter a password' value={password} onChange={e => setPassword(e.target.value)}/>
                            <button type='button' onClick={togglePasswordVisibility}>
                                {showPassword ? "SHOW" : "HIDE"}
                            </button>
                        </div>
                    </div>
                    <div className='forgot-password'>
                        <a href='google.com'>Forgot Password?</a>
                    </div>
                    <button className='button bg-black' type='submit' onClick={submitLogin}>LOGIN</button>
                </form>
            </div>
    );
};

export default Login;
