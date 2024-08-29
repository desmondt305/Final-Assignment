import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodList from "../components/FoodList";

const HomePage = () => {
  const [foods, setFoods] = useState([]); // State to store the list of food items
  const [error, setError] = useState(null); // State to store any error that occurs

  // Fetch the food items from the API when the component mounts
  useEffect(() => {
    axios
      .get("https://66c47e86b026f3cc6cef951a.mockapi.io/foods")
      .then((response) => {
        setFoods(response.data); // Store the fetched food items in state
      })
      .catch((error) => {
        setError(error.message); // Store any error message in state
      });
  }, []);

  // Function to delete a food item by its ID
  const deleteFood = (id) => {
    axios
      .delete(`https://66c47e86b026f3cc6cef951a.mockapi.io/foods/${id}`)
      .then(() => {
        setFoods(foods.filter((food) => food.id !== id)); // Remove the deleted item from the list
      })
      .catch((error) => setError(error.message)); // Handle any error that occurs
  };

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}{" "}
      {/* Display error if any */}
      <FoodList foods={foods} onDelete={deleteFood} />{" "}
      {/* Display the list of food items */}
    </div>
  );
};

export default HomePage;
