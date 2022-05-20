import emailjs from 'emailjs-com'
import { useNavigate } from "react-router"


import './EmailSend.css'

function EmailSend() {

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        emailjs.sendForm('service_k7khs1e', 'template_x6k8b7e', e.target, 'luKgETKyzUKU2Ynic')
            .then(() => {
                navigate('/')
            })
    }

    return (
        <div className='send'>
            <form className="" onSubmit={handleSubmit}>

                <div className="">
                    Nombre
                    <input type="text" name="nombre" id='nombre' />
                </div>

                <div className="">
                    Email
                    <input type='text' name="email" id='nombre'/>
                </div>

                <div className="">
                    Mensaje
                    <input type="text" name="mensaje" di='mensaje' />
                </div>

                <hr />
                <button type="submit">
                    Enviar Correo
                </button>
            </form>
        </div>
    )
}

export default EmailSend