import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../components/RecipeInfo.js";
import "./RecipeDetail.css"; 

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="container">
      <div className="recipe-details">
        <h2 className="title-recipe">{recipe.title}</h2>
        <p className="description">{recipe.description}</p>
        <div className="row">
          <div className="col-md-6">
            {recipe.imageUrl && (
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="recipe-picture img-fluid"
              />
            )}
            <p>Time: {recipe.time}</p>
          </div>
          <div className="col-md-6">
            <div className="ingredients-container">
              <h3 className="ingredients">Ingredients:</h3>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div className="steps-container">
          <h3 className="steps">Preparation Steps:</h3>
          <ol className="preparation-steps">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <br />
        <Link className="btn btn-secondary back-to-recipes" to="/">
          Back to Recipes List
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
