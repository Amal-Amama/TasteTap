import React, { useState } from "react";
import FoodItem from "../componenets/FoodItem";
import "./Menu.css";
import FilterBox from "../componenets/FilterBox";
const FOOD_LIST = [
  {
    id: "f1",
    image: "https://images.pexels.com/photos/916925/pexels-photo-916925.jpeg",
    title: "breakfast1",
    time: "0.5h",
    description: "jeu d'orange, cake,cofee",
    price: "5$",
    category: ["Get Active", "breakfast"],
  },
  {
    id: "f2",
    image:
      "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "breakfast2",
    time: "1h",
    description: "woffle",
    price: "6$",
    category: ["Get Active", "breakfast"],
  },
  {
    id: "f3",
    image:
      "https://images.pexels.com/photos/11213788/pexels-photo-11213788.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "hambirger",
    time: "45min",
    description: "a spacy cheese with meal and a secret touch",
    price: "8$",
    category: ["FastFood", "Dishes"],
  },
  {
    id: "f4",
    image:
      "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "checken",
    time: "1h",
    description: "chicken ckicken",
    price: "3$",
    category: ["FastFood", "Italien", "Tunisia", "Pakistani", "Dishes"],
  },
  {
    id: "f5",
    image:
      "https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "pizza",
    time: "0.5h",
    description: "a cheezy pizza",
    price: "1$",
    category: ["Italien", "FastFood", "Dishes"],
  },
  {
    id: "f6",
    image:
      "https://images.pexels.com/photos/4790062/pexels-photo-4790062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ice-coffee",
    time: "20min",
    description: "a milk, glace,coffee",
    price: "2$",
    category: ["Get Active", "breakfast"],
  },
  {
    id: "f7",
    image:
      "https://images.pexels.com/photos/1796698/pexels-photo-1796698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "champania",
    time: "15min",
    description: "an old and powerful one",
    price: "10$",
    category: ["Get Active", "Italien", "Drinks"],
  },
  {
    id: "f8",
    image:
      "https://images.pexels.com/photos/4099128/pexels-photo-4099128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "capCake",
    time: "40min",
    description: "little cakes prepared with love",
    price: "3$",
    category: ["Get Active", "breakfast", "Desserts"],
  },
  {
    id: "f9",
    image:
      "https://images.pexels.com/photos/4696279/pexels-photo-4696279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "ice-creem",
    time: "20min",
    description: "frasie,creme fresh,biscuits",
    price: "2.5$",
    category: ["Get Active", "Desserts"],
  },
  {
    id: "f10",
    image:
      "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "salade",
    time: "30min",
    description: "cheese,lutte,tomates",
    price: "4$",
    category: ["Diary", "Weight Loss", "Dishes"],
  },
  {
    id: "f11",
    image:
      "https://i.pinimg.com/564x/fb/bf/12/fbbf12bc47e4356fbd1487ee0c47dce7.jpg",
    title: "Roas-Potatoe",
    time: "30min",
    description: "cheese,potatoe,tomates",
    price: "4$",
    category: ["Vaggies", "AIP", "Dishes"],
  },
  {
    id: "f12",
    image:
      "https://i.pinimg.com/564x/2b/85/32/2b85323bb0db1436699ac9d16f81dc80.jpg",
    title: "Lablabi",
    time: "25min",
    description: "chickpeas,garlic,cumin,harissa",
    price: "4$",
    category: ["Tunisia", "FastFood", "Dishes"],
  },
  {
    id: "f13",
    image:
      "https://i.pinimg.com/564x/2b/da/6a/2bda6aaf2b0d7a8d76e50e7879e3a671.jpg",
    title: "Biryanni",
    time: "45min",
    description: "rice, and meat",
    price: "6$",
    category: ["Pakistani", "Dishes"],
  },
  {
    id: "f14",
    image:
      "https://i.pinimg.com/564x/57/78/d5/5778d5c2e0a6e868ce953801f98158fb.jpg",
    title: "fish",
    time: "45min",
    description: "fish,citron",
    price: "6$",
    category: ["Shellfish", "Weight Loss", "Dishes"],
  },
  {
    id: "f15",
    image:
      "https://i.pinimg.com/564x/49/24/00/4924000b4305e3afaf5a3bcdb6c23f13.jpg",
    title: "Grain salads",
    time: "45min",
    description: "grain, vegetables",
    price: "7$",
    category: ["AIP", "Weight Loss", "Dishes"],
  },
  {
    id: "f16",
    image:
      "https://i.pinimg.com/564x/cf/2a/5a/cf2a5a16eda208ffdb9cc4f6050c48b2.jpg",
    title: "Fondue fromage ",
    time: "25min",
    description: "Fromage, vegetables",
    price: "5$",
    category: ["AIP", "FastFood", "Main Dishes", "Dishes"],
  },
];
const Menu = () => {
  const [foodList, setFoodList] = useState(FOOD_LIST);

  return (
    <div>
      <div className="header">
        <h1>Our Menu</h1>
        <p>
          we consider all the drivers of change gives you the components you
          need to change to create a truly happens
        </p>
      </div>
      <div className="foodListFilter-container">
        <div>
          <FilterBox
            FoodList={foodList}
            setFoodList={setFoodList}
            FOOD_LIST={FOOD_LIST}
          />
        </div>
        <div className="foodList-container">
          {foodList.map((item) => (
            <FoodItem
              image={item.image}
              title={item.title}
              time={item.time}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
