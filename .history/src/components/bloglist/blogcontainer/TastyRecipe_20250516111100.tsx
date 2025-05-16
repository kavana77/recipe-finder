import Text from "@/components/ui/Text";
import { tastyCard } from "@/utils/constant";

const TastyRecipe: React.FC = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <Text variant="heading">Tasty Recipes</Text>
      <div className="mt-4">
        {tastyCard.map((card) => (
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
