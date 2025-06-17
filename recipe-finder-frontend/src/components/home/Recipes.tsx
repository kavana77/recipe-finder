import { recipes } from "@/utils/constant";
import Text from "../ui/Text";
import { Clock, ForkKnife } from "@/assets/icons";
import useFavourite from "@/hooks/useFavourite";

const Recipes = () => {
 const  {toggleFavourite, isFavourite} = useFavourite()
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
        {recipes.map((recipe, index) => {
          const liked = isFavourite(recipe.id)
        return(
          <div key={`${recipe.id}-${index}`}>
            {/* Recipe Card */}
            <div className="relative rounded-3xl shadow hover:shadow-lg transition-shadow bg-white overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-[180px] object-cover"
              />
              <button
                onClick={()=>toggleFavourite(recipe)}
                className={`absolute top-6 right-6 bg-gray-300 opacity-80 rounded-full hover:scale-120 cursor-pointer 
                  ${ liked ? "text-red-500" : "text-gray-400"}`}
              >
                {liked ? "❤️" : "🤍"}
              </button>
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
        )})}
      </div>
    </div>
  );
};

export default Recipes;
