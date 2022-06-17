import './Proyects.css'
import bike_locker from '../../assets/images/bike-locker.png'
import rallye from '../../assets/images/placa.png'
import mern from '../../assets/images/MERN.png'
import postman from '../../assets/images/postman.png'
import bootstrap from '../../assets/images/bootstrap-social-logo.png'

function Proyects() {
    return (
        <div className="proyects" id="proyects">
            <p className='letters-head-section'>Proyectos</p>
            <div className='cards-container'>
                {/* <div className='card-container'>
                    <p> CYBER SPACE</p>
                    <div className='card'>
                        <img src={bike_locker} alt={bike_locker} />
                        <hr />
                        <div className='card-body'>

                        </div>
                    </div>
                    <button className='btn-git'>
                        <a className='btn-git-a' href="/" style={{ textDecoration: 'none', color: 'white' }}>Source</a>
                    </button>
                </div> */}

                <div>
                    <p>BICKE LOCKER</p>
                    <div className='card'>
                    <div className='img-card'>
                    <img src={bike_locker} alt={bike_locker} />
                    </div>                      
                        <hr />
                        <div className='card-body'>
                            <img src={mern} alt={mern} />
                            <img src={postman} alt={postman} />
                            <img id='bs' src={bootstrap} alt={bootstrap} />
                        </div>
                    </div>
                    <button className='btn-git'>
                        <a href="https://github.com/franlopezhack/SHOP-BIKES" className='btn-git-a' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Repo GitHub</a>
                    </button>
                    <button className='btn-git'>
                        <a href="https://iron-bike-shop.herokuapp.com/" className='btn-git-a' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Link</a>
                    </button>
                </div>

                <div>
                    <p> RALLYE DE PONTEVEDRA</p>
                    <div className='card'>
                        <div className='img-card'>
                            <img src={rallye} alt={rallye} />
                        </div>

                        <hr />
                        <div className='card-body'>
                            <img src={mern} alt={mern} />
                            <img src={postman} alt={postman} />
                            <img id='bs' src={bootstrap} alt={bootstrap} />
                        </div>
                    </div>
                    <button className='btn-git'>
                        <a href="https://github.com/franlopezhack/rallye-pontevedra" className='btn-git-a' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Repo GitHub</a>
                    </button>
                    <button className='btn-git'>
                        <a href="https://www.rallyedepontevedra.com/" target="_blank" rel="noreferrer" className='btn-git-a' style={{ textDecoration: 'none', color: 'white' }}>Link</a>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Proyects