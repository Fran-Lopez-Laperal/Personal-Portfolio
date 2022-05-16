import './Home.css'
import mainImg from '../../assets/images/main-image.png'
import mern from '../../assets/images/MERN.png'
import postman from '../../assets/images/postman.png'
import css from '../../assets/images/css.png'
import html from '../../assets/images/html.png'
import jest from '../../assets/images/JEST.png'
import js from '../../assets/images/JS.png'
import docker from '../../assets/images/docker-main.png'
import webpack from '../../assets/images/webpack.png'
import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'



function Home() {
    return (
        <div className='home'>
            <div className='img-mern'>
                <img className='img-mern' src={mern} alt={mern} />
            </div>
            <div className='img-tecs'>
                <img src={postman} alt={postman} />
                <img src={css} alt={css} />
                <img src={html} alt={html} />
                <img src={jest} alt={jest} />
                <img src={js} alt={js} />
                <img src={docker} alt={docker} />
                <img src={webpack} alt={webpack} />
            </div>
            <div className='main-container'>
                <div className='main-img-container'>
                    <img className='main-img' src={mainImg} alt={mainImg} />
                </div>
                <div className="animation-home">
                    <ul className='animation'>
                        <li style={{ color: 'black' }}>FrontEnd</li>
                        <li style={{ color: 'blue' }}>BackEnd</li>
                        <li style={{ color: 'red' }}>FullStack</li>
                    </ul>
                    <p>Development</p>
                </div>
            </div>
            <div className='social-media'>
                <a href='https://github.com/franlopezhack'>
                <img className='social-media-1' src={github} alt={github} />
                </a>                
                <a href='http://www.linkedin.com/in/francisco-josé-lópez-laperal'>
                    <img className='social-media-2' src={linkedin} alt={linkedin} />
                </a>
            </div>
        </div>
    )
}

export default Home