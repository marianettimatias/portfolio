import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

function HeaderSocials() {
    return (
        <div className='header_socials'>
            <a href='https://www.linkedin.com/in/matias-marianetti/'target='_blank' > <BsLinkedin /></a>
            <a href='https://github.com/marianettimatias'target='_blank' > <BsGithub /></a>
        </div>
    )
}

export default HeaderSocials