import RecipeForm from "../../components/recipe/RecipeForm";
import type { RecipeFormValue } from "../../types/recipes";
import { useParams, useNavigate } from "react-router-dom";
import { mockRecipes } from "../../data/mockRecipes";

const EditRecipeFormPage = () => {
  // const navigate = useNavigate();
  const { recipeID } = useParams();
  const existingRecipe = mockRecipes.find(
    (recipe) => recipe.ID === Number(recipeID),
  );
  const handleEditRecipe = (value: RecipeFormValue) => {
    console.log("Recipe ID", recipeID);
    console.log("Updated recipe", value);
    // navigate(`/profile/collectionPage/${recipeID}/edit`);
  };
  if (!existingRecipe) {
    return <p>Recipe doesn't exist</p>;
  }

  return (
    <div>
      <RecipeForm
        initialValue={existingRecipe}
        submitLabel="Save changes"
        onSubmit={handleEditRecipe}
      />
    </div>
  );
};

export default EditRecipeFormPage;
