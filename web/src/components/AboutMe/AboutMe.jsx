import './AboutMe.css'


function AboutMe() {
    return (
        <div className='about-me'>
            <p className='letters-head-section'>Sobre mí</p>
            <section className='section-about-me'>

                <div id='card-about-me1' className='card-about-me'>
                    <h2 className='letters-about-section'>Quien soy?</h2>
                </div>

                <div id='card-about-me2' className='card-about-me'>
                    <h2 className='letters-about-section'>Mi formación</h2>
                </div>

                <div id='card-about-me3' className='card-about-me'>
                    <h2 className='letters-about-section'>Mis hobbies</h2>
                </div>
                
            </section>

        </div>
    )
}

export default AboutMe