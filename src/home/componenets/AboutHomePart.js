import React from "react";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import "./AboutHomePart.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../shared/componenets/Button";
function AboutHomePart() {
  return (
    <div className="page">
      <div className="imageAbout-container">
        <img
          src="https://images.pexels.com/photos/5946067/pexels-photo-5946067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image1"
        />
        <div className="gray-container">
          <h2>come and visit us</h2>
          <p>
            <FaPhoneAlt /> <span>+21625330717</span>
          </p>
          <p>
            <FaRegEnvelope /> <span>amalamama5@gmail.com</span>
          </p>
          <p>
            <BiMap /> <span>Gouvernorat de, Kalaa Kebira 4060</span>
          </p>
        </div>
      </div>
      <div className="aboutus">
        <h1>we provide healthy food for you and your family</h1>
        <p>
          Our story began with a vision to create a unique dining ‘experience
          that merges fine dining, exceptional service, and 9 vibrant ambiance,
          Rooted in city's rich culinary culture, we aim to honor our local
          roots while infusing a global palate. ‘Ax place, we believe that
          dining isnot just about food, but also about the ‘overall experience,
          Our staf, renowned for the warmth and dedication _atrves to make every
          visit an unforgettable event.
        </p>
        <Button>
          <Link
            to="/aboutUs"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            More About Us
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default AboutHomePart;
