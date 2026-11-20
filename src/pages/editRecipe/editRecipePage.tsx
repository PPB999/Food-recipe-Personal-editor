import RecipeForm from "../../components/recipe/RecipeForm";
import type { RecipeFormValue } from "../../types/recipes";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipes } from "../../context/RecipeContext";

const EditRecipeFormPage = () => {
  const navigate = useNavigate();
  const { recipeID } = useParams();
  const { collectionRecipes, updateCollectionRecipe } = useRecipes();
  const collectionItem = collectionRecipes.find(
    (item) => item.collectionID === Number(recipeID),
  );
  console.log("URL recipeID", recipeID);
  console.log("Number", Number(recipeID));
  console.log("Collection recipes", collectionRecipes);
  console.log("Found collection item", collectionItem);

  if (!collectionItem) {
    return <p>Recipe doesn't exist</p>;
  }

  const recipe = collectionItem.recipe;

  const handleEditRecipe = (value: RecipeFormValue) => {
    updateCollectionRecipe(collectionItem.collectionID, value);
    navigate(`/profile/collectionPage/${collectionItem.collectionID}`);
  };

  return (
    <div>
      <RecipeForm
        initialValue={recipe}
        submitLabel="Save changes"
        onSubmit={handleEditRecipe}
      />
    </div>
  );
};

export default EditRecipeFormPage;
