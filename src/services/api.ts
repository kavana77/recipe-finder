import { API_KEY, API_HOST } from "@/config/envConfig";
import { adaptToRecipe } from "@/utils/adaptRecipe";

export const fetchRecipes = async (query: string) => {
  const res = await fetch(
    `${API_HOST}/recipes/complexSearch?query=${query}&number=10&addRecipeInformation=true&apiKey=${API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch recipes");
  const data = await res.json();
  return data.results.map(adaptToRecipe);
};

export const fetchIngredients = async (id: number) => {
  const res = await fetch(
    `${API_HOST}/recipes/${id}/ingredientWidget.json?apiKey=${API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch ingredients");
  return res.json();
};
