import BreakFast from "../../assets/home/breakfast.svg"
import Vegan from "../../assets/home/vegan.svg"
import Meat from "../../assets/home/meat.svg"
import 
type CategoriesItem = {
    id: number;
    image: string;
    title: string;
}
const categoryItems: CategoriesItem[]=[
    { id: 1, image: , title: "Breakfast" }
    { id: 2, image: , title: "Vegan" }
    { id: 3, image: , title: "Meat" }
    { id: 4, image: , title: "Dessert" }
    { id: 5, image: , title: "Lunch" }
    { id: 6, image: , title: "Chocolate" }
]
const Categories=()=>{
    return(
        <div className="w-full h-[342px]">Categories</div>
    )
}
export default Categories