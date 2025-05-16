import RecommendationRecipe from "@/components/common/RecommendationRecipe";
import SubscribeCard from "@/components/common/SubscribeCard";
import CookingSetup from "@/components/recipe/CookingSetup";
import Header from "@/components/recipe/Header";
import RecipeDetails from "@/components/recipe/recipeDetails/RecipeDetails";

export default function RecipePage(){
    return(
        <>
            <Header/>
            <RecipeDetails/>
            <CookingSetup/>
            <SubscribeCard/>
            <RecommendationRecipe/>
        </>
    )
}