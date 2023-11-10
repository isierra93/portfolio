export default function Header() {

    return (
        <header className='header'>
            <div className='header-img'>
                <img className='img-perfil' src="src/assets/perfil.jpeg" alt="A picture of me created by IA" />
            </div>
            <div className='header-content'>
                <h2>Hola, soy Iván Sierra.</h2>
                <h3>Desarrollador Full Stack MERN</h3>
                <div>
                    <h4>Currículum</h4>
                    <a href="/favicon.png" target='_blank' className='curriculum'>
                        <i className="fa fa-cloud-download fa-2x" aria-hidden="true"></i>
                    </a>
                </div>
                <ul className='header-list'>
                    <li className='header-list-li'>
                        <a href="https://www.linkedin.com/in/isierra93/" target='_blank'>
                            <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className='header-list-li'>
                        <a href="https://github.com/isierra93" target='_blank'>
                            <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className='header-list-li'>
                        <a href="#form">
                            <i className="fa fa-envelope-o fa-3x" aria-hidden="true" ></i>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}