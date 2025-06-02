import { create } from "zustand";
import { fetchRecipes } from "@/utils/http";
import type { IRecipe, IIngredient } from "@/types/data";

type RecipeStore = {
  recipes: IRecipe[];
  ingredients: IIngredient[];
  loading: boolean;
  error: string | null;
  getRecipes: (query: string) => Promise<void>;
};

const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],
  ingredients: [],
  loading: false,
  error: null,

  getRecipes: async (query) => {
    set({ loading: true, error: null });
    try {
      const recipes = await fetchRecipes(query);
      set({ recipes, loading: false });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: "An unknown error occurred", loading: false });
      }
    }
  },
}));
export default useRecipeStore;
