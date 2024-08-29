import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import AddFood from "./pages/AddFood";
import EditFood from "./pages/EditFood";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling

// Main App component that handles routing between pages
function App() {
  return (
    <Router>
      <NavigationBar /> {/* Displays the navigation bar at the top */}
      <div
        className="container mt-4 p-4"
        style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-food" element={<AddFood />} />
          <Route path="/edit-food/:id" element={<EditFood />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
