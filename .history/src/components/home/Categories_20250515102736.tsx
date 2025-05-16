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
    gradient: string;
    shadow: string;
}
const categoryItems: CategoriesItem[]=[
    { id: 1, image: BreakFast, title: "Breakfast", gradient:"from-white to-gray-100", shadow:"shadow-gray-300" },
    { id: 2, image: Vegan, title: "Vegan", gradient:"from-white to-green-100", shadow:"shadow-green-400" },
    { id: 3, image: Meat, title: "Meat", gradient:"from-white to-red-100", shadow:"" },
    { id: 4, image: Dessert, title: "Dessert", gradient:"from-white to-yellow-100", shadow:"" },
    { id: 5, image: Lunch, title: "Lunch", gradient:"from-white to-orange-100", shadow:"" },
    { id: 6, image: Chocolate, title: "Chocolate", gradient:"from-white to-rose-100", shadow:""}
]
const Categories=()=>{
    return(
        <div className="w-full h-[342px] px-14">
            <Text variant="heading">Categories</Text>
            <div className="flex justify-between">
                {categoryItems.map((item)=>(
                    <div key={item.id} className={`w-[180px] h-[200px] rounded-4xl bg-gradient-to-b ${item.gradient} `}>
                        <div className={` w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center ${item.shadow}`}>
                        <img src={item.image} className="w-10 h-10"/>
                        </div>
                         
                        <span className="font-bold">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
        
    )
}
export default Categories