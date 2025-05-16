import Text from "@/components/ui/Text";
import Card1 from "../../../assets/bloglist/tastycard1.png"
import Card2 from "../../../assets/bloglist/tastycard2.png"
import Card3 from "../../../assets/bloglist/tastycard3.png"

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
const OtherRecipe:React.FC=()=>{
    return(
        <div className="w-[400px] h-[479px]">
            <Text variant="heading">Other Recipes</Text>
            <div>
            {tastyCard.map((card)=>(
                <div key={card.id} className="flex gap-4 my-4" >
                    <img src={card.image} className="rounded-3xl"/>
                    <div className="">
                        <Text>{card.title}</Text>
                        <Text variant="muted">{card.author}</Text>
                    </div>
                </div>
))}
            </div>

        </div>
    )
}
export default OtherRecipe;