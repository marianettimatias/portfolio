import React from 'react'
import './contact.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
      <h2 className='contact_h2'>Contactame!</h2>

      <div className="container contact_container">
        <div className="contact_options">

          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/matias-marianetti/">Conoceme mejor</a>
          </article>

          <article className='contact_option'>
            <BsGithub className='contact_option-icon'/>
            <h4>Github</h4>
            <a href="https://github.com/marianettimatias">Mirá mis proyectos!</a>
          </article>

        </div>

        <form action="">
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