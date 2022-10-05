import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import {VscTools} from 'react-icons/vsc'
import {MdWorkOutline} from 'react-icons/md'
import {MdOutlineContactPhone} from 'react-icons/md'
import {useState} from 'react'

function Nav() {

  const [activeNav, setActiveNav]= useState('#')

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')}  className= {activeNav==='#'? 'active' :''}><AiOutlineHome /></a>
      {/* <a href="#about" onClick={()=> setActiveNav('#about')} className= {activeNav==='#about'? 'active' :''}> <AiOutlineUser /> </a> */}
      <a href="#skills" onClick={()=> setActiveNav('#skills')} className= {activeNav==='#skills'? 'active' :''}><VscTools/></a>
      <a href="#works" onClick={()=> setActiveNav('#works')} className= {activeNav==='#works'? 'active' :''}><MdWorkOutline/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className= {activeNav==='#contact'? 'active' :''}><MdOutlineContactPhone/></a>
    </nav>
  )
}

export default Nav