import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import external CSS for styling

function Login() {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [form, setForm] = useState({ username: '', password: '' }); // State to store form inputs

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // Update the corresponding field dynamically
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    
    // Basic hardcoded login validation
    if (form.username === 'trainer' && form.password === 'fit123') {
      navigate('/home'); // Navigate to home page if credentials match
    } else {
      alert('Invalid login. Try trainer / fit123'); // Show error if login fails
    }
  };

  return (
    <div className="login-container"> {/* Outer wrapper for layout */}
      <div className="login-overlay"> {/* Optional overlay effect */}
        <div className="login-box"> {/* Main login box */}
          <h1>Fitness Redefined</h1> {/* Title */}
          <p>Discover Your Best Self</p> {/* Subtitle */}
          
          <form onSubmit={handleSubmit} className="login-form"> {/* Form with submit handler */}
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
            <button type="submit">Login</button> {/* Submit button */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login; // Export component for use elsewhere



