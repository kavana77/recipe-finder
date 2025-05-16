import BreakFast from "../../assets/home/breakfast.svg"
import Vegan from "../../assets/home/vegan.svg"
import Meat from "../../assets/home/meat.svg"
import Dessert from "../../assets/home/dessert.svg"
import Lunch from "../../assets/home/lunch.svg"
import Chocolate from "../../assets/home/chocolate.svg"
import Text from "../ui/Text"
type CategoriesItem = {
    id: number;
    image: string;
    title: string;
}
const categoryItems: CategoriesItem[]=[
    { id: 1, image: BreakFast, title: "Breakfast" },
    { id: 2, image: Vegan, title: "Vegan" },
    { id: 3, image: Meat, title: "Meat" },
    { id: 4, image: Dessert, title: "Dessert" },
    { id: 5, image: Lunch, title: "Lunch" },
    { id: 6, image: Chocolate, title: "Chocolate" }
]
const Categories=()=>{
    return(
        <div className="w-full h-[342px]">
            <Text variant="head"></Text>
        </div>
        
    )
}
export default Categories