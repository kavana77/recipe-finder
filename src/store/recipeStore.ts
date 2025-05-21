import { create } from "zustand";
import { fetchRecipes, fetchIngredients } from "@/services/api";
import type { IRecipe, IIngredient} from "@/types/data";


type RecipeStore ={
    recipes: IRecipe[];
    ingredients: IIngredient[];
    loading: boolean;
    error: string | null;
    getRecipes: (query: string) => Promise<void>;
    getIngredients: (id: number) => Promise<void>
    toggleIngredient: (id: number) => void
}

const useRecipeStore = create<RecipeStore>((set, get)=>({
    recipes: [],
    ingredients: [],
    loading: false,
    error: null,

    getRecipes: async (query) => {
        set({loading: true, error: null});
        try{
            const recipes = await fetchRecipes(query)
            set({recipes, loading: false})
        } catch (error) {
            if (error instanceof Error) {
              set({ error: error.message, loading: false });
            } else {
              set({ error: "An unknown error occurred", loading: false });
            }
          }
    },
    getIngredients: async (id) => {
        set({ loading: true, error: null });
        try {
          const data = await fetchIngredients(id);
          const ingredients = data.ingredients.map((ing: { id: number; name: string }) => ({
            id: ing.id,
            name: ing.name,
            checked: false,
          }));
          set({ ingredients, loading: false });
        } catch (error) {
            if (error instanceof Error) {
              set({ error: error.message, loading: false });
            } else {
              set({ error: "An unknown error occurred", loading: false });
            }
          }
      },
      toggleIngredient: (id) => {
        const updated = get().ingredients.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        set({ ingredients: updated });
      },
}))
export default useRecipeStore;