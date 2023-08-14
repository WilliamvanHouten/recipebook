import React, { useState } from "react";
import { Link } from "react-router-dom";
import recipes from "./RecipeInfo.js";
import "./Card.css"; 


export default function Card(props) {
  const [showRecipe, setShowRecipe] = useState(false);

  const toggleRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  const recipe = recipes.find((r) => r.id === props.recipeId);

  return (
    <div className="card">
      <div className="card-body">
        <img src={props.img} className="card-img" alt="Steak and veg" />
        <h2 className="card-title">{props.title}</h2>
        <p className="card-detail">{props.detail}</p>
        <div className="card-button-container">
          <Link to={`/recipe/${props.recipeId}`} className="view-recipe-button">
            View Recipe
          </Link>
        </div>
        {showRecipe && (
          <div>
            {/* Rest of the recipe details */}
          </div>
        )}
      </div>
    </div>
  );
}
