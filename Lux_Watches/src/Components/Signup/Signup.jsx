import React, { useState } from 'react';
import './Signup.css';


const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };    
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Invalid email address.');
        return;
      }
      // Check if password and confirm password match
      if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return;
      }

  
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='signup'>
                    <p>CREATE AN ACCOUNT</p>
                </div>
                <div className='already text-black bg-slate-200 mt-9'>
                    <p>Already have an account?
                        <a href="/login" className='underline'> Login here.</a>
                    </p>
                </div>
                <div className='form-boxes'>
                    <label htmlFor='uname' className='font-bold'>Name</label>
                    <input type='text' name='uname' id='uname' className='bg-slate-50' placeholder='Enter your name'/>
                </div>
                <div className='form-boxes'>
                    <label htmlFor='email' className='font-bold'>Email</label>
                    <input type='text' name='email' id='email' className='bg-slate-50' placeholder='Enter your email address' value={email} onChange={handleEmailChange}/>
                </div>

                <div className='pass-container'>
                    <div className='form-boxes'>
                        <label htmlFor='password' className='font-bold'>Password</label>
                        <div className='password-input'>
                            <input type={showPassword ? "text" : "password"} name='password' id='password' placeholder='Enter a password' value={password} onChange={handlePasswordChange}/>
                            <button type='button' onClick={togglePasswordVisibility}>
                                {showPassword ? "HIDE" : "SHOW"}
                            </button>
                        </div>
                    </div>

                    <div className='form-boxes ml-2'>
                        <label htmlFor='confirm-password' className='font-bold'>Confirm Password</label>
                        <div className='password-input'>
                            <input type={showConfirmPassword ? "text" : "password"} name='confirm-password' id='confirm-password' placeholder='Confirm password' value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                            <button type='button' onClick={toggleConfirmPasswordVisibility}>
                                {showConfirmPassword ? "HIDE" : "SHOW"}
                            </button>
                        </div>
                    </div>
                </div>

                <div className='forgot-password'>
                    <a href='https://www.google.com'>Forgot Password?</a>
                </div>
                <div className='button-container'>
                    <button className='button bg-black' type='submit'>SIGN UP</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;

