import React, { useRef, useState } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import logo from "../../../src/assets/logo.png";
import emailjs from "@emailjs/browser";
import "./Footer.css";
function Footer() {
  const [recipientEmail, setRecipientEmail] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xnk6d76",
        "contact_form",
        form.current,
        "EVmkYgGY_XO2Tz9jI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setRecipientEmail("");
  };
  const handleEmailChange = (e) => {
    setRecipientEmail(e.target.value);
  };

  const pages = ["Home", "About", "Menu", "Contact"];
  const ressources = ["Blog", "use cases", "testimonials", "Insights"];
  return (
    <div className="footer-container">
      <div className="footer-partOne">
        <img
          src={logo}
          alt="AppLogo"
          style={{
            width: "5rem",
            height: "5rem",
            borderRadius: "25%",
          }}
        />
        <p>
          first company that provide delivery food services with full control
          alimentairy besoin
        </p>
        <div className="socialMedia">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            href="https://github.com/openlayers/openlayers.github.io/tree/main/.github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className="pages">
        <h4>Pages</h4>
        {pages.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div className="ressource-container">
        <h4>Ressources</h4>
        {ressources.map((ressource, index) => (
          <div key={index}>
            <span>{ressource}</span>
          </div>
        ))}
      </div>
      <div>
        <h4 style={{ marginBottom: "2.1rem" }}>TastTap</h4>
        <p>Join our community and let's cook together!</p>
        <form ref={form} onSubmit={sendEmail}>
          <input
            placeholder="your Email                                                       @"
            type="email"
            name="to_email"
            value={recipientEmail}
            onChange={handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
