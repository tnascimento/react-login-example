import React from "react";
import Login from "./Login";
import Header from "./Header";

const App = () => {
  const [logado, setLogado] = React.useState(false);

  return (
    <div>
      <Header logado={logado} setLogado={setLogado} />
      <h3>Bem vindo</h3>
      <Login logado={logado} setLogado={setLogado} />
    </div>
  );
};

export default App;