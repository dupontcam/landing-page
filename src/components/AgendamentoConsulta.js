import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AgendamentoConsulta() {
  // Defina estados para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [medico, setMedico] = useState('');
  const [dia, setDia] = useState('');
  const [horario, setHorario] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para processar os dados do formulário, como envio para o servidor ou validação
    console.log('Dados do formulário:', { nome, email, cpf, especialidade, medico, dia, horario });
  };

  return (
    <div>
      <h2>Agendamento de Consultas</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
        <select value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} required>
          <option value="">Selecione a Especialidade</option>
          <option value="cardiologia">Cardiologia</option>
          <option value="ortopedia">Ortopedia</option>
          {/* Adicione outras especialidades conforme necessário */}
        </select>
        {/* Adicione outros campos, como médico, dia e horário, da mesma forma */}
        <input type="submit" value="Agendar agora" />
      </form>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}

export default AgendamentoConsulta;
