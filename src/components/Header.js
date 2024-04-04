import Image from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
          <div id="title">
            <span><img id="logo" src={Image} alt="logo-clinica" /></span>
          </div>
            <nav>
              <ul>
                  <Link to="/"><li>Home</li></Link>
                  <Link to="/especialidades"><li>Especialidades</li></Link>
                  <Link to="/examesLaboratoriais"><li>Exames Laboratoriais</li></Link>
                  <Link to="/examesDeImagens"><li>Exames de Imagens</li></Link>
                  <Link to="/login" id="fazer-login-btn"><li>Já fez o login?</li></Link>
              </ul>
            </nav>
    </header>
  )
}