import Text from "@/components/ui/Text";
import useSearchStore from "@/store/searchStore";
import type { ITastyCards } from "@/types/data";
// import { tastyCard } from "@/utils/constant";
import { fetchRecipes } from "@/services/api";
import { useEffect, useState } from "react";
const TastyRecipe: React.FC = () => {
  const [recipes, setRecipes] = useState<ITastyCards[]>([])
  const [error, setError] = useState<string | null>(null)

  const searchQuery = useSearchStore((state)=>state.searchQuery.toLowerCase())
  const filteredTastyCard = recipes.filter((card)=> card.title.toLowerCase().includes(searchQuery)) 
  useEffect(()=>{
    const loadRecipes = async () => {
      try{
        const popularRecipes = await fetchRecipes(searchQuery)
        setRecipes(popularRecipes)
      }catch (err){
        console.log(err)
        setError("Failed to load movies..")
      }
    }
    loadRecipes()
  },[searchQuery])
  return (
    <div className="w-full max-w-sm mx-auto">
      <Text variant="heading">Tasty Recipes</Text>
      <div className="mt-4">
      {error && <Text className="text-red-500 text-sm">{error}</Text>}
        {filteredTastyCard.map((card) => (
          <div key={card.id} className="flex gap-4 my-4">
            <img src={card.image} className="w-16 h-16 object-cover rounded-2xl" alt={card.title} />
            <div className="flex flex-col justify-center">
              <Text className="text-sm font-semibold">{card.title}</Text>
              <Text variant="muted" className="text-xs">{card.author}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TastyRecipe;
