import Text from "@/components/ui/Text";
import { useState } from "react";
import { initialIngredients } from "@/utils/constant";

const Ingredients: React.FC = () => {
  const [ingredients, setIngredients] = useState(initialIngredients);

  const toggleChecked = (id: number) => {
    const updated = ingredients.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setIngredients(updated);
  };

  return (
    <div className="w-full max-w-[840px] mx-auto px-4 sm:px-8">
      <Text variant="heading">Ingredients</Text>

      {/* Dish */}
      <div className="my-8">
        <Text>For main dish</Text>
        <ul className="p-4 sm:p-8">
          {ingredients.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2 border-b border-gray-200 py-3"
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleChecked(item.id)}
                className="form-checkbox w-5 h-5 accent-black"
              />
              <span
                className={`${
                  item.checked ? "text-gray-300 line-through" : "text-gray-800"
                }`}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sauce */}
      <div>
        <Text>For the sauce</Text>
        <ul className="p-4 sm:p-8">
          {ingredients.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2 border-b border-gray-200 py-3"
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleChecked(item.id)}
                className="form-checkbox w-5 h-5 accent-black"
              />
              <span
                className={`${
                  item.checked ? "text-gray-300 line-through" : "text-gray-800"
                }`}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ingredients;
