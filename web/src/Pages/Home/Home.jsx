import './Home.css'
import mainImg from '../../assets/images/main-image.png'


function Home() {
    return (
        <>
        <div className='main-img-container'>
        <img className='main-img' src={mainImg} alt={mainImg} />
        </div>
            <div className="animation-home">
                <ul>
                    <li style={{color: 'black'}}>FrontEnd</li>
                    <li style={{color: 'blue'}}>BackEnd</li>
                    <li style={{color: 'red'}}>FullStack</li>
                </ul>
                <p>Development</p>
            </div>

        </>
    )
}

export default Home