import Text from "../ui/Text";
import Group1 from "../../assets/recommendationrecipe/rgoup1.png"
import Group2 from "../../assets/recommendationrecipe/rgroup2.png"
import Group3 from "../../assets/recommendationrecipe/rgroup3.png"
import Group4 from "../../assets/recommendationrecipe/rgroup4.png"
import Clock from "../../assets/recommendationrecipe/clock.svg"
import ForkKnife from "../../assets/recommendationrecipe/ForkKnife.svg"
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
const RecommendationRecipe:React.FC=()=>{
    return(
        <div className="w-full h-[440px] px-14 py-8">
        <div className="flex flex-row justify-between">
            {recipes.map((recipe)=>(
                <div key={recipe.id} className="w-[280px] h-[316px] ">
                   
                    <img src={recipe.image} className="rounded-4xl"/>
                    
                    
                    <div>
                        <div className="py-4">
                        <h2 className="font-semibold">{recipe.title}</h2>
                        </div>
                        <div className="flex mt-4">
                        <img src={Clock} />
                            <Text variant="muted" className="pr-10"> 
                        
                                {recipe.time}</Text>
                                <img src={ForkKnife}/>
                            <Text variant="muted">
                            
                                {recipe.category}</Text>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}
export default RecommendationRecipe;