import './NavBar.css'

import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
    return (
        <>
            <div className="nav-bar">
                <div className='nav-container'>
                    <Link to='/'>
                        <p className='letters'>FLL</p>
                    </Link>
                    <input type="checkbox" id="menu-bar" />
                    <label className="fa fa-bars" htmlFor="menu-bar"></label>
                    <nav className='menu'>
                        <Link to='email'><strong>Sobre Mí</strong></Link>
                        <Link activeClass="active"
                            to="list"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}><strong>Lista</strong></Link>
                        <Link to='email'><strong>Contacto</strong></Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar