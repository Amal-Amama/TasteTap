import React from "react";
import BrowserMenuItem from "./BrowserMenuItem";
import "./BrowseMenuList.css";
function BrowseMenu(props) {
  return (
    <div className="Brouwer-Menu-container">
      <h1>Browse Our Menu</h1>
      <ul>
        {props.items.map((item) => (
          <BrowserMenuItem
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default BrowseMenu;
