import { useState } from "react"
import { sendEmail } from "../services/sendEmail.js"


export function useForm () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        sendEmail(e)
        setTimeout(() => {
            setName('')
            setEmail('')
            setMessage('')
        }, 1000);
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    return {name, email, message, handleSubmit, handleName, handleEmail, handleMessage}
}