import Text from "@/components/ui/Text";
import tas
const TastyRecipe:React.FC=()=>{
    return(
        <div className="w-[400px] h-[479px]">
            <Text variant="heading">Tasty Recipes</Text>
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
export default TastyRecipe;