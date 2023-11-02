export default function Navbar() {
    return (
        <nav className='navBar'>
            <ul className='navBar-list'>
                <li><a className='link' href="#aboutMe">Sobre mi</a></li>
                <li><a className='link' href="#proyects">Proyectos</a></li>
                <li className='link'>Contacto</li>
                <li className='link'>ES</li>
                <li className='link'><i className="fa fa-sun-o" aria-hidden="true"></i></li>
            </ul>
        </nav>
    )
}