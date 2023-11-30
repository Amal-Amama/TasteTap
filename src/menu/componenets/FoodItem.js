import React from "react";
import Card from "../../shared/componenets/Card";
import "./FoodItem.css";
import Button from "../../shared/componenets/Button";

function FoodItem(props) {
  return (
    <Card className="card-content">
      <img src={props.image} alt={props.title} className="image" />
      <div className="food-title">
        <h3>{props.title}</h3>
        <p>{props.time}</p>
      </div>
      <div className="card-text">
        <p className="description">{props.description}</p>
        <div className="order-price">
          <p>{props.price}</p>
          <Button>Order</Button>
        </div>
      </div>
    </Card>
  );
}

export default FoodItem;
