import React, { useRef } from 'react'
import './contact.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import emailjs from 'emailjs-com'



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0hfoh5c', 'template_y2lvg78', form.current, '2usp547788T0dk_II')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      alert('Mensaje enviado')
      e.target.reset();
    }


    return (
      <section id='contact'>
        <h2 className='contact_h2'>Contactame!</h2>

        <div className="container contact_container">
          <div className="contact_options">

            <article className='contact_option'>
              <BsLinkedin className='contact_option-icon' />
              <h4>Linkedin</h4>
              <a href="https://www.linkedin.com/in/matias-marianetti/">Conoceme mejor</a>
            </article>

            <article className='contact_option'>
              <BsGithub className='contact_option-icon' />
              <h4>Github</h4>
              <a href="https://github.com/marianettimatias">Mirá mis proyectos!</a>
            </article>

          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Nombre' required />
            <input type="emailS" name='email' placeholder='Tu email' />
            <textarea name="message" id="7" cols="30" rows="10" placeholder='Mensaje...' required></textarea>
            <button type='submit' className='btn btn-primary'>Enviar mensaje</button>

          </form>

        </div>

      </section>
    )
  }

  export default Contact