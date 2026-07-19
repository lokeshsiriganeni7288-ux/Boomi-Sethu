import React from "react";
import "./index.css";
import HomePage from "./Pages/HomePage";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
      <HomePage />
    </HelmetProvider>
  );
}

export default App;
