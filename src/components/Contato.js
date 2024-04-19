export default function Contato() {
  return(
    <main>
      <div class="container-contato">
          <h1>Entre em Contato</h1>
          <div class="contact-form">
              <form action="#" method="post">
                  <div class="form-group">
                      <label for="name">Nome:</label>
                      <input type="text" id="name" name="name" required/>
                  </div>
                  <div class="form-group">
                      <label for="email">E-mail:</label>
                      <input type="email" id="email" name="email" required/>
                  </div>
                  <div class="form-group">
                      <label for="message">Mensagem:</label>
                      <textarea id="message" name="message" required></textarea>
                  </div>
                  <div class="form-group">
                      <input type="submit" value="Enviar"/>
                  </div>
                </form>
            </div>
      </div>
    </main>
  )
}