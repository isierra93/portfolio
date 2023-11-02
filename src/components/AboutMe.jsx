const techs = [
    {
        name: 'HTML',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png',
        color: '#df6428'
    },
    {
        name: 'CSS',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png',
        color: '#2664e1'
    },
    {
        name: 'SASS',
        img: 'https://w7.pngwing.com/pngs/206/645/png-transparent-sass-logos-and-brands-line-filled-icon.png',
        color: '#bf6292'
    },
    {
        name: 'BOOTSTRAP',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png',
        color: '#8613ec'
    },
    {
        name: 'MATERIAL UI',
        img: 'https://v4.mui.com/static/logo.png',
        color: '#06a8ee'
    },
    {
        name: 'JAVASCRIPT',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png',
        color: '#e5d31e'
    },
    {
        name: 'REACT',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
        color: '#5dceea'
    },
    {
        name: 'MONGOB',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Mongodb-icon.svg/640px-Mongodb-icon.svg.png',
        color: '#67a647'
    },
    {
        name: 'FIREBASE',
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png',
        color: '#ecc030'
    },
    {
        name: 'GIT',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Git_format.png/640px-Git_format.png',
        color: '#060908'
    },
    {
        name: 'NODE',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png',
        color: '#3c833c'
    },
    {
        name: 'EXPRESS',
        img: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png',
        color: '#dfba16'
    },
    {
        name: 'MYSQL',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/640px-MySQL_textlogo.svg.png',
        color: '#06738a'
    },
]

export default function AboutMe() {
    return (
        <section id='aboutMe'>
            <p>
                Mi enfoque esta en crear experiencias de usuario intuitivas y
                receptivas que mejoren la interacción entre las personas y la tecnologia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eius tenetur quaerat aperiam reprehenderit excepturi at, doloribus id maiores facere dolores error numquam velit enim aspernatur dolore? Sunt, atque aliquid!
            </p>
            <div className='skill-container'>
                <h4>Skills</h4>
                <ul className='skill-list'>
                    {techs.map(tech => {
                        return (
                            <li>
                                <figure>
                                    <img className='skill-img' src={tech.img} alt={tech.name} />
                                </figure>
                                <b style={{ color: tech.color }}>{tech.name}</b>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}