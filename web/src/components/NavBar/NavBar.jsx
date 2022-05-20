import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div className="nav-bar">
                <div className='nav-container'>
                    <Link to='/'>
                        <h1>Fran</h1>
                    </Link>
                    <input type="checkbox" id="menu-bar" />
                    <label className="fa fa-bars" htmlFor="menu-bar"></label>
                    <nav className='menu'>
                        <Link to="/about-me"><strong>Sobre Mí</strong></Link>
                        <Link to="/academic-data"><strong>Datos académicos</strong></Link>
                        <Link to="/my-proyects"><strong>Mis Proyectos</strong></Link>
                        <Link to='/applies-list'><strong>Mis Datos</strong></Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar