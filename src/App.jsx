import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <Navbar />
      <header>
        <h2>Hola, soy Iván Sierra.</h2>
        <h3>Desarrollador Full Stack MERN</h3>
        <a href="#">Descargar CV</a>
        <img src="src/assets/perfil.jpeg" alt="A picture of me created by IA" />
        <div>
          <ul>
            <li>
              <a href="LINKEDIN" target='_blank'>
                <i>Linkedin</i>
              </a>
            </li>
            <li>
              <a href="GITHUB" target='_blank'>
                <i>Github</i>
              </a>
            </li>
            <li>
              <a href="MAIL" target='_blank'>
                <i>Mail</i>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <section id='aboutMe'>
        Mi enfoque esta en crear experiencias de usuario intuitivas y
        receptivas que mejoren la interacción entre las personas y la tecnologia.
        <div>
          <h4>Skills</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>BOOTSTRAP</li>
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
        <div>
          <h3>Weather App</h3>
          <img src="https://camo.githubusercontent.com/0e19d555fcf7944eeb9720b7a84f93f47e281ba2c8f516134d9ef566d5143d21/68747470733a2f2f692e706f7374696d672e63632f5871567a5a7962742f436170747572612e706e67" alt="" />
          <p>Aplicacion que permite obtener los datos del clima actual ingresando la ciudad deseada. Construida con Vite + React.</p>
          <a href="Github">Github</a>
          <a href="Deploy">Deploy</a>
        </div>
      </section>
      <footer>
        <div>
          Made with <span className="love">♥</span> by Ivan
        </div>
      </footer>
    </>
  )
}

export default App
