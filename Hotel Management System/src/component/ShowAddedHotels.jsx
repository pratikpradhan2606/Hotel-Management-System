import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminDashboardnavbar from './AdminDashboardnavbar'
import Footer from './Footer'

const ShowAddedHotels = () => {
    const navigate = useNavigate()
    const [hoteldata, gethoteldata] = useState([])
    const [hotelName,setHotelName]=useState([])

//   setHotelName=localStorage.getItem('RestaurantName')
//   console.log(hotelName)

    useEffect(() => {
        const hotel = localStorage.getItem('addhotel')
        gethoteldata(JSON.parse(hotel))
    }, [])

    
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
        navigate('/ShowAddedHotels')
    };
   
    return (
        <div>
           <AdminDashboardnavbar/>
            <div >
                <h3 className='text-center'>Available Restaurants</h3>
                <div className="container border p-2">

                    <table class="table table-striped table-hover">
                        <thead>
                            <th scope="col">Restaurant Id</th>
                            <th scope="col">Restaurant Name</th>
                            <th scope="col">Landline No</th>
                            <th scope="col">Restaurant Address</th>
                            <th scope="col">Restaurant Information</th>
                            <th scope="col">status</th>

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
                                                {/* <td>{values.status}</td> */}
                                                {/* <td><button className='btn btn-info' type='submit'>Edit</button></td> */}
                                                <td><button onClick={()=>handleDelete(values.RestaurantId)} className='btn btn-danger' type='submit'>Delete</button></td>
    
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
export default ShowAddedHotels
