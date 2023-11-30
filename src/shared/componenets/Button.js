import React from "react";
import "./Button.css";
function Button(props) {
  let backgroundColor = "";
  if (props.element === "order") {
    backgroundColor = "brown";
  }
  return (
    <button
      className=" button"
      style={{ backgroundColor }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
