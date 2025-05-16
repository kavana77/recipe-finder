import Text from "@/components/ui/Text";
import { tastyCard } from "@/utils/constant";

const OtherRecipe: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0">
      <Text variant="heading">Other Recipes</Text>
      <div>
        {tastyCard.map((card) => (
          <div key={card.id} className="flex gap-4 my-4">
            <img src={card.image} className="w-20 h-20 object-cover rounded-2xl" />
            <div className="flex flex-col justify-center">
              <Text>{card.title}</Text>
              <Text variant="muted">{card.author}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherRecipe;
