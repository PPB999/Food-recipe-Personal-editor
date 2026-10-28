import { createContext, useContext, useState, type ReactNode } from "react";
import { mockRecipes } from "../data/mockRecipes";
import type { RecipeFormValue } from "../types/recipes";

type Recipe = RecipeFormValue & {
  ID: number;
};

interface RecipeContextValue {
  recipes: Recipe[];
  addRecipe: (values: RecipeFormValue) => void;
}

const RecipeContext = createContext<RecipeContextValue | undefined>(undefined);

interface RecipeProviderProps {
  children: ReactNode;
}

export const RecipeProvider = ({ children }: RecipeProviderProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>(mockRecipes);

  const addRecipe = (values: RecipeFormValue) => {
    const newRecipe: Recipe = {
      ...values,
      ID: Date.now(),
    };
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };
  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
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
