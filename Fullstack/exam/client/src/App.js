import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import AppointmentList from './components/AppointmentList.js';
import DeleteAppointment from './components/DeleteAppointment.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<AppointmentList />} exact />
            <Route path='/delete/:id' element={<DeleteAppointment />} exact />
        </Routes>
  </Router>
);
}

export default App;
