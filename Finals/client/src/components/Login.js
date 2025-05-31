import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // External styling

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === 'trainer' && form.password === 'fit123') {
      navigate('/home');
    } else {
      alert('Invalid login. Try trainer / fit123');
    }
  };

  return (
    <div className="login-container">
      <div className="login-overlay">
        <div className="login-box">
          <h1>Fitness Redefined</h1>
          <p>Discover Your Best Self</p>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

