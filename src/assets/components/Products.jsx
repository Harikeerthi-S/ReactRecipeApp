import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";

const Products = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API failed");
        }
        return res.json();
      })
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load recipes.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="products-container">
      <h1 className="title">🍽️ Recipes</h1>

      {/* Spinner */}
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="products-grid">
          {recipes.map((recipe) => (
            <ProductCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;