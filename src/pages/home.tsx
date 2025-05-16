import SubscribeCard from "@/components/common/SubscribeCard";
import Categories from "@/components/home/Categories";
import FeaturedRecipe from "@/components/home/FeaturedRecipe";
import Instagram from "@/components/home/Instagram";
import LearnMore from "@/components/home/LearnMore";
import MoreRecipe from "@/components/home/MoreRecipe";
import Recipes from "@/components/home/Recipes";

export default function Home(){
    return(
        <>
        <FeaturedRecipe/>
        <Categories/>
        <Recipes/>
        <LearnMore/>
        <Instagram/>
        <MoreRecipe/>
        <SubscribeCard/>
        </>
    )
}