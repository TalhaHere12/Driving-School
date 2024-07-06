import React from 'react';
import './Navbar.css'
import logo from '/Driving-School-Website/my-app/src/Pics/logo.png'
import bgImg from '/Driving-School-Website/my-app/src/Pics/pupil-instructor-hero-6-desktop.jpg'

function Navbar() {
  return (
    <>
      <div className='bg-img'>
        <nav className='navbar'>
          <ul className='nav-list'>
            <img className='logo' src={logo} ></img>
            <li className='nav-item'>Breakdown</li>
            <li className='nav-item'>Insurance</li>
            <li className='nav-item'>Vehicle maintenance</li>
            <li className='nav-item'>New and used cars</li>
            {/* <li className='nav-item'>Driving school</li> */}
            {/* <li className='nav-item'>Finance</li> */}
            {/* <li className='nav-item'>Travel</li> */}
          </ul>
        </nav>
        <text className='text-one'>DRIVING SCHOOL</text>
        <h1>Getting you on the road</h1>
        <text className='text-two'>Ready to start driving?You are in safe hands.</text>
        <br></br>
        <text className='text-three'>Find out more and book online.</text>
        <br></br>
        <button className='button'>Get Lesson Prices</button>
      </div>
    </>
  );
}

export default Navbar;
