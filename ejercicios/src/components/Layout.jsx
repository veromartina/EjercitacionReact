const Layout = ({ children }) => {
    return (
      <div className="layout">
        <header className="header">
          <nav className="nav">
            <img src="/vite.svg" />
            <h1>Bienvenidos a mi App</h1>
          </nav>
        </header>
  
        <main className="main">{children}</main>
  
        <footer className="footer"> Realizado por Vero</footer>
      </div>
    );
  };
  
  export default Layout;
  