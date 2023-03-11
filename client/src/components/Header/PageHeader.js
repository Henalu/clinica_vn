import React from 'react'
// import img from '../../img/chair-clinic.jpg'

const PageHeader = ({ img }) => {
  return (
    <div className='pageHeader'>
      <div className='img-container' style={{ backgroundImage: `url(${img})` }}>
      </div>
    </div>
  )
}

export default PageHeader
