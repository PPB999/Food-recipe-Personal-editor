import { createContext, useContext, useState, type ReactNode } from "react";
import { mockRecipes } from "../data/mockRecipes";
import type { RecipeFormValue } from "../types/recipes";

type Recipe = RecipeFormValue & {
  ID: number;
};

interface RecipeContextValue {
  recipes: Recipe[];
  collectionRecipes: CollectionRecipeValue[];
  addRecipe: (values: RecipeFormValue) => void;
  saveCollectionRecipe: (recipe: Recipe) => void;
}

interface CollectionRecipeValue {
  collectionID: number;
  sourceRecipeID: number;
  recipe: Recipe;
}

const RecipeContext = createContext<RecipeContextValue | undefined>(undefined);

interface RecipeProviderProps {
  children: ReactNode;
}

export const RecipeProvider = ({ children }: RecipeProviderProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>(mockRecipes);

  const [collectionRecipes, setCollectionRecipes] = useState<
    CollectionRecipeValue[]
  >([]);

  const addRecipe = (values: RecipeFormValue) => {
    const newRecipe: Recipe = {
      ...values,
      ID: Date.now(),
    };
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  const saveCollectionRecipe = (recipe: Recipe) => {
    const alreadySaved = collectionRecipes.some(
      (item) => item.sourceRecipeID === recipe.ID,
    );
    if (alreadySaved) {
      return;
    }
    const newCollectionRecipe: CollectionRecipeValue = {
      collectionID: Date.now(),
      sourceRecipeID: recipe.ID,
      recipe: {
        ...recipe,
        ingredients: [...recipe.ingredients],
        directions: [...recipe.directions],
      },
    };
    setCollectionRecipes((prevRecipes) => [
      ...prevRecipes,
      newCollectionRecipe,
    ]);
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, collectionRecipes, addRecipe, saveCollectionRecipe }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipes must be used within RecipeProvider");
  }
  return context;
};
