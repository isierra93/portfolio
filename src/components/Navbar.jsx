import { useState } from "react"

export default function Navbar() {

    function darkMode (){
        if(darkLink == 'link'){
            setdarkLink('link-dark-mode')
            setdarkIcon('fa fa-sun-o')
            let body = document.querySelector(":root")
            body.classList.add('dark-mode')
        }else{
            setdarkLink('link')
            setdarkIcon('fa fa-moon-o')
            let body = document.querySelector(":root")
            body.classList.remove('dark-mode')
        }
    }

    const [darkLink, setdarkLink] = useState ('link')
    const [darkIcon, setdarkIcon] = useState('fa fa-moon-o')

    return (
        <nav className='navBar'>
            <ul className='navBar-list'>
                <li><a className={darkLink} href="#aboutMe">Sobre mi</a></li>
                <li><a className={darkLink} href="#proyects">Proyectos</a></li>
                <li><a className={darkLink} href="#form" >Contacto</a></li>
                <li><a className={darkLink} href="#"><i onClick={darkMode} className={darkIcon} aria-hidden="true"></i></a></li>
            </ul>
        </nav>
    )
}
