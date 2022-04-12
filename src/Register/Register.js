import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../src/firebase.init';

const Register = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const [error, setError] =useState('');
    const navigate=useNavigate();

    const [createUserWithEmailAndPassword, user]=useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur =event=>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur =event=>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur =event=>{
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate('/home')
    }
    const handleCreateUser=event=>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Password din`t match');
            return;
        }
        if(password.length <6){
            setError('password must be 6 characters or longer')
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-container">
      <div>
        <h3 className="form-title">Register</h3>
        <form onSubmit={handleCreateUser}>
        <div className="input-group">
          <div>
              <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" placeholder="Your Email" required/>
          </div>
          <div>
              <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" placeholder="Your Password" required/>
          </div>
          <div>
              <label htmlFor="password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required/>
          </div>
            <p style={{color: 'red'}}>{error}</p>
            <input className="form-submit" type="submit" value="Register" />
            <p>Already have an account? <Link className="form-link" to="/login">Login</Link></p>
        </div>
        </form>
      </div>
    </div>
    );
};

export default Register;