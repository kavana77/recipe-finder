import Text from "../ui/Text";
import Group1 from "../../assets/recommendationrecipe/rgoup1.png"
import Group2 from "../../assets/recommendationrecipe/rgroup2.png"
import Group3 from "../../assets/recommendationrecipe/rgroup3.png"
import Group4 from "../../assets/recommendationrecipe/rgroup4.png"
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
        <div className="w-full h-[440px] flex flex-row">
            {recipes.map((recipe)=>(
                <div key={recipe.id} className="">
                    <img src={recipe.image}/>
                    <div>
                        <Text>{recipe.title}</Text>
                        <div className=" ">

                            <Text variant="muted"> 
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M25,28c-0.462,0-0.895-0.113-1.286-0.3 l-6.007,6.007C17.512,33.902,17.256,34,17,34s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l6.007-6.007 C22.113,25.895,22,25.462,22,25c0-1.304,0.837-2.403,2-2.816V8c0-0.553,0.447-1,1-1s1,0.447,1,1v14.184c1.163,0.413,2,1.512,2,2.816 C28,26.657,26.657,28,25,28z"></path>
</svg>
                                {recipe.time}</Text>
                            <Text variant="muted">
                            
                                {recipe.category}</Text>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default RecommendationRecipe;