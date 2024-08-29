import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Component to display a single food item
const FoodItem = ({ food, onDelete }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card
        style={{
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5rem", color: "#333" }}>
            {food.name}
          </Card.Title>{" "}
          {/* Display the name of the food */}
          <Card.Text style={{ fontSize: "1rem", color: "#555" }}>
            {food.description}
          </Card.Text>{" "}
          {/* Display the description of the food */}
          <Card.Text style={{ fontSize: "1rem", color: "#555" }}>
            ${food.price}
          </Card.Text>{" "}
          {/* Display the price of the food */}
          <Link
            to={`/edit-food/${food.id}`}
            className="btn btn-warning"
            style={{ marginRight: "10px" }}
          >
            Edit
          </Link>{" "}
          {/* Link to edit the food */}
          <Button variant="danger" onClick={() => onDelete(food.id)}>
            Delete
          </Button>{" "}
          {/* Button to delete the food */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodItem;
