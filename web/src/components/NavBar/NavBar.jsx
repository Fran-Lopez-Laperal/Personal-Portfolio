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
                        <Link style={{ fontSize: '40px', fontFamily: 'Courier, monospace', textDecoration: 'underline', color: 'rgb(3, 189, 154)' }} to='about-me'>Sobre Mí</Link>
                        <Link style={{ fontSize: '40px', fontFamily: 'Courier, monospace', textDecoration: 'underline' }} to='proyects'><small>Mis proyectos</small> </Link>
                        <Link style={{ fontSize: '40px', fontFamily: 'Courier, monospace', textDecoration: 'underline', color: 'rgb(3, 189, 154)' }} to='email'>Contacto</Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar