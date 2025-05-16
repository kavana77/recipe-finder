import Image from "../../assets/home/header.png";
import Button from "../ui/Button";
import List from "../../assets/home/list.svg";
import Text from "../ui/Text";
import Clock from "../../assets/home/clock.svg";
import ForkKnife from "../../assets/home/ForkKnife.svg";
import YouTube from "../../assets/home/youtube.svg";
import Profile from "../../assets/recipe/profile.svg";
import Badge from "../../assets/home/Badge.svg";

const FeaturedRecipe = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto px-4 md:px-14 py-10 relative">
      {/* Left Section */}
      <div className="bg-[#E7FAFE] w-full md:w-1/2 rounded-bl-3xl rounded-tl-3xl p-6 flex flex-col justify-between">
        <Button
          variant="secondary"
          className="flex items-center gap-2 mb-4 w-fit shadow-xl"
        >
          <img src={List} alt="List" />
          Hot Recipes
        </Button>

        <Text variant="heading" className="text-3xl md:text-6xl text-center md:text-left">
          Spicy delicious chicken wings
        </Text>

        <Text variant="muted" className="mt-4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <div className="flex flex-wrap gap-4 mt-6">
          <Button className="bg-gray-200 text-black flex gap-2 items-center">
            <img src={Clock} alt="Clock" />
            30 Minutes
          </Button>
          <Button className="bg-gray-200 text-black flex gap-2 items-center">
            <img src={ForkKnife} className="w-4 h-4" alt="Knife & Fork" />
            Chicken
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <div className="flex gap-4 items-center">
            <img src={Profile} alt="Profile" />
            <div>
              <Text variant="muted" className="text-black font-bold">
                John Smith
              </Text>
              <Text variant="muted">15 March 2022</Text>
            </div>
          </div>
          <Button className="flex gap-2 items-center">
            View Recipe
            <img src={YouTube} alt="YouTube" />
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative hidden md:flex">
        <img
          src={Image}
          alt="Dish"
          className="w-full h-full object-cover rounded-br-3xl"
        />
        <img
          src={Badge}
          alt="Badge"
          className="hidden md:block absolute top-4 right-6"
        />
      </div>
    </div>
  );
};

export default FeaturedRecipe;
