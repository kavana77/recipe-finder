import type { IRecipe, RawRecipe } from "@/types/data";

export const adaptToRecipe = (item: RawRecipe): IRecipe =>{
    return{
        id: item.id,
        title: item.title,
        image: item.image,
        time: item.readyInMinutes ? `${item.readyInMinutes} min` : "30 min",
        category: item.dishTypes?.[0] || "General"
    }
}