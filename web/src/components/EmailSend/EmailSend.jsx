import emailjs from 'emailjs-com'
import { useState } from 'react'
import { useNavigate } from "react-router"


import './EmailSend.css'

function EmailSend() {

    const [form, setForm] = useState(false)

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        emailjs.sendForm('service_k7khs1e', 'template_x6k8b7e', e.target, 'luKgETKyzUKU2Ynic')
            .then(() => {
                navigate('/')
            })
    }




    return (
        <>
            <div className='email'>
                <div className='email-text'>
                    <p>Sí quiere hacerme una pregunta o ponerte en contacto conmigo puede hacerlo directamente
                        enviándome un emial </p>
                </div>

                

                {form ? (
                    <form className="" onSubmit={handleSubmit}>

                        <div className="form-name">
                            <input type="text" name="nombre" id='nombre' placeholder='  Tú Nombre' />
                        </div>

                        <div className="form-email">
                            <input type='text' name="email" id='nombre' placeholder='  example@example.com' />
                        </div>

                        <div className="form-message">
                            <input type="text" name="mensaje" id='mensaje' placeholder='  Déjame tú mensaje...' />
                        </div>

                        <button type="submit">
                            Enviar Correo
                        </button>
                    </form>
                )
                    :
                    <button className='email-btn' onClick={() => setForm(!form)}>
                        enviar email
                    </button>  
                }


            </div>
        </>
    )
}

export default EmailSend