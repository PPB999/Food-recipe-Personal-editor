import { useNavigate } from "react-router-dom";
import RecipeForm from "../../components/recipe/RecipeForm";
import type { RecipeFormValue } from "../../types/recipes";

const RecipeFormPage = () => {
  const navigate = useNavigate();

  const handleCreateRecipe = (values: RecipeFormValue) => {
    console.log("New Recipe:", values);
    navigate("/");
  };

  return (
    <RecipeForm submitLabel="Create Recipe" onSubmit={handleCreateRecipe} />
  );
};

export default RecipeFormPage;
