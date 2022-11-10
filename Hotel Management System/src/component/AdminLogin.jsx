import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer';

function AdminLogin() {

  //fetching registration values
  const adminname = localStorage.getItem('UserName');
  const adminpassword = localStorage.getItem('Userpassword')

  //Declaring use state variables
  const [aname, setaName] = useState('')
  const [apassword, setapassword] = useState('')
  const navigate = useNavigate();

  //setting current state value
  const onChangeUName = (e) => {
    setaName(e.target.value);
  };
  const onChangeupassword = (e) => {
    setapassword(e.target.value);
  };

  //function to call after on click of login button 
  const onSubmit = () => {
    if (adminname === aname && adminpassword === apassword) {
      window.alert("Login Successfull..!")
      navigate('/Dashboard')
    }
    else {
      window.alert("Login Failed..!")
    }
  }

  return (
    <div><div className=" col d-flex justify-content-center m-4">
      <div className="border border-info p-5">
        <h3 className='text-center'>Admin Login </h3><br/>
        <label className="m-1 row">Admin name : </label>
        <input type='text' value={aname} onChange={onChangeUName} className="m-1 row form-control" placeholder='Enter Admin-name' required></input>
        <label className="m-1 row">Password :</label>
        <input type='password' value={apassword} onChange={onChangeupassword} className="m-1 row form-control" placeholder='Enter Password  ' required></input>
        <div className="text-center">
          <button className="row mt-2 btn btn-info row " onClick={onSubmit} type='submit'>Login</button>
        </div>
        <br/>
        <h6>Don't have account? <Link to="/OwnerRegistration"> Sign Up</Link></h6>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default AdminLogin