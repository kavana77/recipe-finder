import Card1 from "../../../assets/bloglist/tastycard1.png"
import Card2 from "../../../assets/bloglist/tastycard2.png"
import Card3 from "../../../assets/bloglist/tastycard3.png"
type ITastyCards={
    id: number;
    title: string;
    author: string;
    image: string;
};
const tastyCard: ITastyCards[]=[
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
const TastyRecipe=()=>{
    return(
        <div className="w-[400px] h-[479px]">
            {tas}
        </div>
    )
}
export default TastyRecipe;