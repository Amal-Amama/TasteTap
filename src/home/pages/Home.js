import React from "react";
import "./Home.css";
import Button from "../../shared/componenets/Button";
import BrowseMenu from "../componenets/BrowseMenuList";
import AboutHomePart from "../componenets/AboutHomePart";
import Footer from "../../shared/footer/Footer";
import { Link } from "react-router-dom";
function Home() {
  const menu = [
    {
      id: "c1",
      image: "https://cdn-icons-png.flaticon.com/512/4726/4726331.png",
      title: "Breakfast",
      description:
        "Our breakfast menu is thoughtfully curated to satisfy all your morning cravings, from sweet to savory and everything in between",
    },
    {
      id: "c2",
      image: "https://cdn-icons-png.flaticon.com/512/7443/7443733.png",
      title: "main dishes",
      description:
        "Every plate is a work of art, where flavors and ingredients harmonize to create a symphony of taste that you won't soon forget",
    },
    {
      id: "c3",
      image: "https://cdn-icons-png.flaticon.com/512/175/175779.png",
      title: "drinks",
      description:
        "At our establishment, we take pride in curating a drink menu that offers a wide array of options, each with its own unique charm.",
    },
    {
      id: "c4",
      image: "https://cdn-icons-png.flaticon.com/512/1691/1691759.png",
      title: "desserts",
      description:
        "we take pride in our commitment to creating desserts that are not just sugary indulgences but unforgettable moments of pure bliss.",
    },
  ];
  return (
    <React.Fragment>
      <div className="imageHome-container">
        <img
          src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="homeImg"
        />
        <div className="image-content">
          <p>Best food for </p>
          <p>your Taste</p>
          <div>Discover delectable cuisine and unforgettablle moments</div>
          <div>in our welcoming culinary haven</div>
          <div className="buttons">
            <Button element="order">
              <Link to="/Menu" className="text-link1">
                Order Now
              </Link>
            </Button>
            <Button element="Explore">
              <Link to="/Menu" className="text-link2">
                Explore
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <BrowseMenu items={menu} />
      <AboutHomePart />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
