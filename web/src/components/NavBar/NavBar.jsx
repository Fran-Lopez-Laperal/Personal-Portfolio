import './NavBar.css'

import { Link } from "react-scroll";
function NavBar() {


    return (
        <>
            <div className="nav-bar">

                <div className='nav-container'>
                    <nav className='menu'>
                        <Link className="fa fa-home" aria-hidden="true" to='home'></Link>
                        <Link className='fa fa-user' to='about-me' ></Link>
                        <Link className="fa fa-laptop"  aria-hidden="true"></Link>
                        <Link className="fa fa-code-fork" aria-hidden="true" to=''></Link>
                        <Link className="fa fa-briefcase" aria-hidden="true" to='proyects'></Link>
                        <Link className="fa fa-phone" aria-hidden="true" to='email'></Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar