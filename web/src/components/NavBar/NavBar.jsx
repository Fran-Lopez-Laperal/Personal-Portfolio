import './NavBar.css'


function NavBar() {
    return (
        <>
            <div className="nav-bar">
            <div className='nav-container'>
            <h1>Fran</h1>
                <input type="checkbox" id="menu-bar" />
                <label className="fa fa-bars" htmlFor="menu-bar"></label>
                <nav className='menu'>
                    <a href="/"><strong> Sobre mí</strong></a>
                    <a href="/"><strong>Mi CV</strong></a>
                    <a href="/"><strong>Datos académicos</strong></a>
                    <a href="/"><strong>Algo más</strong></a>
                </nav>
            </div>
            </div>
        </>
    )
}

export default NavBar