import React, { useState, useRef } from 'react';
import "./Login.css";
const LoginSignUpPage = ({ handleLogin, handleSignUp }) => {
  const [usr, setUsr] = useState(false); // State to track user radio selection
  const [org, setOrg] = useState(false); // State to track organization radio selection
  // State for login form
  const [loginCredentials, setLoginCredentials] = useState({
    usernameOrEmail: '',
    password: '',
  });

  // State for sign-up form
  const [signUpData, setSignUpData] = useState({
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: '',
  });

  // Handle change for login form
  const handleLoginChange = (e) => {
    setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value });
  };

  // Handle change for sign-up form
  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  // Handle radio button change for user type
  const handleUserTypeChange = (e) => {
    const { id } = e.target;
    if (id === 'user') {
      setUsr(true);
      setOrg(false);
    } else if (id === 'org') {
      setUsr(false);
      setOrg(true);
    }
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginCredentials);
    handleLogin(loginCredentials);
  };

  // Handle sign-up form submission
  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (signUpData.password !== signUpData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (usr && org) {
      alert('Sign up as either a User or an Organization, not both!');
      return;
    }
    if (!usr && !org) {
      alert('Please select either a User or an Organization!');
      return;
    }

    const updatedSignUpData = {
      ...signUpData,
      type: usr ? 'usr' : 'org',
    };

    console.log('Sign-up data:', updatedSignUpData);
    handleSignUp(updatedSignUpData);
  };
  const containerRef = useRef(null);

  const handleSignUpClick = () => {
    containerRef.current.classList.add('active');
  };

  const handleLoginClick = () => {
    containerRef.current.classList.remove('active');
  };

  return (
    <div className="container1 d-flex flex-column m-auto" ref={containerRef}>
      <div className="form-container sign-up">
        <form className='form-login'>
          <h1 className="create-account-heading">Create Account</h1>
          <span>or use your email for registration</span>
          <input id="username"
          className="form-control rounded-pill"
          name="username"
          value={signUpData.username}
          placeholder='User Name'
          onChange={handleSignUpChange}
          required />

          <input type="email"
          className="form-control rounded-pill"
          id="email"
          name="email"
          value={signUpData.email}
          onChange={handleSignUpChange}
          placeholder='Email'
          required />

          <input type="tel"
          className="form-control rounded-pill"
          id="phoneNumber"
          name="phoneNumber"
          value={signUpData.phoneNumber}
          placeholder='Phone number'
          onChange={handleSignUpChange}
          required />

          <input type="password"
          className="form-control rounded-pill"
          id="password"
          name="password"
          value={signUpData.password}
          onChange={handleSignUpChange}
          placeholder='Password'
          required />

          <input type="password"
          className="form-control rounded-pill"
          id="confirmPassword"
          name="confirmPassword"
          value={signUpData.confirmPassword}
          placeholder='Confirm password'
          onChange={handleSignUpChange}
          required />

          <div className="container-for-usrOrg">
          <div className='d-flex flex-row justify-content-start'>
          <input type="radio"
          id="user"
          name="userType"
          checked={usr}
          onChange={handleUserTypeChange}/>
          <label htmlFor="user" className='m-2'>User</label>
          </div>

          <div className='d-flex flex-row justify-content-start'>
          <input
          type="radio"
          id="org"
          name="userType"
          checked={org}
          onChange={handleUserTypeChange}
          
          />
          <label htmlFor="org" className='m-2'>Organization</label>
          </div>
          </div>
          <button type="button" onClick={handleSignUpSubmit}>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form className='form-login'>
          <h1>Sign In</h1>
          <span>or use your email for login</span>
          <input type="text"
            className="form-control rounded-pill"
            id="usernameOrEmail"
            name="usernameOrEmail"
            value={loginCredentials.usernameOrEmail}
            placeholder='Email Address'
            onChange={handleLoginChange}
            required />

          <input type="password"
            className="form-control rounded-pill"
            id="password"
            name="password"
            value={loginCredentials.password}
            onChange={handleLoginChange}
            placeholder='Password'
            required />
          <a href="#">Forget Your Password?</a>
          <button type="button" onClick={handleLoginSubmit}>Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back !</h1>
            <p>Enter your personal details to use all of our features</p>
            <button className="hidden" id="login" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome, Friend!</h1>
            <p>Enter your personal details to create an account</p>
            <button className="hidden" id="register" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpPage;
