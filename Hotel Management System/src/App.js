import './App.css';
import Login from './component/Login';
import Registration from './component/Registration';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/Navbar';
import AdminLogin from './component/AdminLogin';
import OwnerRegistration from './component/OwnerRegistration';
import Dashboard from './component/Dashboard';
import ShowUserData from './component/ShowUserData';
import UserPanel from './component/UserPanel/UserPanel';
import Rooms from './component/UserPanel/Rooms';
import BookRoom from './component/UserPanel/BookRoom';
import BookedHotels from './component/UserPanel/BookedHotels';
import CancelBooking from './component/UserPanel/CancelBooking';
import CancelledBookings from './component/UserPanel/CancelledBookings';
import AddRestaurants from './component/AddRestaurants';
import ShowAddedHotels from './component/ShowAddedHotels';
import AvailableHotels from './component/AvailableHotels';
import AdminNavbar from './component/AdminNavbar';
import Footer from './component/Footer';
import Counter from './component/Counter';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/user-registration' element={<Registration />}></Route>
        <Route path='/OwnerRegistration' element={<OwnerRegistration />}></Route>
        <Route path='/adminLogin' element={<AdminLogin />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        <Route path='/AddRestaurants' element={<AddRestaurants />}></Route>
        <Route path='/ShowUserData' element={<ShowUserData />}></Route>
        <Route path='/UserPanel' element={<UserPanel />}></Route>
        <Route path='/Rooms' element={<Rooms />}></Route>
        <Route path='/BookRoom' element={<BookRoom />}></Route>
        <Route path='/BookedHotels' element={<BookedHotels />}></Route>
        <Route path='/CancelBooking' element={<CancelBooking />}></Route>
        <Route path='/CancelledBookings' element={<CancelledBookings />}></Route>
        <Route path='/ShowAddedhotels' element={<ShowAddedHotels />}></Route>
        <Route path='/AvailableHotels' element={<AvailableHotels/>}></Route>
        <Route path='/AdminNavbar' element={<AdminNavbar/>}></Route>
        <Route path='/Footer' element={<Footer/>}></Route>
        <Route path='/counter' element={<Counter/>}></Route>
      </Routes>
      {/* <AdminLogin/> */}

    </div>
  );
}

export default App;
