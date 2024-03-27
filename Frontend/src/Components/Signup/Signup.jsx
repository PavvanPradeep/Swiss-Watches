import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});



const Signup = () => {

  const navigate = useNavigate();

const navigateToLogin = () => {
  navigate('/login');
};

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentUser, setCurrentUser] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    client.get("/auth/user")
      .then(function (res) {
        setCurrentUser(true);
      })
      .catch(function (error) {
        setCurrentUser(false);
      });
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match.');
      return;
    }
    client.post(
      "/auth/register",
      {
        email: email,
        username: username,
        password: password
      }
    ).then(function (res) {
      setCurrentUser(true);
    });
  };

  if (currentUser) {
    console.log("User signed up");
    alert('User signed up');
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='signup'>
          <p>CREATE AN ACCOUNT</p>
        </div>
        <div className='have-account'>
          <p>Already have an account? <a className='login-s' onClick={navigateToLogin}>Login</a></p>
        </div>
        <div className='form-boxes'>
          <label htmlFor='uname' className='font-bold'>Username</label>
          <input type='text' name='uname' id='uname' className='bg-slate-50' placeholder='Enter your username' value={username} onChange={handleUsernameChange} />
        </div>
        <div className='form-boxes'>
          <label htmlFor='email' className='font-bold'>Email</label>
          <input type='text' name='email' id='email' className='bg-slate-50' placeholder='Enter your email address' value={email} onChange={handleEmailChange} />
        </div>
        <div className='pass-container'>
          <div className='form-boxes'>
            <label htmlFor='password' className='font-bold'>Password</label>
            <div className='password-input'>
              <input type={showPassword ? "text" : "password"} name='password' id='password' placeholder='Enter a password' value={password} onChange={handlePasswordChange} />
              <button type='button' onClick={togglePasswordVisibility}>
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>
          <div className='form-boxes ml-2'>
            <label htmlFor='confirm-password' className='font-bold'>Confirm Password</label>
            <div className='password-input'>
              <input type={showConfirmPassword ? "text" : "password"} name='confirm-password' id='confirm-password' placeholder='Confirm password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
              <button type='button' onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>
        </div>
        <div className='button-container'>
          <button className='button bg-black' type='submit'>SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
