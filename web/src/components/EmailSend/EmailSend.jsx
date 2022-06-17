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

            <div className='email'>
                <p className='letters-head-section'>Quieres que hablemos?</p>
                <div className='email-container'>

                    <div className='email-text'>
                        <p>Sí quieres hacerme una pregunta o ponerte en contacto conmigo puedes hacerlo directamente
                            enviándome un emial </p>
                    </div>



                    {form ? (
                        <form className="form-message" onSubmit={handleSubmit}>
                            <div>

                            </div>
                            <div className="form">
                                <input type="text" name="nombre" id='nombre' placeholder='  Tú Nombre' />
                            </div>

                            <div className="form">
                                <input type='text' name="email" id='nombre' placeholder='  example@example.com' />
                            </div>

                            <div className="form-text">
                                <input type="text" name="mensaje" id='mensaje' placeholder='  Déjame tú mensaje...' />
                            </div>

                            <button type="submit" id='email-send'>
                                Enviar mensaje
                            </button>
                        </form>
                    )
                        :
                        <button className='email-btn' onClick={() => setForm(!form)}>
                            Escribir mensaje
                        </button>

                    }

                </div>
            </div>

    )
}

export default EmailSend