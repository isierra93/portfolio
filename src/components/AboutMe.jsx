import { techs } from "../data.js"

export default function AboutMe() {
    return (
        <section id='aboutMe'  data-aos="fade-up" data-aos-once="true" >
            <p className="not-highlight">
                Me caracterizo por ser dedicado, responsable y trabajar en
                equipo.<span className="highlight"> Habilidad para
                organización, detalles y liderazgo de grupos. </span>
                Cuento con gran motivación para avanzar en mi carrera
                profesional ya que mi objetivo es prosperar como
                desarrollador.
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