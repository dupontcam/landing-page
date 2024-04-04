import Main from "./Main";

export default function CadastroUsuario(){
  return(
    <main>
      <form action="/cadastroUsuario" method="post" >
        <h2>Cadastro de Usuário</h2>
        <input type="text" name="name" placeholder="Nome" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="cpf" name="cpf" placeholder="CPF" required />
        <input type="text" name="phone" placeholder="Celular" required />
        <input type="password" name="password" placeholder="Senha" required />
        <input type="submit" value="Cadastrar" />
      </form>
    </main>
  )
}