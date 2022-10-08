import React from 'react'
import './works.css'
import IMG1 from '../../assets/dogs.jpg'
import IMG2 from '../../assets/salud.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Dogs',
    github: 'https://github.com/marianettimatias/PI-Dogs',
    demo: 'https://dogs-app-marianettimatias.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: '+Salud App',
    github: 'https://github.com/marianettimatias/app-clinica',
    demo: 'https://app-clinica.vercel.app/home',
  }
];


function Works() {
  return (
    <section id='works'>
      <h2 className='works_h2'>Proyectos</h2>
      <div className="container portfolio_container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <h3>{title}</h3>
                <div className="portfolio_item-image">
                  <img src={image} alt="" />
                </div>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          }
          )
        }




        {/* 
        <article className='portfolio_item'>
          <h3>Titulo</h3>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <h3>Titulo</h3>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article> */}

      </div >
    </section >
  )
}

export default Works