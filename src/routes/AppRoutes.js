import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Especialidades from '../components/Especialidades';
import ExamesLaboratoriais from '../components/ExamesLaboratoriais';
import ExamesDeImagens from '../components/ExamesDeImagens';
import Footer from '../components/Footer';
import About from '../components/About';
import PoliticaDePrivacidade from '../components/PoliticaDePrivacidade';
import TermosDeUso from '../components/TermosDeUso';
import Contato from '../components/Contato';

function AppRoutes() {
  return (
    
    <React.Fragment>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/examesLaboratoriais" element={<ExamesLaboratoriais />} />
          <Route path="/examesDeImagens" element={<ExamesDeImagens />} />
          <Route path="/about" element={<About />} />
          <Route path="/politica" element={<PoliticaDePrivacidade />} />
          <Route path="/termos" element={<TermosDeUso />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      <Footer />
    </React.Fragment>
    
  );
}

export default AppRoutes;
