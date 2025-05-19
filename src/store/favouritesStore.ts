import { create } from "zustand";
import type { IRecipe } from "@/types/data";

interface FavouritesState{
    favourites: IRecipe[]
    addFavourite: (recipe: IRecipe) => void
    removeFavourite: (id: number) => void
    isFavourite: (id: number) => boolean
}

const useFavouritesStore = create<FavouritesState>((set,get)=>({
    favourites: [],
    addFavourite: (recipe)=>
        set((state) => ({ favourites: [...state.favourites, recipe] })),
    removeFavourite: (id) =>
      set((state) => ({
        favourites: state.favourites.filter((r) => r.id !== id),
      })),
    isFavourite: (id) => get().favourites.some((r) => r.id === id),
}))
export default useFavouritesStore