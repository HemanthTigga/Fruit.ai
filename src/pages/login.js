// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>
        By signing in you are agreeing our <a href="/terms">Term and privacy policy</a>
      </p>

      <div className="tabs">
        <a href="#login" className="active">Login</a>
        <a href="#register">Register</a>
      </div>

      <form className="login-form">
        <div className="input-container">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className="fas fa-eye"></i>
        </div>

        <div className="extra-options">
          <label>
            <input type="checkbox" /> Remember password
          </label>
          <a href="/forgot-password" className="forgot-password">Forget password</a>
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      <p>or connect with</p>
      <div className="social-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fab fa-linkedin"></i>
      </div>

      <div className="fingerprint">
        <i className="fas fa-fingerprint"></i>
      </div>
    </div>
  );
};

export default Login;
