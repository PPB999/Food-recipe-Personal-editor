import type { RecipeFormValue } from "../../types/recipes";
import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface RecipeFormProps {
  initialValue?: RecipeFormValue;
  submitLabel: string;
  onSubmit: (values: RecipeFormValue) => void;
}

const emptyRecipeForm: RecipeFormValue = {
  name: "",
  image: "",
  description: "",
  ingredients: [""],
  directions: [""],
};

const RecipeForm = ({
  initialValue,
  submitLabel,
  onSubmit,
}: RecipeFormProps) => {
  //collect all data in formValues
  const [formValues, setFormValues] = useState<RecipeFormValue>(() => ({
    ...(initialValue ?? emptyRecipeForm),
    ingredients: [...(initialValue?.ingredients ?? [""])],
    directions: [...(initialValue?.directions ?? [""])],
  }));

  useEffect(() => {
    setFormValues({
      ...(initialValue ?? emptyRecipeForm),
      ingredients: [...(initialValue?.ingredients ?? [""])],
      directions: [...(initialValue?.directions ?? [""])],
    });
  }, [initialValue]);

  //update string text props(name,img,description) by set as prev for prevent previous data disappear
  const handleStringChange = (
    strings: "name" | "image" | "description",
    value: string,
  ) => {
    setFormValues((prev) => ({
      ...prev,
      [strings]: value,
    }));
  };

  //update ingredient
  const handleChangeIngredient = (id: number, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      ingredients: prev.ingredients.map((ingredient, i) =>
        i === id ? value : ingredient,
      ),
    }));
  };

  //add ingredient
  const handleAddIngredient = () => {
    setFormValues((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ""],
    }));
  };

  //remove ingredient
  const handleRemoveIngredient = (id: number) => {
    setFormValues((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== id),
    }));
  };

  //update direction
  const handleChangeDirection = (no: number, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      directions: prev.directions.map((direction, n) =>
        n === no ? value : direction,
      ),
    }));
  };

  //add direction
  const handleAddDirection = () => {
    setFormValues((prev) => ({
      ...prev,
      directions: [...prev.directions, ""],
    }));
  };

  //remove direction
  const handleRemoveDirection = (no: number) => {
    setFormValues((prev) => ({
      ...prev,
      directions: prev.directions.filter((_, n) => n !== no),
    }));
  };

  //submit recipe
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      ...formValues,
      ingredients: formValues.ingredients
        .map((item) => item.trim())
        .filter(Boolean),
      directions: formValues.directions
        .map((item) => item.trim())
        .filter(Boolean),
    });
  };

  return (
    <form
      className="mx-auto w-full max-w-2xl space-y-5"
      onSubmit={handleSubmit}
    >
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight text-black">
          {submitLabel}
        </h1>
        <p className="text-sm text-stone-500">Add your recipe</p>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="recipe-name"
          className="block text-sm font-semibold text-stone-700"
        >
          Name:
          <input
            className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20"
            value={formValues.name}
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleStringChange("name", e.target.value)
            }
          />
        </label>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="recipe-image"
          className="block text-sm font-semibold text-stone-700"
        >
          Image URL:
          <input
            className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20"
            value={formValues.image}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleStringChange("image", e.target.value)
            }
          />
        </label>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="recipe-description"
          className="block text-sm font-semibold text-stone-700"
        >
          Description:
          <textarea
            className="w-full resize-y rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20"
            value={formValues.description}
            rows={5}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              handleStringChange("description", e.target.value)
            }
          />
        </label>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[#302A25]">Ingredients:</h2>

        {formValues.ingredients.map((ingredient, id) => (
          <div key={id} className="flex items-center gap-2">
            <span className="w-7 shrink-0 text-sm text-stone-400">
              {id + 1}
            </span>
            <input
              className="min-w-0 flex-1 rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20"
              value={ingredient}
              placeholder={`Ingredient ${id + 1}`}
              aria-label={`Ingredient ${id + 1}`}
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChangeIngredient(id, e.target.value)
              }
            />
            <button
              type="button"
              onClick={() => handleRemoveIngredient(id)}
              aria-label={`Remove ingredient ${id + 1}`}
              className="rounded-lg px-3 py-2 text-stone-500 hover:bg-red-50 hover:text-red-600"
            >
              X
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddIngredient}
          className="rounded-lg border border-dashed border-[#B85C38] px-4 py-2 text-sm font-medium text-[#B85C38] transition-colors hover:bg-[#F8F3EB]"
        >
          + Add Ingredient
        </button>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[#302A25]">Direction:</h2>
        {formValues.directions.map((direction, no) => (
          <div key={no} className="flex items-start gap-2">
            <span className="mt-3 w-7 shrink-0 text-sm text-stone-400">
              {no + 1}
            </span>
            <textarea
              rows={3}
              value={direction}
              placeholder={`Step ${no + 1}`}
              aria-label={`Step ${no + 1}`}
              required
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                handleChangeDirection(no, e.target.value)
              }
              className="min-w-0 flex-1 resize-y rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20"
            />
            <button
              type="button"
              onClick={() => handleRemoveDirection(no)}
              aria-label={`Remove step ${no + 1}`}
              className="mt-0.5 rounded-lg px-3 py-2 text-stone-500 hover:bg-red-50 hover:text-red-600"
            >
              X
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddDirection}
          className="rounded-lg border border-dashed border-[#B85C38] px-4 py-2 text-sm font-medium text-[#B85C38] transition-colors hover:bg-[#F8F3EB]"
        >
          + Add Cooking Step
        </button>
      </section>

      <button
        type="submit"
        className="w-full rounded-lg bg-[#B85C38] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#98482D] focus:outline-none focus:ring-2 focus:ring-[#B85C38]/40 focus:ring-offset-2"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default RecipeForm;
