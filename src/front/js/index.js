// Import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// Include your index.scss file into the bundle
import "../styles/index.css";

// Import your own components
import Layout from "./layout";

// Create the root element using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.querySelector("#app"));

// Render your react application
root.render(<Layout />);