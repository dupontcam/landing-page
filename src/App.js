import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;