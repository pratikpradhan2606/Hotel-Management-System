import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import UserPanelNavbar from './UserPanelNavbar'

const UserPanel = () => {
  const img1 = require('./hotel.jpg')
  const img = require('./hotel2.jpg')
  return (
    <div>
      <UserPanelNavbar/>  
      {/* <img class="d-block w-100" src={img1} height='500px' width='10px' alt="First slide" /> */}
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">

          <div class="carousel-item active">
            <img src={img} className="d-block w-100 " alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
     <Footer/>
    </div>
  )
}

export default UserPanel