import { projects } from "../data.js"

export default function Proyects() {
    return (
        <section id='proyects' data-aos="fade-right">
            <h3 className='proyects-title'><span className="not-highlight">Mis</span> proyectos</h3>
            <div className='proyects'>
                {projects.map(project =>{
                    return(
                        <div key={project.name} className='card'>
                        <img className='card-image' src={project.image} alt={project.name} />
                        <div className="card-content">
                            <p className="card-title">{project.name}</p>
                            <p className="card-description">{project.description}</p>
                            <div className="card-links">
                                <a href={project.deploy} target='_blank'>
                                    <i className="fa fa-link fa-3x" aria-hidden="true"></i>
                                </a>
                                <a href={project.repository} target='_blank'>
                                    <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}