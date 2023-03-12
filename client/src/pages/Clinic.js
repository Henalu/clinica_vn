import React from 'react'
import Nav from '../components/Header/Nav'
import PageHeader from '../components/Header/PageHeader'
import img from '../img/chair-clinic.jpg'

const Clinic = () => {
  return (
    <div className='page clinic'>
      <Nav />
      <PageHeader img={img} />
    </div>
  )
}

export default Clinic
