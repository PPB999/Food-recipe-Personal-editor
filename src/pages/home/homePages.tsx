import RecipeCard from "../../components/recipe/RecipeCard";
import type { Recipe } from "../../types/recipes";
import SearchForm from "../../components/search/SearchForm";
import { useState } from "react";

const Home = () => {
  const [recipeSearch, setRecipeSearch] = useState("");

  const recipes: Recipe[] = [
    { ID: 1, name: "Chocolate Souffle", image: "/favicon.svg" },
    { ID: 2, name: "Vanilla Eclair", image: "/favicon.svg" },
    { ID: 3, name: "Crab roe fried rice", image: "/favicon.svg" },
    { ID: 4, name: "Gulab Jamun", image: "/favicon.svg" },
    { ID: 5, name: "Spaghetti pesto sauce", image: "/favicon.svg" },
  ];

  const filterRecipe = recipes.filter((recipeName) => {
    return recipeName.name.toLowerCase().includes(recipeSearch.toLowerCase());
    console.log(recipeSearch);
  });

  return (
    <>
      <SearchForm
        recipeSearch={recipeSearch}
        setRecipeSearch={setRecipeSearch}
      />
      {filterRecipe.length > 0 ? (
        filterRecipe.map((recipeName) => (
          <RecipeCard key={recipeName.ID} recipe={recipeName} />
        ))
      ) : (
        <li>Data not Found</li>
      )}
      <div className="w-full flex flex-row flex-wrap gap-10 justify-center">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.ID} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default Home;
