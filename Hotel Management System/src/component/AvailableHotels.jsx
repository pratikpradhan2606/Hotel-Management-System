import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'

const AvailableHotels = () => {
    const navigate = useNavigate()
    const [hoteldata, gethoteldata] = useState([])

    useEffect(() => {
        const hotel = localStorage.getItem('addhotel')
        gethoteldata(JSON.parse(hotel))
    }, [])

    const onClickBookHotel = () => {
        navigate('/BookRoom')
      }

    const handleDelete = (val) => {
        const res = window.confirm("Are You Sure Want To Delete..?");
        if (res) {
            hoteldata.forEach((hoteldata) => {
                if(hoteldata.RestaurantId==val){
                    hoteldata.status=0
                }
            }
            );
            localStorage.setItem("addhotel", JSON.stringify(hoteldata));
        }
        navigate('/CancelBooking')
    };
    return (
        <div>
           
            <div >
                <h3 className='text-center mt-2'>Available Restaurants</h3>
                <div className="container border p-2">

                    <table class="table table-striped table-hover">
                        <thead>
                            <th scope="col">Restaurant Id</th>
                            <th scope="col">Restaurant Name</th>
                            <th scope="col">Landline No</th>
                            <th scope="col">Restaurant Address</th>
                            <th scope="col">Restaurant Information</th>
                           

                        </thead>
                        {
                            <tbody>
                                
                                {hoteldata.map((values) => {
                                    
                                {
                                        if(values.status===1)
                                            {
                                            return(
                                                <tr scope="row">
                                                <td>{values.RestaurantId}</td>
                                                <td>{values.RestaurantName}</td>
                                                <td>{values.RestaurantLandlineNo}</td>
                                                <td>{values.RestaurantAddress}</td>
                                                <td>{values.RestaurantInformation}</td>
                                               
                                                {/* <td><button className='btn btn-info' type='submit'>Edit</button></td> */}
                                                <td><button onClick={onClickBookHotel} className='btn btn-success'>Book Hotel</button></td>
                                                <td><button onClick={()=>handleDelete(values.RestaurantId)} className='btn btn-danger' type='submit'>Cancel</button></td>

                                                </tr>
                                            )

                                        }
                                    }     
                                })}
                            </tbody>
                        }
                    </table>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
export default AvailableHotels
