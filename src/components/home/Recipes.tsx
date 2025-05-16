import { recipes } from "@/utils/constant";
import Text from "../ui/Text";
import Clock from "../../assets/recommendationrecipe/clock.svg";
import ForkKnife from "../../assets/recommendationrecipe/forkKnife.svg";

const Recipes = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 mt-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <Text variant="heading" className="text-xl md:text-2xl lg:text-3xl">
          Simple and tasty recipes
        </Text>
        <Text variant="muted" className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <div key={`${recipe.id}-${index}`}>
            {/* Recipe Card */}
            <div className="rounded-3xl shadow hover:shadow-lg transition-shadow bg-white overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-[180px] object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg md:text-xl mb-2">
                  {recipe.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500 gap-4 flex-wrap">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
