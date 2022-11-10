import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark ">
    <a className="navbar-brand" href="#">Welcome To Admin Panel {localStorage.getItem('UserName')}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to='/AddRestaurants'>Add Restaurant </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to='/Login'>Log in </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">Log Out</Link>
        </li>
      </ul>
    </div>
  </nav>
</div>
  )
}

export default AdminNavbar