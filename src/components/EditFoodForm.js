import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

// Form component for editing an existing food item
const EditFoodForm = ({ food }) => {
  const [updatedFood, setUpdatedFood] = useState(food); // State to store updated food data
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate(); // Hook for navigation

  // Handle form input changes
  const handleChange = (e) => {
    setUpdatedFood({ ...updatedFood, [e.target.name]: e.target.value }); // Update form data in state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://66c47e86b026f3cc6cef951a.mockapi.io/foods/${food.id}`,
        updatedFood
      ) // Send PUT request to update food
      .then(() => {
        navigate("/"); // Redirect to the home page after updating food
      })
      .catch((error) => setError(error.message)); // Handle any errors
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <p className="text-danger">{error}</p>}{" "}
      {/* Display error if any */}
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={updatedFood.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="description" className="mt-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={updatedFood.description}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="price" className="mt-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={updatedFood.price}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Update Food
      </Button>{" "}
      {/* Submit button */}
    </Form>
  );
};

export default EditFoodForm;
