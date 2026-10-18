export interface Recipe {
  ID: number;
  name: string;
  image?: string;
  description?: string;
}

export interface RecipeFormValue {
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  directions: string[];
}
