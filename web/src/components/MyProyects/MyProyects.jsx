import './MyProyects.css'

function MyProyects() {

    let animado = document.querySelectorAll('.animada')

    function mostrarScroll() {
        let scrollTop = document.documentElement.scrollTop;
        for (let i = 0; i < animado.length; i++) {
            let altura = animado[i].offsetTop;
            if (altura - 300 < scrollTop) {
                animado[i].style.opacity = 1;
                animado[i].classList.add('mostrarArriba')
            }
        }
    }

    window.addEventListener('scroll', mostrarScroll)




    return (
        <>
            <div className="proyects">
                <div className='contenedor'>

                    <div className="caja animada ">PROYECTO 1</div>
                    <div className="caja animada">PROYECTO 2</div>

                    <div className="caja animada">PROYECTO 3</div>
                    <div className="caja animada">PROYECTO 4</div>

                </div>
            </div>
            
        </>


    )
}

export default MyProyects