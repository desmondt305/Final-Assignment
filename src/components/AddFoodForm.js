import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

// Form component for adding a new food item with Bootstrap styling
const AddFoodForm = () => {
  const [food, setFood] = useState({ name: "", description: "", price: 0 });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://66c47e86b026f3cc6cef951a.mockapi.io/foods", food)
      .then(() => {
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="p-4"
      style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}
    >
      {error && <p className="text-danger">{error}</p>}
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={food.name}
          onChange={handleChange}
          required
          style={{ fontSize: "1rem" }}
        />
      </Form.Group>
      <Form.Group controlId="description" className="mt-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={food.description}
          onChange={handleChange}
          required
          style={{ fontSize: "1rem" }}
        />
      </Form.Group>
      <Form.Group controlId="price" className="mt-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={food.price}
          onChange={handleChange}
          required
          style={{ fontSize: "1rem" }}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Add Food
      </Button>
    </Form>
  );
};

export default AddFoodForm;
