import React from 'react'
import { Link } from 'react-router-dom'

const CardTextImgBtn = (props) => {
    const { title, text, img, btnText, btnLink } = props.content

    return (
        <div className='card-text-img-btn'>
            <div className='img-container' style={{ backgroundImage: `url(${img})` }}>
                <div className='img-layer'></div>
            </div>
            <div className='text-container'>
                <article>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </article>
                <Link to={btnLink}><button>{btnText}</button></Link>
            </div>
        </div>
    )
}

export default CardTextImgBtn
