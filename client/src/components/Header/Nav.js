import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { visibleMenu } from '../../redux/tasks/menuSlice'
import MenuPopUp from './MenuPopUp'

const Nav = () => {

  const navDivRef = useRef(null);
  const [navDivPosX, setNavDivPosX] = useState(0);
  const dispatch = useDispatch()

  const handleResize = () => {
    const posX = navDivRef.current.getBoundingClientRect().x;
    setNavDivPosX(posX);
  };

  function handleClick() {
    dispatch(visibleMenu())
    handleResize()
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navDivRef]);

  return (
    <nav>
      <div className='nav-title-container'>
        <h1 className='nav-title'>Clinica <span>viéitez núñez</span></h1>
      </div>
      <div ref={navDivRef}>
        <Link to={'/contact'}><h2 className='nav-getintouch'>Pedir Cita</h2></Link>
        <span onClick={handleClick}><AiOutlineMenu /></span>
      </div>
      <MenuPopUp navDivPosX={navDivPosX} />
    </nav>
  )
}

export default Nav
