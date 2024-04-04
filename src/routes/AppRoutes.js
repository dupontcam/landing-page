import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Especialidades from '../components/Especialidades';
import ExamesLaboratoriais from '../components/ExamesLaboratoriais';
import ExamesDeImagens from '../components/ExamesDeImagens';
import Login from '../components/Login';
import CadastroUsuario from '../components/CadastroUsuario';
import AgendamentoConsulta from '../components/AgendamentoConsulta';
import Footer from '../components/Footer';
import About from '../components/About';
import PoliticaDePrivacidade from '../components/PoliticaDePrivacidade';
import TermosDeUso from '../components/TermosDeUso';

function AppRoutes() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/examesLaboratoriais" element={<ExamesLaboratoriais />} />
        <Route path="/examesDeImagens" element={<ExamesDeImagens />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/agendamento-consulta" element={<AgendamentoConsulta />} />
        <Route path="/about" element={<About />} />
        <Route path="/politica" element={<PoliticaDePrivacidade />} />
        <Route path="/termos" element={<TermosDeUso />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default AppRoutes;
