import recipe
import Text from "../ui/Text"
import Clock from "../../assets/recommendationrecipe/clock.svg"
import ForkKnife from "../../assets/recommendationrecipe/ForkKnife.svg"
import Ads from "../common/Ads"



const Recipes=()=>{
    return(
        <div className=" w-full px-14 mt-16">
            <div className="text-center mb-12">
                <Text variant="heading">Simple and tasty recipes</Text>
                <Text variant="muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam.
        </Text>
            </div>
            <div className="grid grid-cols-3 gap-12">
            {recipes.map((recipe, index) => (
  <div key={`${recipe.id}-${index}`}>
    <div className="rounded-3xl  shadow hover:shadow-lg transition-all px-4">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-3xl w-full h-[180px] object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-xl mb-4">{recipe.title}</h2>
        <div className="flex items-center text-gray-500 gap-4">
          <div className="flex items-center gap-1">
            <img src={Clock} alt="Time" className="w-4 h-4" />
            <span>{recipe.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={ForkKnife} alt="Category" className="w-4 h-4" />
            <span>{recipe.category}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Show Ads card after the 4th recipe */}
    {index === 3 && (
      <div className="">
        <Ads />
      </div>
    )}
  </div>
))}

            </div>
        </div>
       
    )
}
export default Recipes