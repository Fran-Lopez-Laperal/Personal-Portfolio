import './AboutMe.css'
import bike from '../../assets/images/bike.jpeg'



function AboutMe() {



    return (
        <div className='about-me'>
            <p className='letters-head-section'>Sobre mí</p>
            <section className='section-about-me'>

                <div id='card-about-me1' className='card-about-me'>
                    <h2 className='letters-about-section'>Quien soy?</h2>
                    <div className='list-container'>
                        <p><span style={{ color: 'white' }}>Junior </span> Full Stack MERN</p>
                    </div>
                    <div className='letters-about-section-text'>
                        <p> Apasionado por:</p>
                        <p><span>👨🏻‍💻</span> La programación,</p>
                        <p><span>⚙️</span>La tecnologia, </p>
                        <p><span>🏔️</span>El deporte al aire libre!</p>

                    </div>

                    <div id='btn-about-me' className='btn-about-me'>
                        <button>Saber más</button>
                    </div>
                </div>



                <div id='card-about-me2' className='card-about-me'>
                    <h2 className='letters-about-section'>Mi formación</h2>
                    <div className='list-container'>
                        <ul className='list-skill'>
                            <li> <span>💻</span> -WEB DEVEOPMENT BOOTCAMP MERN</li>
                            <li className='skill-sport'> <span>🤸🏼‍♂️</span>- CS ACTIVIDADES FÍSICAS Y DEPORTIVAS</li>
                        </ul>
                    </div>
                    <div className='btn-about-me'>
                        <button>Saber más</button>
                    </div>
                </div>


                <div className='container-card'>
                    <img src={bike} alt={bike} />
                    <div id='card-about-me3' className='card-about-me'>
                        <h2 className='letters-about-section'>Mis hobbies</h2>
                        <div className='list-container'>
                            <ul className='list-hobbies'>
                                <li > <span>🚵🏼</span> - CICLISMO</li>
                                <li > <span>🎣</span> - PESCA DEPORTIVA</li>
                                <li> <span>✈️</span> - VIAJAR</li>
                            </ul>
                        </div>
                        <div className='btn-about-me'>
                            <button>Saber más</button>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutMe