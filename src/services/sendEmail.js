import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"

const EMAIL_SERVICE_KEY = 'service_6n1g5ug'
const EMAIL_TEMPLATE_KEY = 'template_pq7t16l'
const PUBLIC_KEY = 'M3Bj2wy194z-IY7dS'

export const sendEmail = async (e) => {
    await emailjs.sendForm(EMAIL_SERVICE_KEY, EMAIL_TEMPLATE_KEY, e.target, PUBLIC_KEY)
        .then((result) => {
            Swal.fire({
                title: `Solicitud enviada ${result.text}`,
                text: "Te estare contactando a la brevedad",
            })
        }, (error) => {
            Swal.fire({
                title: "Error al enviar contacto",
                text: error.text,
                icon: 'error',
            })
        })
}