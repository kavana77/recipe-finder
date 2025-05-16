import Button from "../ui/Button";
import Text from "../ui/Text";
import Salad from "../../assets/subscribecard/salad-vegetables-.png";
import Potato from "../../assets/subscribecard/Photo-plate.png";
import Rucola from "../../assets/subscribecard/rucola-png.png";

export default function SubscribeCard() {
  return (
    <div className="px-4 sm:px-10 md:px-14 overflow-hidden">
      <div className="bg-[#E7F9FD] w-full rounded-[2rem] relative flex flex-col items-center justify-center min-h-[400px] py-10">
        {/* Decorative images - hidden on small screens */}
        <img
          src={Salad}
          className="absolute bottom-0 left-0 hidden md:block max-w-[180px]"
        />
        <img
          src={Potato}
          className="absolute bottom-0 right-0 hidden md:block "
        />
        <img
          src={Rucola}
          className="absolute right-[15%] bottom-[110px] hidden md:block max-w-[100px]"
        />

        <div className="max-w-[650px] w-full flex flex-col items-center text-center px-4">
          <Text variant="heading">Deliciousness to your inbox</Text>
          <Text className="mt-6 text-gray-700 leading-6 max-w-[500px]">
            Lorem ipsum dolar sit amet, consectetuipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolare magna aliqut enim ad minim
          </Text>

          <div className="w-full mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] h-[48px] px-4 rounded-xl border border-gray-300 focus:outline-none"
            />
            <Button className="w-full sm:w-auto h-[48px] px-6">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
