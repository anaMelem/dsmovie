import { ReactComponent as GithubIcon } from './assets/img/GithubIcon.svg'
function App() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="http://github.com/anamelem" target="_blank" rel="noreferrer">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/anamelem</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default App;
