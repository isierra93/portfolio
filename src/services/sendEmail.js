import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"

const EMAIL_SERVICE_KEY = import.meta.env.VITE_EMAIL_SERVICE_KEY
const EMAIL_TEMPLATE_KEY = import.meta.env.VITE_EMAIL_TEMPLATE_KEY
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

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