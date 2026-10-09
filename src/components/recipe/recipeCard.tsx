import type { Recipe } from "../../types/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="w-40 overflow-hidden rounded-lg shadow-lg">
      <img
        className="w-full h-40 object-cover"
        src={recipe.image}
        alt={recipe.name}
      />

      <div className="p-4">
        <p className="text-[20px]">NO.{recipe.ID}</p>
        <h1 className="font-bold text-[20px]">{recipe.name}</h1>
      </div>
    </div>
  );
};

export default RecipeCard;
