import React from "react";
import Card from "../../shared/componenets/Card";
import "./BrowserMenuItem.css";
import { Link } from "react-router-dom";
function BrowserMenuItem(props) {
  return (
    <React.Fragment>
      <li>
        <Card className="card-container">
          <img src={props.image} alt={props.tiltle} />
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <button className="ExploreMenu-btn">
            <Link
              to="/Menu"
              style={{
                textDecoration: "none",
                color: "red",
              }}
            >
              Explore Menu
            </Link>
          </button>
        </Card>
      </li>
    </React.Fragment>
  );
}

export default BrowserMenuItem;
