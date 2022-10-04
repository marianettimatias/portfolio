import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/foto cv2.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
   
    <header>
      <div className="container header__container">
        <h5>Hola! Soy</h5>
        <h1>Matías Marianetti</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="me" />         
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header