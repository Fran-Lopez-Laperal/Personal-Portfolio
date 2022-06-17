import './Home.css'
import mainImg from '../../assets/images/main-image.png'
import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'




function Home() {
    return (
        <div className='home'>
            {/* <div className='social-media'>
                <a href='https://github.com/franlopezhack'>
                    <img className='social-media-1' src={github} alt={github} />
                </a>
                <a href='http://www.linkedin.com/in/francisco-josé-lópez-laperal'>
                
                    <img className='social-media-2' src={linkedin} alt={linkedin} />
                </a>
                <div>
                <Curriculum />
            </div>
            </div> */}
            <div className='main-container'>
                <div className='info-name'>
                    <div className='name-head'>
                        <small>Hola, soy </small>
                        <h1>Francisco </h1>
                        <h1>López Laperal</h1>
                    </div>
                    <div className="animation-home">
                        <ul className='animation'>
                            <li>FrontEnd</li>
                            <li>BackEnd</li>
                            <li>FullStack</li>
                        </ul>
                        <p>Development</p>

                    </div>
                    <div className='links-home'>
                        <button className='btn-home'>Ver proyectos </button>
                        <a className='btn-media' href="https://github.com/franlopezhack">
                            <button>
                                <img className='media' src={github} alt={github} />
                            </button>
                        </a>
                        <a className='btn-media-1' href='http://www.linkedin.com/in/francisco-josé-lópez-laperal'>
                            <button className='media'>
                                <img src={linkedin} alt={linkedin} />
                            </button>
                        </a>
                    </div>
                </div>


                <div className='main-img-container'>
                    <img className='main-img animate__animated animate__fadeInLeft animate__delay-1s' src={mainImg} alt={mainImg} />
                </div>
                <div></div>

            </div>
        </div>
    )
}

export default Home