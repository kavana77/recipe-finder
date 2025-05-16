import Text from "@/components/ui/Text"
import { useState } from "react";
type Ingredient = {
    id: number;
    name: string;
    checked: boolean;
  };
  
  const initialIngredients: Ingredient[] = [
    { id: 1, name: "Lorem ipsum dolor sit amet", checked: true },
    { id: 2, name: "Lorem ipsum dolor sit amet", checked: false },
    { id: 3, name: "Lorem ipsum dolor sit amet", checked: false },
    { id: 4, name: "Lorem ipsum dolor sit amet", checked: false },
    { id: 5, name: "Lorem ipsum dolor sit amet", checked: false },
  ];
const Ingredients:React.FC=()=>{
    const [ingredients, setIngredients] = useState(initialIngredients);

    const toggleChecked = (id: number) => {
      const updated = ingredients.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setIngredients(updated);
    };
    return(
        <div className="w-[840px] h-[1061px]">
            <Text variant="heading">Ingredients</Text>
            {/* Dish */}
            <div className="my">
                <Text>For main dish</Text>
                <ul>
                    {ingredients.map((item)=>(
                          <li
                          key={item.id}
                          className="flex items-center gap-2 border-b border-gray-200 py-4"
                        >
                          <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => toggleChecked(item.id)}
                            className="form-checkbox w-5 h-5 rounded-4xl accent-black"
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
            {/* Souce */}
            <div>
                <Text>For the souce</Text>
            </div>
        </div>
    )
}
export default Ingredients