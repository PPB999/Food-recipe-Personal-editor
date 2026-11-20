import axios from "axios";
import type { ApiRecipe, RecipeApiResponse } from "../types/recipeApi";

const ApiUrl = "https://recipeapi.io/api/v1/recipes/";

export const getRecipes = async (
  searchRecipes: string,
  limits: number,
): Promise<ApiRecipe[]> => {
  try {
    const response = await axios.get<RecipeApiResponse>(ApiUrl, {
      params: {
        search: searchRecipes,
        per_page: limits,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    throw error;
  }
};

// const form = document.querySelector("#search");

// form.addEventListener("submit", function (input) {
//   input.preventDefault();
//   const searchRecipes = form.elements.recipe.value;
//   const limits = form.elements.limitV.value;
//   getRecipes(searchRecipes, limits);
// });

// const getRecipes = async (searchRecipes, limits) => {
//   const config = { params: { search: searchRecipes } };
//   try {
//     const res = await axios.get(`https://recipeapi.io/api/v1/recipes/`, config);
//     render(res.data.slice(0, limits));
//   } catch (err) {
//     console.log("ERROR!", err);
//   }
// };

// const render = (data) => {
//   const result = document.querySelector("#result");
//   result.innerHTML = "";
//   for (let list of data) {
//     if (list.show.image.medium) {
//       const imgLink = document.createElement("a");
//       const imgFilm = document.createElement("img");
//       const imgCaption = document.createElement("figcaption");
//       imgFilm.src = list.show.image.medium;
//       imgFilm.title = list.show.name;
//       imgCaption.innerText = list.show.name;
//       imgFilm.setAttribute("class", "figure-img img-fluid rounded col");
//       imgCaption.setAttribute("class", "figure-caption");
//       imgLink.href = list.show.url;
//       imgLink.append(imgFilm, imgCaption);
//       result.append(imgLink);
//     }
//   }
// };
