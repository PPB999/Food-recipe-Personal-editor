import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recipe from "./pages/recipes/RecipePages";
import Home from "./pages/home/HomePages";
import Profile from "./pages/profile/ProfilePage";
import Collection from "./pages/collection/CollectionPage";
import CreateRecipe from "./pages/createRecipe/CreateRecipePage";
import CollectionRecipe from "./pages/collectionRecipe/CollectionRecipePage";
import EditRecipe from "./pages/editRecipe/EditRecipePage";
import MainLayout from "./components/layout/MainLayout";
import RecipeFormPage from "./pages/recipeFormPage/RecipeFormPage";

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
          path: "recipe/:recipeNO",
          element: <Recipe />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "profile/createRecipe",
          element: <CreateRecipe />,
        },
        {
          path: "profile/recipeForm",
          element: <RecipeFormPage />,
        },
        {
          path: "profile/collectionPage",
          element: <Collection />,
        },
        {
          path: "profile/collectionPage/:recipeNO",
          element: <CollectionRecipe />,
        },
        {
          path: "profile/collectionPage/:recipeNO/edit",
          element: <EditRecipe />,
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
