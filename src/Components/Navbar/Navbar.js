import React from 'react';
import UserDoctor from '../../assets/user-doctor-solid-full.svg';
import './Navbar.css';

const Navbar = () => {

  const handleClick = () => {
    const navLinks = document.querySelector(".nav__links");
    const navIcon = document.querySelector(".nav__icon i");

    // Toggle the 'active' class on the navigation links
    navLinks.classList.toggle("active");

    // Toggle the Font Awesome icons (bars and times)
    if (navLinks.classList.contains("active")) {
      navIcon.classList.remove("fa-bars");
      navIcon.classList.add("fa-times");
    } else {
      navIcon.classList.remove("fa-times");
      navIcon.classList.add("fa-bars");
    }
  }

  return (
    <>
      <nav>
        {/* <!-- Navigation logo section --> */}
        <div class="nav__logo">
          {/* <!-- Link to the home page --> */}
          <a href="/">
            StayHealthy
            {/* <!-- Insert an SVG icon of a doctor with a stethoscope --> */}
            <img src={UserDoctor} width="30" height="28" alt="doctor with stethoscope" />
          </a>
          {/* <!-- A span element for styling purposes --> */}
          <span>.</span>
        </div>
        {/* <!-- Navigation icon section with an onClick event listener --> */}
        <div class="nav__icon" onClick={handleClick}>
          {/* <!-- Font Awesome icon for bars (hamburger menu) --> */}
          <i class="fa fa-times fa fa-bars"></i>
        </div>

        {/* <!-- Unordered list for navigation links with 'active' class --> */}
        <ul class="nav__links active">
          {/* <!-- List item for the 'Home' link --> */}
          <li class="link">
            <a href="../Landing_Page/LandingPage.html">Home</a>
          </li>
          {/* <!-- List item for the 'Appointments' link --> */}
          <li class="link">
            <a href="#">Appointments</a>
          </li>
          {/* <!-- List item for the 'Sign Up' link with a button --> */}
          <li class="link">
            <a href="../Sign_Up//Sign_Up.html">
              <button class="btn1">Sign Up</button>
            </a>
          </li>
          {/* <!-- List item for the 'Login' link with a button --> */}
          <li class="link">
            <a href="../Login/Login.html">
              <button class="btn1">Login</button>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar