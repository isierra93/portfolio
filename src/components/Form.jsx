import emailjs from '@emailjs/browser'

export default function Form() {

    const sendEmail = async (e) => {
        e.preventDefault();
    
        await emailjs.sendForm('service_6n1g5ug', 'template_pq7t16l', e.target, 'M3Bj2wy194z-IY7dS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div className='form-container'>
            <form onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Mensaje</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}