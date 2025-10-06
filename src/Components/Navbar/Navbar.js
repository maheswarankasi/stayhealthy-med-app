import React from 'react';
import UserDoctor from '../../assets/user-doctor-solid-full.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const handleClick = () => {
    const navLinks = document.querySelector(".nav__links");
    const navIcon = document.querySelector(".nav__icon i");

    // Toggle the 'active' className on the navigation links
    navLinks.classNameList.toggle("active");

    // Toggle the Font Awesome icons (bars and times)
    if (navLinks.classNameList.contains("active")) {
      navIcon.classNameList.remove("fa-bars");
      navIcon.classNameList.add("fa-times");
    } else {
      navIcon.classNameList.remove("fa-times");
      navIcon.classNameList.add("fa-bars");
    }
  }

  return (
    <>
      <nav>
        {/* <!-- Navigation logo section --> */}
        <div className="nav__logo">
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
        <div className="nav__icon" onClick={handleClick}>
          {/* <!-- Font Awesome icon for bars (hamburger menu) --> */}
          <i className="fa fa-times fa fa-bars"></i>
        </div>

        {/* <!-- Unordered list for navigation links with 'active' className --> */}
        <ul className="nav__links active">
          {/* <!-- List item for the 'Home' link --> */}
          <li className="link">
            <a href="../Landing_Page/LandingPage.html">Home</a>
          </li>
          {/* <!-- List item for the 'Appointments' link --> */}
          <li className="link">
            <a href="#">Appointments</a>
          </li>
          {/* <!-- List item for the 'Sign Up' link with a button --> */}
          <li className="link">
            <Link to='/sign-up'>
              <button className="btn1">Sign Up</button>
            </Link>
          </li>
          {/* <!-- List item for the 'Login' link with a button --> */}
          <li className="link">
            <Link to="/login">
              <button className="btn1">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar