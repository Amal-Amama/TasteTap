import React from "react";
import "./Contact.css";
import Button from "../../shared/componenets/Button";
const Contact = () => {
  return (
    <div className="BackImage">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          we consider all the drivers of change gives you the components you
          need to change,to create a truly happens
        </p>
        <div className="form-container">
          <form>
            <div className="wrapper">
              <div className="box">
                <input type="text" name="fname" id="fname" required />
                <label for="fname">Name</label>
              </div>
              <div className="box">
                <input type="text" name="lname" id="lname" required />
                <label for="lname">Last Name</label>
              </div>
            </div>
            <div className="wrapper">
              <div className="box">
                <input type="email" name="mail" id="email" required />
                <label for="email">Email</label>
              </div>
              <div className="box">
                <input type="text" name="subject" id="subject" required />
                <label for="subject">Subject</label>
              </div>
            </div>
            <div className="wrapper">
              <div className="box">
                <textarea type="text" id="mes" required />
                <label for="mes">Message</label>
              </div>
            </div>
            <Button type="submit">send</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
