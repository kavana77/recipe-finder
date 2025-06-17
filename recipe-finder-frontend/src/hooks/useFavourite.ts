import useFavouritesStore from "@/store/favouritesStore"
import type { IRecipe } from "@/types/data"

const useFavourite = () =>{
    const {addFavourite, removeFavourite, isFavourite} = useFavouritesStore()

    const toggleFavourite = (recipe: IRecipe)=>{
        if(isFavourite(recipe.id)){
            removeFavourite(recipe.id)
        }else{
            addFavourite(recipe)
        }
    }
    return {toggleFavourite, isFavourite}
}
export default useFavourite