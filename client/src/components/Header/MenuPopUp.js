import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { visibleMenu } from '../../redux/tasks/menuSlice'

const MenuPopUp = ({navDivPosX}) => {

  const menuSlice = useSelector(state => state.menuSlice)
  const dispatch = useDispatch()
  function handleClick (){
    dispatch(visibleMenu())
  }

  return (
    <div style={{ left: navDivPosX }} className={`menu-popup ${menuSlice.active && 'show'}`}>
      <ul>
        <li><NavLink onClick={handleClick} to={'/'} activeclassname="active">Home</NavLink></li>
        <li><NavLink onClick={handleClick} to={'/team'} activeclassname="active">Equipo</NavLink></li>
        <li><NavLink onClick={handleClick} to={'/contact'} activeclassname="active">Contacto</NavLink></li>
        <li><NavLink onClick={handleClick} to={'/services'} activeclassname="active">Tratamientos</NavLink></li>
        <li><NavLink onClick={handleClick} to={'/clinic'} activeclassname="active">Clínica</NavLink></li>
      </ul>
    </div>
  )
}

export default MenuPopUp
