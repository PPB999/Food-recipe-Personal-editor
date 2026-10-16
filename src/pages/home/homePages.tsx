import RecipeCard from "../../components/recipe/RecipeCard";
import RecipeCardSearch from "../../components/recipeSearch/RecipeCardSearch";
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
  });

  return (
    <>
      <div className="relative mx-auto w-full max-w-xl px-4 py-6">
        <SearchForm
          recipeSearch={recipeSearch}
          setRecipeSearch={setRecipeSearch}
        />
        {recipeSearch.trim() !== "" && (
          <div className="absolute left-4 right-4 mt-3 overflow-hidden rounded-2xl border border-stone-200 bg-white p-2 shadow-lg shadow-stone-900/5">
            <p className="px-3 py-2 text-xs font-semibold tracking-wider text-stone-400">
              SEARCH RESULTS
            </p>

            {filterRecipe.length > 0 ? (
              filterRecipe.map((recipeName) => (
                <RecipeCardSearch key={recipeName.ID} recipe={recipeName} />
              ))
            ) : (
              <p className="px-3 py-5 text-center text-sm text-stone-500">
                No recipe found. Try again.
              </p>
            )}
          </div>
        )}
      </div>
      <div className="w-full flex flex-row flex-wrap gap-10 justify-center">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.ID} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default Home;
