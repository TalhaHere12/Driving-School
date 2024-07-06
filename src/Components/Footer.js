import React ,{useEffect}from 'react';
import './Footer.css'; // Import your CSS file for styling
import Aos from 'aos';
import "aos/dist/aos.css"

function Footer() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <footer className="footer" data-aos="fade-right" >
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a leading driving school committed to providing high-quality driver education and training.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@drivingschool.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Instructors</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Driving School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
