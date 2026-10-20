import { Link, useParams } from "react-router-dom";
import { mockRecipes } from "../../data/mockRecipes";

const Recipe = () => {
  const { recipeID } = useParams();

  const recipe = mockRecipes.find((item) => item.ID === Number(recipeID));

  if (!recipe) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#302A25]">Recipe not found</h1>
        <p className="mt-2 text-stone-500">This recipe not exist</p>
        <Link to="/" className="mt-6 inline-block text-[#B85C38] underline">
          Back to home
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="aspect-4/3 w-full rounded-2xl object-cover"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B85C38]">
            Recipe No.{recipe.ID}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-[#302A25] md:text-4xl">
            {recipe.name}
          </h1>
          <p className="mt-4 leading-7 text-stone-600">
            {recipe.description || "No description available."}
          </p>
          <Link
            to="/"
            className="mt-6 inline-block text-sm text-[#B85C38] hover:underline"
          >
            Back to recipes page
          </Link>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#302A25]">Ingredients</h2>
        <ul className="mt-5 space-y-3">
          {recipe.ingredients
            .filter((item) => item.trim() !== "")
            .map((ingredient, index) => (
              <li
                key={index}
                className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-4"
              >
                <span className="h-2 w-2 rounded-full bg-[#B85C38]" />
                <span className="text-stone-700">{ingredient}</span>
              </li>
            ))}
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#302A25]">Directions</h2>
        <ol className="mt-5 space-y-5">
          {recipe.directions
            .filter((step) => step.trim() !== "")
            .map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B85C38] font-semibold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 leading-7 text-stone-700">{step}</p>
              </li>
            ))}
        </ol>
      </section>
    </main>
  );
};

export default Recipe;
