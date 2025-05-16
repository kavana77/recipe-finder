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
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[640px] px-6 md:px-14 py-10 relative">
      {/* Left Section */}
      <div className="bg-[#E7FAFE] w-full md:w-1/2 h-full rounded-t-3xl md:rounded-tl-4xl md:rounded-bl-4xl p-6 flex flex-col justify-center">
        <Button
          variant="secondary"
          className="flex items-center gap-2 shadow-xl w-fit mb-4"
        >
          <img src={List} alt="List" />
          Hot Recipes
        </Button>

        <Text variant="heading" className="text-3xl md:text-6xl text-center md:text-left mb-4">
          Spicy delicious chicken wings
        </Text>

        <Text variant="muted" className="text-center md:text-left mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button className="bg-gray-200 text-black flex gap-2">
            <img src={Clock} alt="Clock" />
            30 Minutes
          </Button>
          <Button className="bg-gray-200 text-black flex gap-2">
            <img src={ForkKnife} className="w-4 h-4" alt="Category" />
            Chicken
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
          <div className="flex gap-4 items-center">
            <img src={Profile} alt="Author" />
            <div>
              <Text variant="muted" className="text-black font-bold">
                John Smith
              </Text>
              <Text variant="muted">15 March 2022</Text>
            </div>
          </div>

          <Button className="flex gap-2">
            View Recipe
            <img src={YouTube} alt="YouTube" />
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 relative">
        <img
          src={Image}
          className="w-full h-full object-cover rounded-b-3xl md:rounded-tr-4xl md:rounded-br-4xl"
          alt="Featured Dish"
        />
        <img
          src={Badge}
          className="absolute top-4 right-4 w-16 md:w-auto"
          alt="Badge"
        />
      </div>
    </div>
  );
};

export default FeaturedRecipe;
