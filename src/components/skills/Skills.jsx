import React from 'react'
import './skills.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

function Skills() {
  return (
    <section id='skills'>
      <h2 className='skills_h2'>Skills</h2>

      <div className="container experience_container">

        <div className="experience_frontend">
          <h3>Frontend Development</h3>

          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 >HTML</h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 >CSS</h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 >Javascript</h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 >React</h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 >Redux</h4>
              </div>
            </article>

          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 >Node JS</h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 >Express</h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 >Postgress</h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4 >Axios</h4>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills