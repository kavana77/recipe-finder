import Text from "@/components/ui/Text";
import { Clock, ForkKnife } from "@/assets/icons";
import useFavouritesStore from "@/store/favouritesStore";
import FavoriteInfo from "@/components/ui/FavoriteInfo";
import type { ReactNode } from "react";
import useFavourite from "@/hooks/useFavourite";

const Favourites = () => {
  const { favourites } = useFavouritesStore();
  const { toggleFavourite, isFavourite } = useFavourite();

  if (favourites.length === 0) {
    return (
      <FavoriteInfo mode="hint">
        Start adding recipes to your favorites and they will appear here.
      </FavoriteInfo>
    );
  }
  let warningBox: ReactNode;
  if (favourites.length >= 3) {
    warningBox = (
      <FavoriteInfo mode="warning">You're limit had reached..</FavoriteInfo>
    );
  }
  return (
    <div className="py-10 max-w-3xl mx-auto">
      <Text variant="heading" className="mb-6 text-center">
        My Favourite Recipes
      </Text>

      {warningBox}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4  gap-4">
        {favourites.map((recipe) => {
          const liked = isFavourite(recipe.id);

          return (
            <div
              key={recipe.id}
              className="relative w-full  bg-white rounded-3xl p-4 shadow-sm"
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

export default Favourites;
