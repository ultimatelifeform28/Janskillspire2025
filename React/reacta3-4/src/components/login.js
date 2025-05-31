import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = ({ setAuth })  => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlelogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '123') {
            setAuth(true);
            navigate('/home');
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <form onSubmit={handlelogin}>
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br/>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br/>
                <button type ="submit">Login</button>
            </div>
        </form>
    )
}

export default Login;

