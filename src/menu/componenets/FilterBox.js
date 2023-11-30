import React, { useState } from "react";
import Button from "../../shared/componenets/Button";
import "./FilterBox.css";
const FilterBox = (props) => {
  const [foodList] = useState(props.FoodList);
  const [dietList, setDietList] = useState([
    { name: "Vaggies", checked: false },
    { name: "Diary", checked: false },
  ]);
  const [allergiesList, setAllergiesList] = useState([
    { name: "AIP", checked: false },
    { name: "Shellfish", checked: false },
  ]);
  const [cuisineCheckList, setCuisineCheckList] = useState([
    { name: "FastFood", checked: false },
    { name: "Italien", checked: false },
    { name: "Tunisia", checked: false },
    { name: "Pakistani", checked: false },
  ]);
  const [goalsCheckList, setGoalsCheckList] = useState([
    { name: "Weight Loss", checked: false },
    { name: "Get Active", checked: false },
  ]);
  const updateFoodList = (checkList, setCheckList, food, index) => {
    const updatedCheckList = [...checkList];
    updatedCheckList[index].checked = !updatedCheckList[index].checked;
    setCheckList(updatedCheckList);

    if (updatedCheckList[index].checked) {
      const updatedFoodList = foodList.filter((item) =>
        Array.isArray(item.category) ? item.category.includes(food.name) : false
      );
      props.setFoodList(updatedFoodList);
    } else {
      props.setFoodList(props.FOOD_LIST);
    }
  };
  const FilterListBtn = (category) => {
    const updatedfoodList = foodList.filter((item) =>
      Array.isArray(item.category) ? item.category.includes(category) : false
    );
    props.setFoodList(updatedfoodList);
  };
  return (
    <div>
      <div className="Menubuttons-container">
        <Button onClick={() => props.setFoodList(props.FOOD_LIST)}>All</Button>
        <Button onClick={() => FilterListBtn("breakfast")}>Breakfast</Button>
        <Button onClick={() => FilterListBtn("Dishes")}>Main Dishes</Button>
        <Button onClick={() => FilterListBtn("Drinks")}>Drinks</Button>
        <Button onClick={() => FilterListBtn("Desserts")}>Desserts</Button>
      </div>
      <h3>Filters</h3>
      <form className="filter-box">
        <h4>Diet</h4>
        <div className="sousList-Container">
          {dietList.map((item, index) => (
            <div key={index} className="check-item">
              <input
                value={item}
                type="checkbox"
                checked={item.checked}
                onChange={() =>
                  updateFoodList(dietList, setDietList, item, index)
                }
              />
              <label>{item.name}</label>
            </div>
          ))}
        </div>
        <h4>Allergie</h4>
        <div className="sousList-Container">
          {allergiesList.map((item, index) => (
            <div key={index} className="check-item">
              <input
                value={item}
                type="checkbox"
                checked={item.checked}
                onChange={() =>
                  updateFoodList(allergiesList, setAllergiesList, item, index)
                }
              />
              <label>{item.name}</label>
            </div>
          ))}
        </div>
        <h4>Cuisine</h4>
        <div className="sousList-Container">
          {cuisineCheckList.map((item, index) => (
            <div key={index} className="check-item">
              <input
                value={item}
                type="checkbox"
                checked={item.checked}
                onChange={() =>
                  updateFoodList(
                    cuisineCheckList,
                    setCuisineCheckList,
                    item,
                    index
                  )
                }
              />
              <label>{item.name}</label>
            </div>
          ))}
        </div>
        <h4>Goals</h4>
        <div className="sousList-Container">
          {goalsCheckList.map((item, index) => (
            <div key={index} className="check-item">
              <input
                value={item}
                type="checkbox"
                checked={item.checked}
                onChange={() =>
                  updateFoodList(goalsCheckList, setGoalsCheckList, item, index)
                }
              />
              <label>{item.name}</label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default FilterBox;
