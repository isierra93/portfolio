import perfil from '/profile-min.jpg'
import CV from '/Ivan Sierra - Curriculum.pdf'

export default function Header() {

    return (
        <header className='header animate__animated animate__lightSpeedInLeft'>
            <div className='header-img'>
                <img className='img-perfil' src={perfil} alt="A picture of me" />
            </div>
            <div className='header-content'>
                <h2 className='header-content-title'>Hola, soy Iván Sierra.</h2>
                <h3 className='animation-write'>Desarrollador Full Stack.</h3>
                <div>
                    <h4>Currículum</h4>
                    <a href={CV} target='_blank' className='curriculum'>
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