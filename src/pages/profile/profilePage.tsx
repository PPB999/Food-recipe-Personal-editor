import { Link } from "react-router-dom";
import { mockUsers } from "../../data/mockUser";

const Profile = () => {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#302A25]">My Profile</h1>
        <p className="mt-2 text-stone-500">
          Manage your recipes and collection
        </p>
        <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 my-4">
          {mockUsers.avatarImage ? (
            <img
              src={mockUsers.avatarImage}
              alt={mockUsers.name}
              className="h-20 w-20 rounded-full object-cover"
            />
          ) : (
            <img
              src="/favicon.svg"
              alt="profile"
              className="h-20 w-20 rounded-full object-cover"
            />
          )}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#302A25]">
              {mockUsers.name}
            </h2>
            <p className="mt-2 text-stone-500">{mockUsers.username}</p>
            <p className="mt-2 text-stone-500">{mockUsers.bio}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-4">
        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <p className="text-sm text-stone-500">My Recipes</p>
          <p className="mt-2 text-3xl font-bold text-[#302A25]">0</p>
          <p className="mt-1 text-sm text-stone-500">Recipes created</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <p className="text-sm text-stone-500">Saved Recipes</p>
          <p className="mt-2 text-3xl font-bold text-[#302A25]">0</p>
          <p className="mt-1 text-sm text-stone-500">Recipes collected</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          to={"/profile/createRecipePage"}
          className="flex items-center justify-center gap-2 rounded-lg bg-[#B85C38] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#98482D] focus:outline-none focus:ring-2 focus:ring-[#B85C38]/40 focus:ring-offset-2"
        >
          Create a Recipe
        </Link>
        <Link
          to={"/profile/collectionPage"}
          className="flex items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white px-5 py-3 font-semibold text-[#302A25] transition-colors hover:bg-[#F8F3EB] focus:outline-none focus:ring-2 focus:ring-[#B85C38]/40 focus:ring-offset-2"
        >
          My Collection
        </Link>
      </div>
    </main>
  );
};

export default Profile;
