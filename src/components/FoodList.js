import React from "react";
import FoodItem from "./FoodItem";

// Component to display a list of food items
const FoodList = ({ foods, onDelete }) => {
  return (
    <div className="row">
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} onDelete={onDelete} /> // Render each food item
      ))}
    </div>
  );
};

export default FoodList;
