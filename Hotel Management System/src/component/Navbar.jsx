import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import AddRestaurant from './OwnerRegistration';
import Login from './Login';
import RestaurantData from './RestaurantData.json';
import ShowUserData from './ShowUserData';
import Footer from './Footer';

function Navbar() {
  const img1 = require('./UserPanel/hotel.jpg')
  const img2 = require('./UserPanel/hotel2.jpg')
  const img3 = require('./UserPanel/hotel3.jpg')
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
        <a className="navbar-brand" href="#">The Imperial Trivago</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to='/adminLogin'>Add Restaurant </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user-registration">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">

          <div class="carousel-item active">
            <img src={img2} className="d-block w-100 " alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..." />
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
      <div>
        <Footer/>
      </div>
    </div>


  )
}

export default Navbar