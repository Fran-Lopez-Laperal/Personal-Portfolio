import './AboutMe.css'


function AboutMe() {



    return (
        <div className='about-me'>
            <p className='letters-head-section'>Sobre mí</p>
            <section className='section-about-me'>

                <div id='card-about-me1' className='card-about-me'>
                    <h2 className='letters-about-section'>Quien soy?</h2>
                    <div className='list-container'>
                        <p>Desarrollador Junior Full Stack...</p>
                    </div>
                    <div id='btn-about-me' className='btn-about-me'>
                        <button>Saber más</button>
                    </div>

                </div>



                <div id='card-about-me2' className='card-about-me'>
                    <h2 className='letters-about-section'>Mi formación</h2>
                    <div className='list-container'>
                        <ul className='list-skill'>
                            <li id='skill-dev' style={{ fontSize: '25px' }}> <span style={{ fontSize: '30px' }}>💻</span> -BOOTCAMP  WEB DEVELOPER MERN</li>
                            <li style={{ fontSize: '25px' }}> <span style={{ fontSize: '40px' }}>🤸🏼‍♂️</span>- CS ACTIVIDADES FÍSICAS Y DEPORTIVAS</li>
                        </ul>
                    </div>
                    <div className='btn-about-me'>
                        <button>Saber más</button>
                    </div>

                </div>


                <div className='container-card'>
                    <div id='card-about-me3' className='card-about-me'>
                        <h2 className='letters-about-section'>Mis hobbies</h2>
                        <div className='list-container'>
                            <ul className='list-hobbies'>
                                <li style={{ fontSize: '25px' }}> <span style={{ fontSize: '40px' }}>🚵🏼</span> - CICLISMO</li>
                                <li style={{ fontSize: '20px' }}> <span style={{ fontSize: '40px' }}>🎣</span> - PESCA DEPORTIVA</li>
                                <li style={{ fontSize: '25px' }}> <span style={{ fontSize: '40px' }}>✈️</span> - VIAJAR</li>
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