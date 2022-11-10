import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BookedHotels from './BookedHotels';
import ShowAddedHotels from '../ShowAddedHotels';
import UserPanelNavbar from './UserPanelNavbar';
import Footer from '../Footer';

function BookRoom() {

    //declaring state variables
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState('')
    const [room, setroom] = useState('')
    const [bookingId, setBookingId] = useState('')
    const navigate = useNavigate();

    const onChangebookingId = (e) => {
        setBookingId(e.target.value);
    };
    const onChangeuname = (e) => {
        setusername(e.target.value);
    };
    const onChangeemail = (e) => {
        setemail(e.target.value)
    };
    const onChangemobile = (e) => {
        setmobile(e.target.value)
    };
    const onChangeroom = (e) => {
        setroom(e.target.value)
    };

    //function to call on click of book hotel button
    function onSubmit() {
        const hotel = JSON.parse(localStorage.getItem("hotelbook") || "[]");
        const hotelbook = {
            bookingId: bookingId,
            username: username,
            email: email,
            mobile: mobile,
            room: room,
            status: 1
        };
        hotel.push(hotelbook);
        localStorage.setItem("hotelbook", JSON.stringify(hotel));
        window.alert("You have successfully booked hotel")
        navigate('/BookedHotels')
    }

    return (
        <div>
            <UserPanelNavbar />
            <div className=" col d-flex justify-content-center m-2">
                <div className="border border-success p-5">
                    <h3>Book a Room </h3>
                    <label className="m-1 row">Booking Id : </label>
                    <input type='text' value={bookingId} onChange={onChangebookingId} className="m-1 row form-control" placeholder='Booking Id' required></input>
                    <label className="m-1 row">Hotel Name : </label>
                    <input type='text' value={username} onChange={onChangeuname} className="m-1 row form-control" placeholder='Booking Name' required></input>
                    <label className="m-1 row">Mail ID : </label>
                    <input type='email' value={email} onChange={onChangeemail} className="m-1 row form-control" placeholder='Email Id' required></input>
                    <label className="m-1 row">People :</label>
                    <input type='phone' value={mobile} onChange={onChangemobile} className="m-1 row form-control" placeholder='No. of people  ' required></input>
                    <label className="m-1 row">Rooms : </label>
                    <input type='number' value={room} onChange={onChangeroom} className="m-1 row form-control" placeholder='Rooms' required></input>
                    {/* <label className="m-1 row">Price per room : </label>
                    <input type='number' value={price} onChange={onChangeprice} className="m-1 row form-control" placeholder='Enter Address' required></input> */}
                    <div className="text-center">
                        <button className="row mt-2 btn btn-success row " onClick={onSubmit} type='submit'>Book Hotel</button>
                    </div>
                    
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default BookRoom