import React, { useState } from 'react';
import { registerUser, loginUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

import "../../assets/styles/checkIn.css";

const CheckIn = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  //Register 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      alert("User registered successfully!");
      setIsNewUser(false); // Switch to login form after successful registration

    } catch (err) {
      alert("Registration failed. Please try again.");
      console.error(err);
    }
  };

  //Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(form);
      alert('Login Successful!');

      //navigate to registration form after successful login
      navigate('/reservation/form');

    } catch (err) {
      alert('Login Failed!');
    }
  };


  return (
    < div id='check-in-page'>
      <h1>Posh Paws Boarding</h1>
      <p>New or Existing Customer?</p>
      <p>Please  log in or create an account to check in your pet for boarding.</p>
      <div id='select-btns'>
        <button
          onClick={() => setIsNewUser(true)} className='btn'>
          New Customer
        </button>
        <button
          onClick={() => setIsNewUser(false)} className='btn'>
          Existing Customer
        </button>
      </div>
      {isNewUser ? (
        <form onSubmit={handleSubmit} id='check-in-form'>
          <h2>Register</h2>

          <label for='username' className='form-label'>Username</label>
          <input
            type='text'
            id='username'
            placeholder='Username'
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            className='input-field'
          />

          <label for='email' className='form-label'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='Email'
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className='input-field'
          />

          <label for='password' className='form-label'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            onChange={(e) =>
              setForm({
                ...form, password: e.target.value
              })}
            className='input-field'
          />
          <button type='submit' className='btn'>Register</button>
        </form>
      ) : (
        <form onSubmit={handleLogin} id='login-form'>
          <h2>Login</h2>

          <label for='username' className='form-label'>Username or Email</label>
          <input
            type='text'
            id='username'
            placeholder='Username or Email'
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className='input-field'
          />

          <label for='password' className='form-label'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            onChange={(e) =>
              setForm({
                ...form, password: e.target.value
              })}
            className='input-field'
          />
          <button type='submit' className='btn'>Login</button>
        </form>)}
    </div>
  );
};

export default CheckIn;