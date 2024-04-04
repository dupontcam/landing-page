import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main>
          <aside>
            <h2><span>Agende uma</span></h2>
            <h2>Consulta</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <form>
              <input type="text" placeholder="nome"/>
              <input type="email" placeholder="E-mail"/>
              <Link to="/agendamento-consulta">
                <input type="submit" value="Agendar agora" />
              </Link> 
            </form>
          </aside>
      </main>
  )
}