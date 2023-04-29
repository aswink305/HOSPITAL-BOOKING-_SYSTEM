import React from 'react'
import "./Navbar.css"
export default function Navbar({datas}) {
  console.log("datasdatas",datas);
  return (
    <>
<div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid" >
      <a className="navbar-brand" href="#" > 
      Hospital Token Booking centre
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"/>
      </button>
      <ul class="nav nav-tabs justify-content-end" >
  <li class="nav-item">
    <a class="nav-link active" id='navbar_hover'aria-current="page" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id='navbar_hover' href="/login">Login</a>
  </li>
  <li class="nav-item dropdown">
          <a  class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink navbar_hover" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li><a id='navbar_hover' class="dropdown-item" href="/registration">Registration</a></li>

</ul>
        
   
    
      </div>
  </nav>
</div>

    </>
  )
}

