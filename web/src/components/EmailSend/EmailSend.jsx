import emailjs from 'emailjs-com'

import './EmailSend.css'

function EmailSend() {


    function handleSubmit(e) {
        e.preventDefault()

        emailjs.sendForm('service_k7khs1e', 'template_x6k8b7e', e.target, 'luKgETKyzUKU2Ynic')
            .then(res => {
                alert('se ha enviado correctamente');
                console.log(res)
            })
    }

    return (
        <div className='send'>
            <form className="" onSubmit={handleSubmit}>

                <div className="">
                    Nombre
                    <input type="text" name="nombre" />
                </div>

                <div className="">
                    Email
                    <input type='text' name="email" />
                </div>

                <div className="">
                    Mensaje
                    <input type="text" name="mensaje" />
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