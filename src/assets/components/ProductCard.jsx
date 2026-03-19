import React from "react";

const ProductCard = ({ recipe }) => {
  return (
    <div className="card">
      <h2>{recipe.name}</h2>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Rating:</strong> ⭐ {recipe.rating}</p>
      <p><strong>Cooking Time:</strong> ⏱️ {recipe.cookTimeMinutes} mins</p>
    </div>
  );
};

export default ProductCard;