import Text from "@/components/ui/Text"
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
const Ingredients=()=>{
    return(
        <div className="w-[840px] h-[1061px]">
            <Text variant="heading">Ingredients</Text>
            {/* Dish */}
            <div>
                <Text>For main dish</Text>
            </div>
            {/* Souce */}
            <div>
                <Text>For the souce</Text>
            </div>
        </div>
    )
}
export default Ingredients