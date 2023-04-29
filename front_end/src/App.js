import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Registration from './Components/Registration';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Centralcomponent from './Components/Centralcomponent';
import Home1 from './pages/Home1';
import React from "react";
import ReactDOM from "react-dom";
import Available_dr from './pages/Available_dr';
import Tokenbooking from './Components/Tokenbooking';
import Addingdr from './pages/Admin/Addingdr';
import Admin from './pages/Admin/Admin';
import AdminViewdrs from './pages/AdminViewdrs';
import Token_booking from './pages/Token_booking';
import Demo_page from './pages/Demo_page';
function App() {
  return (
  <>
  <BrowserRouter>
  
  <Routes>
    <Route path='/registration' element={<Registration/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/navbar' element={<Navbar/>} />
    <Route path='/central' element={<Centralcomponent/>} />
    <Route path='/' element={<Home1/>} />
    <Route path='/available_dr' element={<Available_dr/>} />
    <Route path='/tokenbooiking' element={<Tokenbooking/>} />
    <Route path='/draddingadmin' element={<Addingdr/>} />
    <Route path='/admin' element={<Admin/>} />
    <Route path='/adminviewingdrs' element={<AdminViewdrs/>} />
    <Route path='/tokenbooking/:id' element={<Token_booking/>} />








  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
