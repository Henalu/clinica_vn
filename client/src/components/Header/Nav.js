import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <div className='nav-title-container'>
        <h1 className='nav-title'>Clinica <span>viéitez núñez</span></h1>
      </div>
      <div>
        <h2 className='nav-getintouch'>Pedir Cita</h2>
        <span><AiOutlineMenu /></span>
      </div>
    </nav>
  )
}

export default Nav
