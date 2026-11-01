import { Link } from "react-router-dom";
import { useRecipes } from "../../context/RecipeContext";

const Collection = () => {
  const { collectionRecipes } = useRecipes();

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#302A25]">My Collection</h1>
        <p className="mt-2 text-stone-500">Your saved recipes in one place</p>
      </div>

      {collectionRecipes.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {collectionRecipes.map((item) => (
            <Link
              key={item.collectionID}
              to={`/profile/collectionPage/${item.collectionID}`}
              className="block w-40 overflow-hidden rounded-lg bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.recipe.image}
                alt={item.recipe.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-stone-500">
                  Collection NO.{item.collectionID}
                </p>
                <h2 className="mt-1 font-bold text-[#302A25]">
                  {item.recipe.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-stone-300 px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-[#302A25]">
            Your Collection is empty
          </h2>
          <p className="mt-2 text-stone-500">Save recipes to see them here.</p>
          <Link
            to="/"
            className="mt-5 inline-block rounded-lg bg-[#B85C38] px-5 py-2 font-semibold text-white hover:opacity-90"
          >
            Explore the world of Culinary
          </Link>
        </div>
      )}
    </main>
  );
};

export default Collection;
