import Text from "../ui/Text";
import Image from "../../assets/recipe/header.png";
import { Printer, Share } from "lucide-react";
import Profile from "../../assets/recipe/profile.svg";
import { FaClock, FaDrumstickBite } from "react-icons/fa";
import { nutritionData } from "@/utils/constant";

const Header: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-14 mt-12">
      <Text variant="heading" className="text-xl sm:text-2xl md:text-3xl">
        Health Japanese Fried Rice
      </Text>

      {/* Header Info */}
      <div className="flex flex-wrap justify-between items-start gap-4 mt-6">
        {/* Left Info - Hidden on Mobile */}
        <div className="hidden lg:flex gap-12 flex-wrap">
          <div className="flex gap-4 items-center">
            <img src={Profile} alt="Profile" />
            <div>
              <Text variant="muted" className="text-black font-bold">
                John Smith
              </Text>
              <Text variant="muted">15 March 2022</Text>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaClock />
            <div className="flex flex-col">
              <span className="font-medium text-sm">PREP TIME</span>
              <span className="text-sm">15 Minutes</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaClock />
            <div className="flex flex-col">
              <span className="font-medium text-sm">COOK TIME</span>
              <span className="text-sm">15 Minutes</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaDrumstickBite />
            <span className="font-medium text-sm">Chicken</span>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-[#E7FAFE] rounded-full p-3">
              <Printer />
            </div>
            <span className="text-sm mt-1">PRINT</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#E7FAFE] rounded-full p-3">
              <Share />
            </div>
            <span className="text-sm mt-1">SHARE</span>
          </div>
        </div>
      </div>

      {/* Image and Nutrition Info */}
      <div className="flex flex-col lg:flex-row gap-8 my-10">
        {/* Image */}
        <img
          src={Image}
          alt="Dish"
          className="w-full lg:w-[840px] max-h-[500px] object-cover rounded-lg"
        />

        {/* Nutrition Box */}
        <div className="w-full lg:w-[400px] bg-[#E7FAFE] rounded-2xl p-6">
          <h1 className="text-lg font-semibold mb-4">Nutrition Information</h1>
          <ul className="divide-y divide-blue-100">
            {nutritionData.map((item, idx) => (
              <li key={idx} className="flex justify-between py-2">
                <span className="text-gray-700 text-sm">{item.label}</span>
                <span className="font-medium text-gray-900 text-sm">{item.value}</span>
              </li>
            ))}
          </ul>
          <Text variant="muted" className="text-center mt-10 text-sm">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
      </div>

      {/* Description */}
      <Text variant="muted" className="text-sm sm:text-base leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </div>
  );
};

export default Header;
