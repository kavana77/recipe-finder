import Text from "@/components/ui/Text";
import useTastyRecipes from "@/hooks/useTastyRecipe";
const TastyRecipe: React.FC = () => {
  const {filteredTastyCard, error} = useTastyRecipes()
  return (
    <div className="w-full max-w-sm mx-auto">
      <Text variant="heading">Tasty Recipes</Text>
      <div className="mt-4">
        {error && <Text className="text-red-500 text-sm">{error}</Text>}
        {filteredTastyCard.map((card) => (
          <div key={card.id} className="flex gap-4 my-4">
            <img
              src={card.image}
              className="w-16 h-16 object-cover rounded-2xl"
              alt={card.title}
            />
            <div className="flex flex-col justify-center">
              <Text className="text-sm font-semibold">{card.title}</Text>
              <Text variant="muted" className="text-xs">
                {card.author}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TastyRecipe;
