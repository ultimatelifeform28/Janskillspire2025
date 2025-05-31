import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostManager from './components/PostManager';
import UserManager from './components/UserManager';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Router>
      <nav>
        {/* Navigation links for Users and Posts */}
        <Link to="/">Users</Link> | <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
        {/* Home route shows UserManager */}
        <Route path="/" element={<UserManager />} />
        {/* User detail route */}
        <Route path="/users/:id" element={<UserDetail />} />
        {/* Posts route shows PostManager */}
        <Route path="/posts" element={<PostManager />} />
      </Routes>
    </Router>
  );
}

export default App;
