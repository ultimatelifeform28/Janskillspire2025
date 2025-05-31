import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import ClientLists from './components/ClientList';
import AddClient from './components/AddClient';
import EditClient from './components/EditClient';
import DeleteClient from './components/DeleteClient';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ClientLists/>} /> 
        <Route path="/AddClient" element={<AddClient />} />
        <Route path="/edit/:id" element={<EditClient />} />
        <Route path="/delete/:id" element={<DeleteClient />} />
      </Routes>
    </Router>
  );
}

export default App;
