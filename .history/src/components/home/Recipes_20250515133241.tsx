import RecipeCard1 from "../../assets/home/recipe/recipe1.png"
import RecipeCard2 from "../../assets/home/recipe/recipe2.png"
import RecipeCard3 from "../../assets/home/recipe/recipe3.png"
import RecipeCard4 from "../../assets/home/recipe/recipe4.png"
import RecipeCard5 from "../../assets/home/recipe/recipe5.png"
import RecipeCard6 from "../../assets/home/recipe/recipe6.png"
import RecipeCard7 from "../../assets/home/recipe/recipe7.png"
import RecipeCard8 from "../../assets/home/recipe/recipe8.png"


type IMoreRecipe={
    id:number;
    title:string;
    image:string;
    time:string;
    category:string;
};
const moreRecipes: IMoreRecipe[] =[
    {
        id:1,
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        image: RecipeCard1,
        time: "30 Minutes",
        category: "Snack",
    },
    {
        id:2,
        title: "Fresh Lime Roasted Salmon with Ginger Sauce",
        image: RecipeCard2,
        time: "30 Minutes",
        category: "Fish",
    },
    {
        id:3,
        title: "Strawberry Oatmeat Pancake with Honey Syrup",
        image: RecipeCard3,
        time: "30 Minutes",
        category: "Breafast",
    },
    {
        id:4,
        title: "Fresh and Healthy Mixed Mayonnaise Salad",
        image: RecipeCard4,
        time: "30 Minutes",
        category: "Healthy",
    },
    {
        id:5,
        title: "Chicken Meatballs with Cream Chees",
        image: RecipeCard5,
        time: "30 Minutes",
        category: "Meat",
    },
    {
        id:6,
        title: "Fruity Pancake with Orange & Blueberry",
        image: RecipeCard6,
        time: "30 Minutes",
        category: "Sweet",
    },
    {
        id:7,
        title: "The Best Easy One Pot Chicken and Rice",
        image: RecipeCard7 ,
        time: "30 Minutes",
        category: "Snack",
    },
    {
        id:8,
        title: "The Creamiest Creamy Chicken and Bacon Pasta",
        image: RecipeCard8,
        time: "30 Minutes",
        category: "Noodlesr",
    },
]
const Recipes=()=>{
    return(
        <div className=" w-full h-[1616px]">
            
        </div>
    )
}
export default Recipes