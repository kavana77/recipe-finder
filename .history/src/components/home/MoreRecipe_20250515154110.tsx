
import Text from "../ui/Text";
import Clock from "../../assets/recommendationrecipe/clock.svg"
import ForkKnife from "../../assets/recommendationrecipe/ForkKnife.svg"

type IMoreRecipe={
    id:number;
    title:string;
    image:string;
    time:string;
    category:string;
};

const MoreRecipe = () => {
    return (
      <div className="w-full px-14 my-16">
        <div className="flex gap-16 mb-12">
          <Text variant="heading">Try this delicious recipe to make your day</Text>
          <Text variant="muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
  
        <div className="grid grid-cols-4 gap-6">
          {moreRecipes.map((recipe, index) => (
            <div key={`${recipe.id}-${index}`} className="rounded-3xl shadow hover:shadow-lg transition-all">
              <img src={recipe.image} alt={recipe.title} className="rounded-t-3xl w-full h-[180px] object-cover" />
              <div className="p-4">
                <h2 className="font-semibold text-base mb-2">{recipe.title}</h2>
                <div className="flex items-center text-sm text-gray-500 gap-4">
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
          ))}
        </div>
      </div>
    );
  };
  
export default MoreRecipe