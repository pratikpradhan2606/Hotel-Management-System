import { Link } from "react-router-dom";

import React from 'react'

function UserPanelNavbar() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
      <a className="navbar-brand" href="#">Welcome to User Panel {localStorage.getItem('UserName')}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
        
          <li className="nav-item">
            <Link className="nav-link" to="/Rooms">Rooms</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/BookRoom">Book a Room</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/BookedHotels">Booked Rooms</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/CancelledBookings">Cancelled Bookings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Log Out</Link>
          </li>
        </ul>
      </div>
    </nav></div>
  )
}

export default UserPanelNavbar