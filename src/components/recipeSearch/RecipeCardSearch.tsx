import type { Recipe } from "../../types/recipes";
import { Link } from "react-router-dom";

interface RecipeCardSearchProps {
  recipe: Recipe;
}

const RecipeCardSearch = ({ recipe }: RecipeCardSearchProps) => {
  return (
    <Link to={`/recipe/${recipe.ID}`}>
      <div className="w-full overflow-hidden flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-[#F8F3EB]">
        <img
          className="w-10 h-10 object-cover rounded-lg border border-stone-200"
          src={recipe.image}
          alt={recipe.name}
        />

        <div className="min-w-0 flex-1">
          <p className="text-xs text-stone-400">NO.{recipe.ID}</p>
          <h1 className="truncate font-semibold text-sm text-[#302A25]">
            {recipe.name}
          </h1>
        </div>
        <svg
          className="h-4 w-4 shrink-0 text-stone-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 18 6-6-6-6"
          />
        </svg>
      </div>
    </Link>
  );
};

export default RecipeCardSearch;
