import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import UserPanelNavbar from './UserPanelNavbar'

const CancelledBookings = () => {
    
    const [cancelbookigData, getcancelBookingdata] = useState([])
     //called when hotelbookcancel state will get updated
    useEffect(() => {
        const hotelbookcancel = localStorage.getItem('hotelbookcancel')
        getcancelBookingdata(JSON.parse(hotelbookcancel))
    }, [])

    return (
        <div>
            <UserPanelNavbar/>
            <h3 className='text-center mt-2'>Cancelled Bookings</h3>
            <div className="container border p-3">
                <table class="table table-striped">
                    <thead>
                        <th scope="col">Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Reason To Cancel Booking</th>           
                    </thead>
                    <tbody>
                        {cancelbookigData.map((values) => {
                            return (
                                <tr scope="row">
                                    <td>{values.Cusername}</td>
                                    <td>{values.Cemail}</td>
                                    <td>{values.Creason}</td>    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    )
}
export default CancelledBookings
