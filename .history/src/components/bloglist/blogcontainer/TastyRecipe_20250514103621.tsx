import Card1 from "../../../assets/bloglist/tastycard1.png"
import Card2 from "../../../assets/bloglist/"
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
        image:
    },
    {
        id: 2,
        title: "Traditional Bolognaise Ragu",
        author: "Andreas Paula",
        image:
    },
    {
        id:3,
        title: "Pork and Chive Chinese Dumplings",
        author: "Andreas Paula",
        image:
    }
]
const TastyRecipe=()=>{
    return(
        <div className="w-[400px] h-[479px]">TastyRecipe</div>
    )
}
export default TastyRecipe;