import React from 'react'
import CardTextImgBtn from '../components/Content/CardTextImgBtn'
import VertImgTextBtn from '../components/Content/VertImgTextBtn'
import Nav from '../components/Header/Nav'
// import PageHeader from '../components/Header/PageHeader'
import femaleDentist from '../img/dentist-girl.jpg'
import kid from '../img/dentist-kid.jpg'
import doctor from '../img/doctor-profile.jpg'
import nurse from '../img/nurse.jpg'
// import Carrusel from '../components/Content/Carousel'
// import Footer from '../components/Info/Footer'

const Home = () => {

  const cardTextImgBtn_content = {
    title: "Lorem ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    btnText: "Read More",
    btnLink: "/services",
    img: femaleDentist
  }

  const vertImgTextBtn_content = {
    title: "Lorem ipsum",
    img1: kid,
    text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img2: doctor,
    text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img3: nurse,
    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    btnText: "Read More",
    btnLink: "/services",
  }

  return (
    <div className='page home'>
      <Nav/>
      {/* <Carrusel/>    */}
      {/* <PageHeader/> */}
      <CardTextImgBtn content={cardTextImgBtn_content} />
      <VertImgTextBtn content={vertImgTextBtn_content} />
      {/* <Footer/>    */}
    </div>
  )
}

export default Home
