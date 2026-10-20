import RecipeCard from "../../components/recipe/RecipeCard";
import RecipeCardSearch from "../../components/recipeSearch/RecipeCardSearch";
import SearchForm from "../../components/search/SearchForm";
import { useState } from "react";
import { mockRecipes } from "../../data/mockRecipes";

const Home = () => {
  const [recipeSearch, setRecipeSearch] = useState("");

  const filterRecipe = mockRecipes.filter((recipeName) => {
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
        {mockRecipes.map((recipe) => (
          <RecipeCard key={recipe.ID} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default Home;
