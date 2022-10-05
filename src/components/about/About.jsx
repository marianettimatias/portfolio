import React from 'react'
import './about.css'
import ME from '../../assets/foto cv2.png'
import { ImBooks } from 'react-icons/im'
import { VscTools } from 'react-icons/vsc'
import { MdWorkOutline } from 'react-icons/md'

function About() {
  return (
    <section id='about'>
      <h2>Sobre mí</h2>
      

      <div className="container about_container">
        
        {/* <div className="about_me">
          <div className='about_me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div> */}

        

        <div className="about_content">
        <p>
            Hola, mi nombre es Matías soy Ingeniero Industrial y recientemente graduado como Desarrollador Web Full Stack. Soy una persona proactiva, analítica y apasionado por la tecnología. En mis trabajos anteriores participé en proyectos de desarrollo de productos lo cual me ayudó a fortalecer las habilidades de trabajo en equipo y compañerismo.
          </p>
          <div className="about_cards">
            {/* <article className='about_card'>
              <ImBooks className='about_icon' />
              <h5>Estudios</h5>
              <small>Henry Bootcamp</small>
              <br></br>
              <small>Ingeniero Industrial - UNC</small>
            </article> */}
            <article className='about_card'>
              <VscTools className='about_icon' />
              <h5>Skills</h5>
              <small>Full Stack Developer</small>
            </article>
            <article className='about_card'>
              <MdWorkOutline className='about_icon' />
              <h5>Proyectos</h5>
           
            </article>
          </div>
{/* 
       
          <a href="#contact" className='btn btn-primary'>Contactame!</a> */}

        </div>
      </div>
    </section>
  )
}

export default About