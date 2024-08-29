import React from "react";
import AddFoodForm from "../components/AddFoodForm";

// Page to add a new food item
const AddFood = () => {
  return (
    <div>
      <h2>Add New Food</h2> {/* Page title */}
      <AddFoodForm /> {/* Render the form to add a new food item */}
    </div>
  );
};

export default AddFood;
