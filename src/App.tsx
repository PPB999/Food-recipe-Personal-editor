import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recipe from "./pages/recipes/RecipePages";
import Home from "./pages/home/HomePages";
import Profile from "./pages/profile/ProfilePage";
import Collection from "./pages/collection/CollectionPage";
import CollectionRecipe from "./pages/collectionRecipe/CollectionRecipePage";
import EditRecipeFormPage from "./pages/editRecipe/EditRecipePage";
import MainLayout from "./components/layout/MainLayout";
import CreateRecipeFormPage from "./pages/CreateRecipeFormPage/CreateRecipeFormPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "recipe/:recipeID",
          element: <Recipe />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "profile/recipeForm",
          element: <CreateRecipeFormPage />,
        },
        {
          path: "profile/collectionPage",
          element: <Collection />,
        },
        {
          path: "profile/collectionPage/:recipeID",
          element: <CollectionRecipe />,
        },
        {
          path: "profile/collectionPage/:recipeID/edit",
          element: <EditRecipeFormPage />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
