import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipesList from "./pages/RecipesList";
import RecipeDetail from "./pages/RecipeDetail";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div>
        <img src="Recipes-Banner.jpg" className="banner" alt="Recipes banner" />
        <Routes>
          <Route path="/" element={<RecipesList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
