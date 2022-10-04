import React from 'react'
import CV from '../../assets/Matias Marianetti CV Developer.pdf'

function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Descarga mi CV</a>
      <a href='#contact' className='btn btn-primary'>Contactame!</a>
    </div>
  )
}

export default CTA