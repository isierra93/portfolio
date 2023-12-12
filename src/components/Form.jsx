import { useForm } from '../hooks/useForm.js'

export default function Form() {
    const { name, email, message, handleSubmit, handleName, handleEmail, handleMessage } = useForm()

    return (
        <div id='form'>
            <h4 className='form-title'>Contactame</h4>
            <form className='form-container' onSubmit={handleSubmit}>
                <label htmlFor='user_name' >Nombre:</label>
                <input
                    onChange={handleName}
                    value={name}
                    required
                    type="text"
                    id='user_name'
                    name="user_name" />
                <label htmlFor='user_email' >Email:</label>
                <input
                    onChange={handleEmail}
                    value={email}
                    required
                    type="email"
                    id='user_email'
                    name="user_email" />
                <label htmlFor='message' >Mensaje:</label>
                <textarea
                    onChange={handleMessage}
                    value={message}
                    id='message'
                    name="message" />
                <button className='button-send' type="submit" >Enviar</button>
            </form>
        </div>
    )
}