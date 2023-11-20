import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <header class="header">
  <div class="brand">Mochamad Andika Julian</div>
  <nav>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
      <h2 className='header2'>Mochamad Andika Julian</h2>
      <div className='headpar'>Purwadhika JCWDOL01203 Web Development</div>
      <div className="card-container">
        <button className='card'> <a href="#profile" class="button">Profile</a> </button>
        <button className='card'> <a href="#skills" class="button">Skills</a> </button>
        <button className='card'> <a href="#funfacts" class="button">Fun Facts</a> </button>
      </div>
      <div className='separator'></div>

      <h2 className='header2' id='profile'>Profile</h2>
      <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem voluptates similique! Distinctio optio dignissimos vel earum quam, odit fuga recusandae sit rerum corporis illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem voluptates similique! Distinctio optio dignissimos vel earum quam, odit fuga recusandae sit rerum corporis illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem voluptates similique! Distinctio optio dignissimos vel earum quam, odit fuga recusandae sit rerum corporis illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem voluptates similique! Distinctio optio dignissimos vel earum quam, odit fuga recusandae sit rerum corporis illum? </div> <br />
      <div className='separator'></div>

      <h2 className="header2" id='skills'>Skills</h2>
      <div> 
        <img className='skillimg' width={350} height={350} src="https://cdn0-production-images-kly.akamaized.net/JkC1QGO5DZTYTTR5cg6UpSzfjP8=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4103648/original/083149600_1658979625-19305.jpg" alt="" />
        <img className='skillimg' width={350} height={350} src="https://dfcm824dmlg8u.cloudfront.net/wp-content/uploads/2022/03/01_Infografis-Olahraga-Tulang_image-fitur.jpg" alt="" />
        <img className='skillimg' width={350} height={350} src="https://cdn1-production-images-kly.akamaized.net/QobWSAEFxkYLc99PDEV7MS_Yy1Q=/0x47:626x400/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4567993/original/098036900_1694148419-20230908081625__fpdl.in__national-sports-day-illustration_23-2149000617_normal.jpg" alt="" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem voluptates similique! Distinctio optio dignissimos vel earum quam, odit fuga recusandae sit rerum corporis illum? <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem voluptates similique! Distinctio optio dignissimos vel earum quam, odit fuga recusandae sit rerum corporis illum? </div>
      <div className='separator'></div>

      <h2 className="header2" id='funfacts'>Fun Facts</h2>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem voluptates similique! Distinctio optio dignissimos vel earum quam, odit fuga recusandae sit rerum corporis illum? <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem voluptates similique! Distinctio optio dignissimos vel earum quam, odit fuga recusandae sit rerum corporis illum? </p></div>
    </>
  )
}

export default App
