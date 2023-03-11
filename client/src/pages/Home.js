import React from 'react'
import MenuPopUp from '../components/Header/MenuPopUp'
import Nav from '../components/Header/Nav'
import PageHeader from '../components/Header/PageHeader'
import img from '../img/chair-clinic.jpg'

const Home = () => {
  return (
    <div className='home'>
      <Nav/>
      <PageHeader img={img}/>
      <MenuPopUp/>
    </div>
  )
}

export default Home
