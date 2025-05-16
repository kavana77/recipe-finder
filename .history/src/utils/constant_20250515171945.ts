// home-recipe
import RecipeCard1 from "../assets/home/recipe/recipe1.png"
import RecipeCard2 from "../assets/home/recipe/recipe2.png"
import RecipeCard3 from "../assets/home/recipe/recipe3.png"
import RecipeCard4 from "../assets/home/recipe/recipe4.png"
import RecipeCard5 from "../assets/home/recipe/recipe5.png"
import RecipeCard6 from "../assets/home/recipe/recipe6.png"
import RecipeCard7 from "../assets/home/recipe/recipe7.png"
import RecipeCard8 from "../assets/home/recipe/recipe8.png"
import type { IRecipe } from "@/types/data"
// home-morerecipe
import Group5 from "../assets/home/group5.png"
import Group6 from "../assets/home/group6.png"
import Group7 from "../assets/home/group7.png"
import Group8 from "../assets/home/group8.png"
import type { IMoreRecipe } from "@/types/data"

// bloglist-tastyrecipe
import Card1 from "../assets/bloglist/tastycard1.png"
import Card2 from "../assets/bloglist/tastycard2.png"
import Card3 from "../assets/bloglist/tastycard3.png"
import type { ITastyCards } from "@/types/data"
// common-recommendation
import Group1 from "../assets/recommendationrecipe/rgoup1.png"
import Group2 from "../assets/recommendationrecipe/rgroup2.png"
import Group3 from "../assets/recommendationrecipe/rgroup3.png"
import Group4 from "../assets/recommendationrecipe/rgroup4.png"
// home-categories
import BreakFast from "../assets/home/breakfast.svg"
import Vegan from "../assets/home/vegan.svg"
import Meat from "../assets/home/meat.svg"
import Dessert from "../assets/home/dessert.svg"
import Lunch from "../assets/home/lunch.svg"
import Chocolate from "../assets/home/chocolate.svg"
import type { ICategoriesItem } from "@/types/data"
// bloglist
import List1 from "../assets/bloglist/list1.png"
import List2 from "../assets/bloglist/list2.png"
import List3 from "../assets/bloglist/list3.png"
import List4 from "../assets/bloglist/list4.png"
import List5 from "../assets/bloglist/list5.png"
import List6 from "../assets/bloglist/list6.png"
import Profile1 from "../assets/bloglist/profile1.svg"
import Profile2 from "../assets/bloglist/profile2.svg"
import Profile3 from "../assets/bloglist/profile3.svg"
import Profile4 from "../assets/bloglist/profile4.svg"
import Profile5 from "../assets/bloglist/profile5.svg"
import Profile6 from "../assets/bloglist/profile6.svg"
import type { IBlogList } from "@/types/data"
// recipe-ingredient
import type { IIngredient } from "@/types/data"
// recipe-header
import type IN
// recipe-header
const nutritionData: INutritionInfo[] = [
  { label: "Calories", value: "219.9 kcal" },
  { label: "Total Fat", value: "10.7 g" },
  { label: "Protein", value: "7.9 g" },
  { label: "Carbohydrate", value: "22.3 g" },
  { label: "Cholesterol", value: "37.4 mg" },
];
// recipe-ingredient
export const initialIngredients: IIngredient[] = [
    { id: 1, name: "Lorem ipsum dolor sit amet", checked: true },
    { id: 2, name: "Lorem ipsum dolor sit amet", checked: false },
    { id: 3, name: "Lorem ipsum dolor sit amet", checked: false },
    { id: 4, name: "Lorem ipsum dolor sit amet", checked: false },
    { id: 5, name: "Lorem ipsum dolor sit amet", checked: false },
  ];
// bloglist
export const blogList : IBlogList[]=[
    {
        id: 1,
        title: "Crochet Projects for Noodle Lovers",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: Profile1 ,
        image:List1 ,
        author: "Wade Warren",
        date: "12 November 2021",
    },
    {
        id: 2,
        title: "10 Vegetarian Recipes To Eat This Month",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile:Profile2 ,
        image:List2 ,
        author: "Robert Fox",
        date: "12 November 2021"
    },
    {
        id: 3,
        title: "Full Guide to Becoming a Professional Chef",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: Profile3,
        image:List3 ,
        author: "Dianne Russell",
        date: "12 November 2021"
    },
    {
        id: 4,
        title: "Simple & Delicious Vegetarian Lasagna",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: Profile4,
        image:List4 ,
        author: "Lesile Alexander",
        date: "12 November 2021"
    },
    {
        id: 5,
        title: "Plantain and Pinto Stew with Aji Verde",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: Profile5 ,
        image:List5 ,
        author: "Courtney Henry",
        date: "12 November 2021"
    },
    {
        id: 6,
        title: "We're Hiring a Communications Assistant!",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: Profile6,
        image: List6,
        author: "Wade Warren",
        date: "12 November 2021"
    },

]
// home-categories
export const categoryItems: ICategoriesItem[]=[
    { id: 1, image: BreakFast, title: "Breakfast", gradient:"from-white to-gray-100", shadow:"shadow-gray-300" },
    { id: 2, image: Vegan, title: "Vegan", gradient:"from-white to-green-100", shadow:"shadow-green-800" },
    { id: 3, image: Meat, title: "Meat", gradient:"from-white to-red-100", shadow:"" },
    { id: 4, image: Dessert, title: "Dessert", gradient:"from-white to-yellow-100", shadow:"" },
    { id: 5, image: Lunch, title: "Lunch", gradient:"from-white to-orange-100", shadow:"" },
    { id: 6, image: Chocolate, title: "Chocolate", gradient:"from-white to-rose-100", shadow:""}
]
// common-recommendation
export const rrecipes: IRecipe[] =[
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
]
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
// recipe-otherRecipe
export const tastyCard: ITastyCards[]=[
    {
        id:1,
        title: "Chicken Meatballs with Cream Cheese",
        author: "Andreas Paula",
        image: Card1,
    },
    {
        id: 2,
        title: "Traditional Bolognaise Ragu",
        author: "Andreas Paula",
        image: Card2,
    },
    {
        id:3,
        title: "Pork and Chive Chinese Dumplings",
        author: "Andreas Paula",
        image: Card3
    }
]