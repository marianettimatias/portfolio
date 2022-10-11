import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    <footer>
     <a href="#" className='footer_logo'>Matías Marianetti</a>
    
    <div className="footer_socials">
      <a href="https://www.linkedin.com/in/matias-marianetti/" target='_blank'><BsLinkedin/> </a>
      <a href="https://github.com/marianettimatias" target='_blank'><BsGithub/></a>
    </div>

   <div className="footer_copyright">
    <small>&copy; Matías Marianetti</small>
   </div>



    </footer>
  )
}

export default Footer