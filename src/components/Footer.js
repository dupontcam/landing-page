import { Link } from "react-router-dom";

export default function Footer(){
  return (
          <footer>
            <p>&copy; 2024 - Todos os direitos reservados</p>
            <p>Entre em contato pelo e-mail: contato@exemplo.com</p>
            <nav>
              <ul>
                <li><Link to="/termos">Termos de uso</Link></li>
                <li><Link to="/politica">Política de privacidade</Link></li>
                <li><Link to="/about">Sobre</Link></li>
              </ul>
            </nav>
          </footer>
  )
}