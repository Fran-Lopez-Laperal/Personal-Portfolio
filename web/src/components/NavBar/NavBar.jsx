import './NavBar.css'

import { Link } from "react-scroll";
function NavBar() {


    return (
        <>
            <div className="nav-bar">

                <div className='nav-container'>
                    <nav className='menu'>
                        <Link className="fa fa-home" aria-hidden="true" style={{ fontSize: '40px' }} to='home'></Link>
                        <Link className='fa fa-user' style={{ fontSize: '40px' }} to='about-me' ></Link>
                        <Link className="fa fa-laptop"  aria-hidden="true" style={{ fontSize: '40px' }}></Link>
                        <Link className="fa fa-code-fork" aria-hidden="true" style={{ fontSize: '40px' }} to=''></Link>
                        <Link className="fa fa-briefcase" aria-hidden="true" style={{ fontSize: '40px' }} to='proyects'></Link>
                        <Link className="fa fa-phone" aria-hidden="true" style={{ fontSize: '40px' }} to='email'></Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar