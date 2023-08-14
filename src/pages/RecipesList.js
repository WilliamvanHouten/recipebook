import React from "react";
import Card from "../components/Card";
import recipes from "../components/RecipeInfo";

function RecipesList() {
  return (
    <div className="wrapper">
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          recipeId={recipe.id}
          title={recipe.title}
          detail={recipe.description}
          img={recipe.imageUrl}
        />
      ))}
    </div>
  );
}

export default RecipesList;