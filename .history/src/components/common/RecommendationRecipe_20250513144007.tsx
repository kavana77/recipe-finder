import Text from "../ui/Text";
import Group1 from "../../assets/recommendationrecipe/rgoup1.png"
import Group2 from "../../assets/recommendationrecipe/rgroup2.png"
import Group3 from "../../assets/recommendationrecipe/rgroup3.png"
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
        image:  ,
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
        <div className="w-full h-[440px] flex flex-row">
            {recipes.map((recipe)=>(
                <div key={recipe.id} className="">
                    <img src={recipe.image}/>
                    <div>
                        <Text>{recipe.title}</Text>
                        <div className="flex justify-between">
                            <Text variant="muted">{recipe.time}</Text>
                            <Text variant="muted">{recipe.category}</Text>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default RecommendationRecipe;