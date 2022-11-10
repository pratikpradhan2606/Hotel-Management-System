import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import validator from 'validator'
function Registration() {

    const [userId, setuserId] = useState('')
    const [username, setUserName] = useState('')
    const [emailId, setemailId] = useState('')
    const [mobileNo, setmobileNo] = useState('')
    const [address, setaddress] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const onChangeuserId = (e) => {
        setuserId(e.target.value);
    };
    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    };
    const onChangeeMailId = (e) => {
        setemailId(e.target.value)
    };
    const onChangeMobileNo = (e) => {
        setmobileNo(e.target.value)
    };
    const onChangeAddress = (e) => {
        setaddress(e.target.value)
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    };

    function onSubmit() {
        if (validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) 
          {
        localStorage.setItem('UserId', userId)
        localStorage.setItem('UserName', username)
        localStorage.setItem('UserEmail', emailId)
        localStorage.setItem('Usermobile', mobileNo)
        localStorage.setItem('Useraddress', address)
        localStorage.setItem('Userpassword', password)
        window.alert("Registration Successful")
        navigate('/Login')
          }
          else {
            window.alert(' Please set a Strong Password')
          }

    }

    return (
        <div>
            <div className=" col d-flex justify-content-center m-4">
                <div className="border border-info p-5">
                    <h3 className='text-center'>User Registration </h3><br />
                    <label className="m-1 row">User Id : </label>
                    <input type='number' value={userId} onChange={onChangeuserId} className="m-1 row form-control" placeholder='Enter user-ID' required></input>
                    <label className="m-1 row">User Name : </label>
                    <input type='text' value={username} onChange={onChangeUserName} className="m-1 row form-control" placeholder='Enter User name' required></input>
                    <label className="m-1 row">Mail Id :</label>
                    <input type='mail' value={emailId} onChange={onChangeeMailId} className="m-1 row form-control" placeholder='Enter Mail Id  ' required></input>
                    <label className="m-1 row">Mobile No : </label>
                    <input type='number' value={mobileNo} onChange={onChangeMobileNo} className="m-1 row form-control" placeholder='Enter Mobile No' required></input>
                    <label className="m-1 row">Address : </label>
                    <input type='text' value={address} onChange={onChangeAddress} className="m-1 row form-control" placeholder='Enter Address' required></input>
                    <label className="m-1 row">Password :</label>
                    <input type='password' value={password} onChange={onChangePassword} className="m-1 row form-control" placeholder='Enter Password  ' required></input>
                    <br /><div className="text-center">
                        <button className="row mt-2 btn btn-info row " onClick={onSubmit} type='submit'>Register</button>
                    </div>

                </div>

            </div>
            <br></br>
            <br></br>
            <br />
            <Footer />


        </div>
    )
}

export default Registration