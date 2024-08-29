import React, { useState, useEffect } from "react";
import axios from "axios";
import EditFoodForm from "../components/EditFoodForm";
import { useParams } from "react-router-dom";

// Page to edit an existing food item
const EditFood = () => {
  const { id } = useParams(); // Get the food ID from the URL
  const [food, setFood] = useState(null); // State to store the food item data
  const [error, setError] = useState(null); // State to handle errors

  // Fetch the existing food item data when the component mounts
  useEffect(() => {
    axios
      .get(`https://66c47e86b026f3cc6cef951a.mockapi.io/foods/${id}`)
      .then((response) => {
        setFood(response.data); // Store the fetched food item in state
      })
      .catch((error) => {
        setError(error.message); // Handle any errors that occur during fetch
      });
  }, [id]); // Dependency array includes 'id' to refetch if the id changes

  return (
    <div>
      <h2>Edit Food</h2> {/* Page title */}
      {error && <div className="alert alert-danger">{error}</div>}{" "}
      {/* Display error if any */}
      {food && <EditFoodForm food={food} />}{" "}
      {/* Render the form to edit the food item if data is available */}
    </div>
  );
};

export default EditFood;
