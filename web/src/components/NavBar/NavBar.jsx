import './NavBar.css'

import { Link } from "react-scroll";
function NavBar() {
    return (
        <>
            <div className="nav-bar">
                <div className='nav-container'>
                    <Link to='home'>
                        <p className='letters'>FLL  💻</p>
                    </Link>
                    <input type="checkbox" id="menu-bar" />
                    <label className="fa fa-bars" htmlFor="menu-bar"></label>
                    <nav className='menu'>
                        <Link to=''>Sobre Mí</Link>
                        <Link to='email'>Contacto</Link>
                        <Link to='proyects'>Mis proyectos</Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar