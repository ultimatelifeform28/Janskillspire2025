import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

function Home({ isAuthenticated, setAuth }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth(false);
        navigate('/login');
    };

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;