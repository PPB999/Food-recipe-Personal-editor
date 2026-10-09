import RecipeCard from "../../components/recipe/recipeCard";
import type { Recipe } from "../../types/recipes";
import SearchForm from "../../components/search/searchForm";

const Home = () => {
  const recipes: Recipe[] = [
    { ID: 1, name: "Chocolate Souffle", image: "/favicon.svg" },
    { ID: 2, name: "Vanilla Eclair", image: "/favicon.svg" },
    { ID: 3, name: "Crab roe fried rice", image: "/favicon.svg" },
    { ID: 4, name: "Gulab Jamun", image: "/favicon.svg" },
    { ID: 5, name: "Spaghetti pesto sauce", image: "/favicon.svg" },
  ];
  return (
    <>
      <SearchForm />
      <div className="w-full flex flex-row flex-wrap gap-10 justify-center">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.ID} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default Home;
