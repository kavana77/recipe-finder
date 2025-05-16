import Text from "../ui/Text";

type IRecipe={
    id:number;
    title:string;
    image:string;
    time:string;
    category:string;
};
const recipes: IRecipe[] =[
    {
        id:1,
        title: "Mixed Tropical Fruit Salad with Superfood Boosts",
        image: "../../assets/recommendationrecipe/rgoup1.png",
        time: "30 Minutes",
        category: "Healthy",
    },
    {
        id:2,
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        image: "../../assets/recommendationrecipe/rgroup2.png",
        time: "30 Minutes",
        category: "Western",
    },
    {
        id:3,
        title: "Healthy Japanese Fried Rice with Asparagus",
        image: "../../assets/recommendationrecipe/rgroup3.png",
        time: "30 Minutes",
        category: "Japanese",
    },
    {
        id:4,
        title: "Cauliflower Walnut Vegetarian Taco Meat",
        image: "../../assets/recommendationrecipe/rgroup4.png",
        time: "30 Minutes",
        category: "Eastern",
    },
]
const RecommendationRecipe:React.FC=()=>{
    return(
        <div className="w-full h-[440px]">
            {recipes.map((recipe)=>(
                <div key={recipe.id}>
                    <img src={recipe.image}/>
                    <div>
                        <Text>{recipe.title}</Text>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default RecommendationRecipe;