import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {RiBookLine} from "react-icons/ri"
import {RiServiceLine} from "react-icons/ri"
import {AiOutlineMessage} from "react-icons/ai"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setactiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setactiveNav ("#")} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setactiveNav ("#about")}className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setactiveNav ("#experience")}className={activeNav === 'experience' ? 'active' : ''}><RiBookLine/></a>
      <a href="#services" onClick={() => setactiveNav ("#services")}className={activeNav === 'services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contacts" onClick={() => setactiveNav ("#contacts")}className={activeNav === 'contacts' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav