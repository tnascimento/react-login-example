import React from "react";

const Login = (props) => {
  const [login, setLogin] = React.useState("");
  const [senha, setSenha] = React.useState("");

  function logar() {
    if (login !== "" && senha !== "") {
      props.setLogado(true);
    } else {
      props.setLogado(false);
    }
  }

  if (props.logado) {
    <p>Logado com sucesso!</p>;
  } else
    return (
      <>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          id="login"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <button onClick={logar}>Entrar</button>
      </>
    );
};

export default Login;
