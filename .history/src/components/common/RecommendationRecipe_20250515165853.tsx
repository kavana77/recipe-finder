import Text from "../ui/Text";
import Clock from "../../assets/recommendationrecipe/clock.svg"
import ForkKnife from "../../assets/recommendationrecipe/ForkKnife.svg"
import r

const RecommendationRecipe:React.FC=()=>{
    return(
        <div className="w-full h-[440px] px-14 py-12">
            <Text variant="heading" className="text-center py-8 mb-4">Check out the delicious recipe</Text>
        <div className="flex flex-row justify-between">
            {rrecipes.map((recipe)=>(
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