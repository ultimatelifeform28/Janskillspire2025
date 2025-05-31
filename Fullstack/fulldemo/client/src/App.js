//import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import EditBookForm from './components/EditBookForm';
function App() {
 

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Router>
        <Routes>
          <Route path='/' element={<BookList />} exact />
          <Route path="/edit/:id" element={<EditBookForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
