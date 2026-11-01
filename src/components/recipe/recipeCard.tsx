import type { RecipeFormValue } from "../../types/recipes";
import { Link } from "react-router-dom";
import { useRecipes } from "../../context/RecipeContext";

type Recipe = RecipeFormValue & {
  ID: number;
};

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { collectionRecipes, saveCollectionRecipe } = useRecipes();

  const isSaved = collectionRecipes.some(
    (item) => item.sourceRecipeID === recipe.ID,
  );

  const handleSave = () => {
    saveCollectionRecipe(recipe);
  };

  return (
    <div className="w-40 overflow-hidden rounded-lg shadow-lg">
      <Link to={`/recipe/${recipe.ID}`} className="block">
        <img
          className="w-full h-40 object-cover"
          src={recipe.image}
          alt={recipe.name}
        />

        <div className="p-4">
          <p className="text-[20px]">NO.{recipe.ID}</p>
          <h1 className="font-bold text-[20px]">{recipe.name}</h1>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button
          type="button"
          onClick={handleSave}
          disabled={isSaved}
          className={`w-full rounded-lg border px-3 py-2 text-sm font-semibold transition ${
            isSaved
              ? "border-stone-200 bg-stone-100 text-stone-500"
              : "border-[#B85C38] text-[#B85C38] hover:bg-[#B85C38] hover:text-white"
          }`}
        >
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
