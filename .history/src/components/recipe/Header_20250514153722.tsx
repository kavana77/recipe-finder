import Text from "../ui/Text";
import Image from "../../assets/recipe/header.png"
type INutritionInfo={
    label: string;
    value: string;
}
const nutritionData: INutritionInfo[]=[
    { label: "Calories", value: "219.9 kcal" },
    { label: "Total Fat", value: "10.7 g" },
    { label: "Protein", value: "7.9 g" },
    { label: "Carbohydrate", value: "22.3 g" },
    { label: "Cholesterol", value: "37.4 mg" },
]
const Header:React.FC=()=>{
    return(
        <div className="w-full h-[1003px] px-14">
            {/* Header */}
            <div>
            <Text variant="heading">Health Japanese Fried Rice</Text>
                <div></div>
            </div>
            <div className="w-full h-[500px] flex gap-12">
                {/* img */}
                    <img src={Image} className="w-[840px] h-full"/>
                {/* nutrition info */}
                <div className="w-[400px] h-full bg-[#E7FAFE] rounded-2xl" >
                    <Text variant="heading">Nutrition Information</Text>
                    <ul>
                        {nutritionData.map((item,idx)=>(
                            <li
                        ))}
                    </ul>
                </div>
            </div>
            <Text variant="muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum.
            </Text>
        </div>
    )
}
export default Header;