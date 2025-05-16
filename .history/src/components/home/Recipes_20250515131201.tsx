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
        title: "Mixed Tropical Fruit Salad with Superfood Boosts",
        image: RecipeCard1,
        time: "30 Minutes",
        category: "Healthy",
    },
    {
        id:2,
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        image: RecipeCard2,
        time: "30 Minutes",
        category: "Western",
    },
    {
        id:3,
        title: "Stra",
        image: RecipeCard3,
        time: "30 Minutes",
        category: "Japanese",
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
        <div className=" w-full h-[1616px]">Recipes</div>
    )
}
export default Recipes