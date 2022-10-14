import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
// import ME from '../../assets/foto cv2.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (

    <header>
      <div className="container header__container">
        <h1>Matías Marianetti</h1>
        <h5 className="text-light">Full Stack Developer | Ingeniero Industrial</h5>
        <p className='header__p'>

          Hola, mi nombre es Matías soy Ingeniero Industrial y recientemente graduado como Desarrollador Web Full Stack. Soy una persona proactiva, analítica y apasionado por la tecnología. En mis trabajos anteriores participé en proyectos de desarrollo de productos lo cual me brindo mucha experiencia en la gestión del tiempo y el trabajo en equipo.
          <br />
          Soy nuevo en el mundo IT, pero en HENRY, tuve la suerte de trabajar varios proyectos usando muchas tecnologías como #JavaScript #React #Redux #CSS #Git #Node #Sequelize #PostgreSQL.
        </p>

        <HeaderSocials />
        {/* <div className='me'>
          <img src={ME} alt="me" />
        </div> */}
        <CTA />
        {/* <a href="#contact" className='scroll_down'>Scroll Down</a> */}

      </div>

    </header>
  )
}

export default Header