import Text from "../ui/Text";
import { Clock, ForkKnife } from "@/assets/icons";
import { moreRecipes } from "@/utils/constant";
import Card from "../ui/Card";
import useFavourite from "@/hooks/useFavourite";

const MoreRecipe = () => {
  const {toggleFavourite, isFavourite}= useFavourite()
 
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 my-16">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 mb-10">
        <Text variant="heading" className="text-xl md:text-2xl lg:text-3xl">
          Try this delicious recipe to make your day
        </Text>
        <Text variant="muted" className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {moreRecipes.map((recipe, index) => {
         const liked = isFavourite(recipe.id)
        return(
          <Card
            key={`${recipe.id}-${index}`}
            actions={
              <button
                onClick={()=> toggleFavourite(recipe)}
                className={`absolute top-4 right-6 bg-gray-300 opacity-80 rounded-full hover:scale-120 cursor-pointer
                  ${liked ? "text-red-500" : "text-gray-400"}`}
              >
               {liked ? "❤️" : "🤍"}
              </button>
            }
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-t-3xl w-full h-[180px] object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-base mb-2">{recipe.title}</h2>
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
          </Card>
        )})}
      </div>
    </div>
  );
};

export default MoreRecipe;
