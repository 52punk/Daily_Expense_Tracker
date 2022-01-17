import LandingPage from "./pages/landingPage";
import React from "react";
import "./App.css";
const App = () => {
  return (
    <div className="app_container">
      <h1 style={{ fontWeight: "inherit" }}>Daily Expense Tracker</h1>
      <LandingPage />
    </div>
  );
};

export default App;
