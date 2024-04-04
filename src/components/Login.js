import { Link } from 'react-router-dom';

export default function Login(){
  return (
    <main id='containerLogin'>
      <form action="/login" method="post">
        <h2>Login</h2>
        <input type="text" name="username" placeholder="Nome de usuário" required />
        <input type="password" name="password" placeholder="Senha" required />
        <input type="submit" value="Entrar" />
        <Link to="/cadastro-usuario">
          <input type="submit" value="Cadastrar Usuário" />
        </Link>            
      </form>
    </main>
  )
  }