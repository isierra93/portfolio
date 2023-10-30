import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <nav className='navBar'>
        <ul className='navBar-list'>
          <li><a className='link' href="#aboutMe">Sobre mi</a></li>
          <li><a className='link' href="#proyects">Proyectos</a></li>
          <li className='link'>Contacto</li>
          <li className='link'>ES</li>
          <li className='link'>COLORTHEME</li>
        </ul>
      </nav>
      <header className='header'>
        <div className='header-img'>
          <img className='img-perfil' src="src/assets/perfil.jpeg" alt="A picture of me created by IA" />
        </div>
        <div className='header-content'>
          <h2>Hola, soy Iván Sierra.</h2>
          <h3>Desarrollador Full Stack MERN</h3>
          <a href="/favicon.png" target='_blank'>Descargar CV</a>
          <ul className='header-list'>
            <li className='header-list-li'>
              <a href="LINKEDIN" target='_blank'>
              <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
              </a>
            </li>
            <li className='header-list-li'>
              <a href="https://github.com/isierra93" target='_blank'>
              <i className="fa fa-github fa-3x"  aria-hidden="true"></i>
              </a>
            </li>
            <li className='header-list-li'>
              <a href="MAIL" target='_blank'>
              <i class="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <section id='aboutMe'>
        <p>
          Mi enfoque esta en crear experiencias de usuario intuitivas y
          receptivas que mejoren la interacción entre las personas y la tecnologia.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eius tenetur quaerat aperiam reprehenderit excepturi at, doloribus id maiores facere dolores error numquam velit enim aspernatur dolore? Sunt, atque aliquid!
        </p>
        <div className='skill-container'>
          <h4>Skills</h4>
          <ul className='skill-list'>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>BOOTSTRAP</li>
            <li>MATERIAL UI</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>MONGOB</li>
            <li>FIREBASE</li>
            <li>GIT</li>
            <li>NODE</li>
            <li>EXPRESS</li>
            <li>MYSQL</li>
          </ul>
        </div>
      </section>
      <section id='proyects'>
        <h3>Mis proyectos</h3>
        <div className='proyect-card'>
          <h3>Weather App</h3>
          <img className='img-project' src="https://camo.githubusercontent.com/0e19d555fcf7944eeb9720b7a84f93f47e281ba2c8f516134d9ef566d5143d21/68747470733a2f2f692e706f7374696d672e63632f5871567a5a7962742f436170747572612e706e67" alt="" />
          <p>Aplicacion que permite obtener los datos del clima actual ingresando la ciudad deseada. Construida con Vite + React.</p>
          <div className='proyect-links'>
            <a href="Github">Github</a>
            <a href="Deploy">Deploy</a>
          </div>
        </div>
        <div className='proyect-card'>
          <h3>Weather App</h3>
          <img className='img-project' src="https://camo.githubusercontent.com/0e19d555fcf7944eeb9720b7a84f93f47e281ba2c8f516134d9ef566d5143d21/68747470733a2f2f692e706f7374696d672e63632f5871567a5a7962742f436170747572612e706e67" alt="" />
          <p>Aplicacion que permite obtener los datos del clima actual ingresando la ciudad deseada. Construida con Vite + React.</p>
          <div className='proyect-links'>
            <a href="Github">Github</a>
            <a href="Deploy">Deploy</a>
          </div>
        </div>
        <div className='proyect-card'>
          <h3>Weather App</h3>
          <img className='img-project' src="https://camo.githubusercontent.com/0e19d555fcf7944eeb9720b7a84f93f47e281ba2c8f516134d9ef566d5143d21/68747470733a2f2f692e706f7374696d672e63632f5871567a5a7962742f436170747572612e706e67" alt="" />
          <p>Aplicacion que permite obtener los datos del clima actual ingresando la ciudad deseada. Construida con Vite + React.</p>
          <div className='proyect-links'>
            <a href="Github">Github</a>
            <a href="Deploy">Deploy</a>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <div>
          Made with <span className="love">♥</span> by Ivan
        </div>
      </footer>
    </>
  )
}

export default App
