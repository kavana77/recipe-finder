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
        image: Group1,
        time: "30 Minutes",
        category: "Healthy",
    },
    {
        id:2,
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        image: Group2,
        time: "30 Minutes",
        category: "Western",
    },
    {
        id:3,
        title: "Healthy Japanese Fried Rice with Asparagus",
        image: Group3 ,
        time: "30 Minutes",
        category: "Japanese",
    },
    {
        id:4,
        title: "Cauliflower Walnut Vegetarian Taco Meat",
        image: Group4,
        time: "30 Minutes",
        category: "Eastern",
    },
    {
        id:5,
        title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
        image: Group5,
        time: "30 Minutes",
        category: "Healthy",
    },
    {
        id:6,
        title: "Barbeque Spicy Sandwiches with Chips",
        image: Group6,
        time: "30 Minutes",
        category: "Snack",
    },
    {
        id:7,
        title: "Firecracker Vegan Lettuce Wraps - Spicy!",
        image: Group7 ,
        time: "30 Minutes",
        category: "Seafood",
    },
    {
        id:8,
        title: "Chicken Ramen Soup with Mushroom",
        image: Group8,
        time: "30 Minutes",
        category: "Japanese",
    },
]
const Recipes(){
    return(
        <div className=" w-full h-[1616px]">Recipes</div>
    )
}