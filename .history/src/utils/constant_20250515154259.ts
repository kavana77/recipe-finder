// home-recipe
import RecipeCard1 from "../../assets/home/recipe/recipe1.png"
import RecipeCard2 from "../../assets/home/recipe/recipe2.png"
import RecipeCard3 from "../../assets/home/recipe/recipe3.png"
import RecipeCard4 from "../../assets/home/recipe/recipe4.png"
import RecipeCard5 from "../../assets/home/recipe/recipe5.png"
import RecipeCard6 from "../../assets/home/recipe/recipe6.png"
import RecipeCard7 from "../../assets/home/recipe/recipe7.png"
import RecipeCard8 from "../../assets/home/recipe/recipe8.png"
import type { IRecipe } from "@/types/data"
// home-morerecipe
import Group5 from "../../assets/home/group5.png"
import Group6 from "../../assets/home/group6.png"
import Group7 from "../../assets/home/group7.png"
import Group8 from "../../assets/home/group8.png"
import Group1 from "../../assets/recommendationrecipe/rgoup1.png"
import Group2 from "../../assets/recommendationrecipe/rgroup2.png"
import Group3 from "../../assets/recommendationrecipe/rgroup3.png"
import Group4 from "../../assets/recommendationrecipe/rgroup4.png"
import type {I}
// home-recipe
export const recipes: IRecipe[] =[
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
// home-morerecipe
export const moreRecipes: IMoreRecipe[] =[
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