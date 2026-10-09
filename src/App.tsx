import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recipe from "./pages/recipes/recipePages";
import Home from "./pages/home/homePages";
import Profile from "./pages/profile/profilePage";
import Collection from "./pages/collection/collectionPage";
import CreateRecipe from "./pages/createRecipe/createRecipePage";
import CollectionRecipe from "./pages/collectionRecipe/collectionRecipePage";
import EditRecipe from "./pages/editRecipe/editRecipePage";
import MainLayout from "./components/layout/mainLayout";

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
