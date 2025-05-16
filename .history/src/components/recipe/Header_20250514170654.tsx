import Text from "../ui/Text";
import Image from "../../assets/recipe/header.png";
import { Printer, Share } from "lucide-react";
import Profile from "../../assets/recipe/profile.svg"
import { FaClock, FaDrumstickBite } from "react-icons/fa";
type INutritionInfo = {
  label: string;
  value: string;
};
const nutritionData: INutritionInfo[] = [
  { label: "Calories", value: "219.9 kcal" },
  { label: "Total Fat", value: "10.7 g" },
  { label: "Protein", value: "7.9 g" },
  { label: "Carbohydrate", value: "22.3 g" },
  { label: "Cholesterol", value: "37.4 mg" },
];
const Header: React.FC = () => {
  return (
    <div className=" w-full h-[1003px] px-14 mt-12">
      <Text variant="heading">Health Japanese Fried Rice</Text>

      {/* Header */}
      <div className="flex gap-6 justify-between">

        {/* left info */}
        <div className="flex">
          <div className="flex gap-4 items-center">
            <img src={Profile}/>
            <div>
                <Text variant="muted" className="text-black font-bold">John Smith</Text>
                <Text variant="muted">15 March 2022</Text>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaClock />
            <div>
            <span className="font-medium">PREP TIME</span>
            <span>15 Minutes</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaClock />
            <div>
            <span className="font-medium">COOK TIME</span>
            <span>15 Minutes</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaClock />
            <span className="font-medium">PREP TIME</span>
            <span>15 Minutes</span>
            
          </div>
        </div>
        {/* Right action */}
        <div className=" flex">
          <div>
            <div className="bg-[#E7FAFE] rounded-full p-4 mr-12">
              <Printer />
            </div>
            <span>PRINT</span>
          </div>

          <div>
            <div className="bg-[#E7FAFE] rounded-full p-4 mr-12">
              <Share />
            </div>
            <span>SHARE</span>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] flex gap-12 my-14">
        {/* img */}
        <img src={Image} className="w-[840px] h-full" />
        {/* nutrition info */}
        <div className="w-[400px] h-full bg-[#E7FAFE] rounded-2xl p-8">
          <h1 className="text-xl font-semibold mb-4">Nutrition Information</h1>
          <ul className="divide-y divide-blue-100">
            {nutritionData.map((item, idx) => (
              <li key={idx} className="flex justify-between py-2">
                <span className="text-gray-700">{item.label}</span>
                <span className="font-medium text-gray-900">{item.value}</span>
              </li>
            ))}
          </ul>
          <Text variant="muted" className="text-center mt-28">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
        </div>
      </div>
      <Text variant="muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </div>
  );
};
export default Header;
