import Button from "../ui/Button";
import Text from "../ui/Text";
import { Cabbage, Chef, Meat, Onion, Tomato } from "@/assets/icons";

const LearnMore = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center px-4 md:px-10 lg:px-20 py-12 bg-[#FAFAFA]">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <Text variant="heading" className="mb-6 text-2xl md:text-4xl">
          Everyone can be a chef in their own kitchen
        </Text>
        <Text
          variant="muted"
          className="mb-6 text-sm md:text-base text-gray-600"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>
        <Button>Learn More</Button>
      </div>

      {/* Right Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-b from-[#fafafa] to-[#E7F9FD] rounded-lg overflow-hidden">
        <img
          src={Chef}
          alt="Chef"
          className="absolute w-[300px] md:w-[400px] lg:w-[500px] bottom-0"
        />
        <img
          src={Tomato}
          alt="Tomato"
          className="absolute w-10 h-10 bottom-10 left-10 animate-bounce"
        />
        <img
          src={Cabbage}
          alt="Cabbage"
          className="absolute w-16 h-16 top-52 right-10 animate-bounce "
        />
        <img
          src={Meat}
          alt="Meat"
          className="absolute w-16 h-16 top-34 left-14 animate-bounce"
        />
        <img
          src={Onion}
          alt="Onion"
          className="absolute w-10 h-10 top-24 right-24 animate-bounce"
        />
      </div>
    </div>
  );
};
export default LearnMore;
