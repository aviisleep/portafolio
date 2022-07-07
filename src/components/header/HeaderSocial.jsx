import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {AiFillBehanceSquare} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/javier-moreno-8ba5b2141/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/aviisleep" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://behance.com/aviisleep" target="_blank" rel="noreferrer"><AiFillBehanceSquare/></a>
        <a href="https://instagram.com/aviisleep" target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://wa.link/3tcwci" target="_blank" rel="noreferrer"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocial