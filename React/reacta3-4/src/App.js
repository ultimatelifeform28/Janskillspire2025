//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
//import Student from './components/Student'; // Importing the Student component
//import Students from './components/Students';
//import ElementRenderer from './components/ElementRenderer';
//import ParentComponent from './components/ParentComponent';
//import EventHandling from './components/EventHandling';
//import RenderingList from './components/RenderingList';
//import ConditionalRenderer from './components/ConditionalRenderer';
//import A11 from './components/A11';
//import A12 from './components/A12';
//import Timer from './components/Timer';
//import Food from './components/Food';
//import Vacation from './components/Vacation';
//import RandomNumberGenerator from './components/RandomNumberGenerator';
//import Counter from './components/Counter';
//import A14 from './components/A14';
import Login from './components/login';
//import Dashboard from './components/Dashboard';
import Home from './components/home';


function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setAuth={setAuthenticated} />}
        />
        <Route
          path="/home"
          element={<Home isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
