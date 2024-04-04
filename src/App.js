import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Main />
          <Footer />
      </Router>
    </div>
  );
}

export default App;