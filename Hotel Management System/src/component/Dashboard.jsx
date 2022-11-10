import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminDashboardnavbar from './AdminDashboardnavbar'
import AdminNavbar from './AdminNavbar'
import Footer from './Footer'

function Dashboard() {
  const img = require('./UserPanel/hotel2.jpg')
  
  return (
    <div>
      <AdminDashboardnavbar />
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

export default Dashboard