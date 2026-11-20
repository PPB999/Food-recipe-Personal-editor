import { Link, useParams } from "react-router-dom";
import { useRecipes } from "../../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const CollectionRecipe = () => {
  const { recipeID } = useParams();
  const navigate = useNavigate();
  const { collectionRecipes, deleteCollectionRecipe } = useRecipes();

  const collectionItem = collectionRecipes.find(
    (item) => item.collectionID === Number(recipeID),
  );
  if (!collectionItem) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#302A25]">Recipe not found</h1>
        <p className="mt-2 text-stone-500">
          This recipe is not in your collection
        </p>
        <Link
          to="/profile/collectionPage"
          className="mt-6 inline-block text-[#B85C38] underline"
        >
          Back to Collection
        </Link>
      </main>
    );
  }
  const recipe = collectionItem.recipe;

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you want to delete this recipe");
    if (!confirmDelete) return;
    deleteCollectionRecipe(collectionItem.collectionID);
    navigate("/profile/collectionPage");
  };

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
            Collection NO.{collectionItem.collectionID}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-[#302A25] md:text-4xl">
            {recipe.name}
          </h1>
          <p className="mt-4 leading-7 text-stone-600">
            {recipe.description || "No description"}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-lg bg-[#B85C38] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#9E4D30] focus:outline-none focus:ring-2 focus:ring-[#B85C38] focus:ring-offset-2"
              to={`/profile/collectionPage/${collectionItem.collectionID}/edit`}
            >
              Edit Recipe
            </Link>
            <button
              className="inline-flex items-center gap-2 rounded-lg border border-red-300 bg-white px-5 py-2.5 text-sm font-semibold text-red-600 shadow-sm transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
              onClick={handleDelete}
            >
              Delete Recipe
            </button>
          </div>
          <Link
            to="/profile/collectionPage"
            className="mt-6 inline-block text-sm text-[#B85C38] hover:underline"
          >
            Back to Collection
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

export default CollectionRecipe;
