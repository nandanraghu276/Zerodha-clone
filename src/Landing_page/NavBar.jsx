import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <>
   
    <nav class="navbar navbar-expand-lg  border-bottom" style={{backgroundColor:"white"}}>
  <div class="container p-2">
    <Link class="navbar-brand" to='/'><img src="/public/media/img/logo.svg" alt=""  style={{width:'25%'}}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active " aria-current="page" to='/Signup'>Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5" to='/AboutPage'>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  ms-3" to='/Products'>Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-3" to='/pricing'>Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-3" to='/support'>support</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar