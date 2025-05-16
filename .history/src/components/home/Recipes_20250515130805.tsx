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
        title: "Healthy Japanese Fried Rice with Asparagus",
        image: RecipeCard3,
        time: "30 Minutes",
        category: "Japanese",
    },
    {
        id:4,
        title: "Cauliflower Walnut Vegetarian Taco Meat",
        image: RecipeCard4,
        time: "30 Minutes",
        category: "Eastern",
    },
    {
        id:5,
        title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
        image: RecipeCard5,
        time: "30 Minutes",
        category: "Healthy",
    },
    {
        id:6,
        title: "Barbeque Spicy Sandwiches with Chips",
        image: RecipeCard6,
        time: "30 Minutes",
        category: "Snack",
    },
    {
        id:7,
        title: "",
        image: RecipeCard7 ,
        time: "30 Minutes",
        category: "Seafood",
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