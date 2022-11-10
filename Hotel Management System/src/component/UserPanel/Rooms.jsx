import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AvailableHotels from '../AvailableHotels';
import Footer from '../Footer';
import UserPanelNavbar from './UserPanelNavbar';

const Rooms = () => {
  const navigate = useNavigate();
  //Function to call on click of book hotel button
  const onClickBookHotel = () => {
    navigate('/BookRoom')
  }

  //storing images using require method
  const img1 = require('./img1.jpeg')
  const img2 = require('./img2.jpeg')
  const img3 = require('./img3.jpeg')
  const img4 = require('./img4.jpeg')
  const img5 = require('./img5.jpeg')
  const img6 = require('./img6.jpeg')
  return (
    <>
      <UserPanelNavbar/>
      <AvailableHotels/>
      <div class="container">
        <h4 className='m-3'><i>people also seach for..</i></h4>
        <div class="row row-cols-1 row-cols-md-3 p-lg-2">
          <div class="col p-1">
            <div class="card h-100">
              <img src={img1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Hotel Seven Olive</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p>Price : Rs. 5000</p>
                <button type="button" onClick={onClickBookHotel} class="btn  btn-outline-danger btn-sm p-2">Book Hotel</button>
              </div>
            </div>
          </div>
          <div class="col p-2">
            <div class="card h-100">
              <img src={img2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Hotel Harbour</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p>Price : Rs 1000</p>
                <button type="button" onClick={onClickBookHotel} class="btn  btn-outline-danger btn-sm p-2">Book Hotel</button>
              </div>
            </div>
          </div>
          <div class="col p-2">
            <div class="card h-100">
              <img src={img3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Hotel Crown</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                <p>Price : Rs 5000</p>
                <button type="button" onClick={onClickBookHotel} class="btn  btn-outline-danger btn-sm p-2"> Book Hotel</button>
              </div>
            </div>
          </div>
          <div class="col p-2">
            <div class="card h-100">
              <img src={img4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Lemon Tree Hotel</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                <p>Price : Rs 7000</p>
                <button type="button" onClick={onClickBookHotel} class="btn  btn-outline-danger btn-sm p-2">Book Hotel</button>
              </div>
            </div>
          </div>
          <div class="col p-2">
            <div class="card h-100">
              <img src={img5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Rama International</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p>Price : Rs 8000</p>
                <button type="button" onClick={onClickBookHotel} class="btn  btn-outline-danger btn-sm p-2">Book Hotel</button>
              </div>
            </div>
          </div>
          <div class="col p-2">
            <div class="card h-100">
              <img src={img6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Hotel Ashoka</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p>Price : Rs 5000</p>
                <button type="button" onClick={onClickBookHotel} class="btn  btn-outline-danger btn-sm p-2">Book Hotel</button>
              </div>
            </div>
          </div>
          <div class="col p-2">
            <div class="card h-100">
              <img src={img3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Sea Palace Hotel</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p>Price : Rs 5000</p>
                <button type="button" onClick={onClickBookHotel} class="btn  btn-outline-danger btn-sm p-2">Book Hotel</button>
              </div>
            </div>
          </div><div class="col p-2">
            <div class="card h-100">
              <img src={img1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Krishna Palace Hotel</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p>Price : Rs 3800</p>
                <button type="button" onClick={onClickBookHotel} class="btn  btn-outline-danger btn-sm p-2">Book Hotel</button>
              </div>
            </div>
          </div>
          <div class="col p-2">
            <div class="card h-100">
              <img src={img5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Hotel Taj</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p>Price : Rs 5000</p>
                <button type="button" onClick={onClickBookHotel} class="btn  btn-outline-danger btn-sm p-2">Book Hotel</button>
              </div>
            </div>
          </div>

        </div>
          <Footer/>

      </div>

    </>
  )
}
export default Rooms