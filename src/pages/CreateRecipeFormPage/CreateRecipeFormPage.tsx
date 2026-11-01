import { useNavigate } from "react-router-dom";
import RecipeForm from "../../components/recipe/RecipeForm";
import type { RecipeFormValue } from "../../types/recipes";
import { useRecipes } from "../../context/RecipeContext";

const CreateRecipeFormPage = () => {
  const navigate = useNavigate();
  const { addRecipe } = useRecipes();

  const handleCreateRecipe = (values: RecipeFormValue) => {
    addRecipe(values);
    navigate("/");
  };

  return (
    <RecipeForm submitLabel="Create Recipe" onSubmit={handleCreateRecipe} />
  );
};

export default CreateRecipeFormPage;
