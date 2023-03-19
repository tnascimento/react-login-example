const Header = ({ logado, setLogado }) => {
  function logout() {
    setLogado(false);
  }

  if (!logado) return null;

  return (
    <header>
      <ul>
        <li>Item de Menu 1</li>
        <li>Item de Menu 2</li>
        <li>
          <a href="#" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
