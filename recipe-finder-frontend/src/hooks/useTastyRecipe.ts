import { useEffect, useState } from "react";
import { fetchRecipes } from "@/utils/http";
import useSearchStore from "@/store/searchStore";
import type { ITastyCards } from "@/types/data";

const useTastyRecipes = () => {
  const [recipes, setRecipes] = useState<ITastyCards[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const searchQuery = useSearchStore((state) => state.searchQuery.toLowerCase());

  const filteredTastyCard = recipes.filter((card) =>
    card.title.toLowerCase().includes(searchQuery)
  );

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const popularRecipes = await fetchRecipes(searchQuery);
        setRecipes(popularRecipes);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load recipes...");
      }
    };

    loadRecipes();
  }, [searchQuery]);

  return { filteredTastyCard, error };
};

export default useTastyRecipes;
