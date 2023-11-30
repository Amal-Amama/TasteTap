import React from "react";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { FaKitchenSet } from "react-icons/fa6";
import { GiPressureCooker } from "react-icons/gi";
import { LuTimerReset } from "react-icons/lu";
import Card from "../../shared/componenets/Card";
import video1 from "../../assets/video1.mp4";
import "./AboutUs.css";
function AboutUs() {
  return (
    <div>
      <div className="header-AboutPage">
        <div className="imageAbout-container">
          <img
            src="https://i.pinimg.com/564x/c8/11/e1/c811e16e296b7830943b90943a3d5c51.jpg"
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
          <h1>we provide food of your choice for you and your family</h1>
          <p>
            Our story began with a vision to create a unique dining ‘experience
            that merges fine dining, exceptional service, and 9 vibrant
            ambiance, Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate. ‘Ax place, we
            believe that dining isnot just about food, but also about the
            ‘overall experience, Our staf, renowned for the warmth and
            dedication _atrves to make every visit an unforgettable event.
          </p>
        </div>
      </div>
      <div className="vedio-container">
        <Card className="video-card">
          <video src={video1} alt="video1" autoPlay loop muted />
          <div className="content">
            <h3>Feel the authentic & Original taste from us</h3>
          </div>
          <div className="video-footer-row">
            <FaKitchenSet />
            <div className="video-footer-column">
              <h4>Multi Cuisine</h4>
              <p>
                in the new era of technolohy we look in the future with
                certainty life
              </p>
            </div>
          </div>
          <div className="video-footer">
            <GiPressureCooker />
            <h4>Easy To Order</h4>
            <p>
              in the new era of technology we look in the future with certainty
              life
            </p>
          </div>
          <div className="video-footer">
            <LuTimerReset />
            <h4>Fast Delivery</h4>
            <p>
              in the new era of technology we look in the future with certainty
              life
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AboutUs;
