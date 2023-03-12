import React from 'react'
import { Link } from 'react-router-dom';

const VertImgTextBtn = (props) => {

  const { title, img1, text1, img2, text2, img3, text3, btnText, btnLink } = props.content;

  return (
    <div className='vert-img-text-btn'>
      <h2>{title}</h2>
      <div className='container'>
        <div className='section'>
          <div className='img-container' style={{ backgroundImage: `url(${img1})` }}></div>
          <p>{text1}</p>
        </div>
        <div className='section'>
          <div className='img-container' style={{ backgroundImage: `url(${img2})` }}></div>
          <p>{text2}</p>
        </div>
        <div className='section'>
          <div className='img-container' style={{ backgroundImage: `url(${img3})` }}></div>
          <p>{text3}</p>
        </div>
      </div>
      <Link to={btnLink}><button>{btnText}</button></Link>
    </div>
  )
}

export default VertImgTextBtn
