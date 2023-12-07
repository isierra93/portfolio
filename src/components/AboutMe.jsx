import { techs } from "../data.js"

export default function AboutMe() {
    return (
        <section id='aboutMe' data-aos="fade-left">
            <p className="not-highlight">
            También, me apasiona mucho las peliculas y los videojuegos.<span className="highlight"> Siempre estoy curioso por aprender más cuando se trata de nuevas tecnologías y código creativo. </span> 
            Me encanta ser una persona que resuelve problemas y poder ayudar a otras personas con mis webs, dándoles más credibilidad y visibilidad a sus negocios.
            </p>
            <div className='skill-container'>
                <h4>Skills</h4>
                <ul className='skill-list'>
                    {techs.map(tech => {
                        return (
                            <li key={tech.img} data-aos="zoom-in-up" data-aos-delay="100">
                                <figure>
                                    <img className='skill-img' style={tech.imgSize} src={tech.img} alt={tech.name} />
                                </figure>
                                <b className="skill-name" style={{ color: tech.color }}>{tech.name}</b>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}