import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <div className="App">
        <Router>
          <AppRoutes />
      </Router>
    </div>
  );
}

export default App;