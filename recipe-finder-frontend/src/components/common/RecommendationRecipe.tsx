import Text from "../ui/Text";
import { Clock, ForkKnife } from "@/assets/icons";
import useFavourite from "@/hooks/useFavourite";
import { recommendationRecipes } from "@/utils/constant";


const RecommendationRecipe: React.FC = () => {
 const {toggleFavourite, isFavourite} = useFavourite()

  return (
    <div className="w-full px-4 sm:px-10 md:px-14 py-12">
      <Text variant="heading" className="text-center py-6 mb-6">
        Check out the delicious recipe
      </Text>

      <div className="flex max-sm:flex-wrap justify-center md:justify-between gap-4">
        {recommendationRecipes.map((recipe) => {
          const liked = isFavourite(recipe.id);

          return (
            <div
              key={recipe.id}
              className="relative w-full sm:w-[48%] md:w-[30%] bg-white rounded-3xl p-4 shadow-sm"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded-3xl w-full h-[180px] object-cover"
              />

              <button
                onClick={() => toggleFavourite(recipe)}
                className={`absolute top-6 right-8 text-xl rounded-full transition-transform hover:scale-125 ${
                  liked ? "text-red-500" : "text-gray-400"
                }`}
              >
                {liked ? "❤️" : "🤍"}
              </button>

              <div className="pt-4">
                <h2 className="font-semibold text-lg">{recipe.title}</h2>

                <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <img src={Clock} alt="Clock" className="w-4 h-4" />
                    <Text variant="muted">{recipe.time}</Text>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={ForkKnife} alt="Category" className="w-4 h-4" />
                    <Text variant="muted">{recipe.category}</Text>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendationRecipe;
