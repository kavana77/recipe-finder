import Button from "../ui/Button";
import Text from "../ui/Text";
import Salad from "../../assets/subscribecard/salad-vegetables-.png";
import Potato from "../../assets/subscribecard/Photo-plate.png";
import Rucola from "../../assets/subscribecard/rucola-png.png";
export default function SubscribeCard() {
  return (
    <div className="px-14 overflow-hidden">
      <div className="bg-[#E7F9FD] w-full rounded-4xl h-[442px] relative flex flex-col items-center justify-center ">
        <img src={Salad} className="absolute bottom-0 left-0 rounded-bl-4xl" />

        <img src={Potato} className="absolute right-0 bottom-0 rounded-b-4xl" />
        <img src={Rucola} className="absolute right-60 bottom-26" />
        <div className="w-[650px] h-[282px] flex flex-col items-center justify-center">
          <Text variant="heading">Deliciousness to your inbox</Text>
          <Text className="w-[500px]  text-center mt-8 leading-6">
            Lorem ipsum dolar sit amet, consectetuipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolare magna aliqut enim ad minim
          </Text>
          <div className="bg-white rounded-2xl w-[450px] h-[50px] flex items-center justify-between px-4 mt-24">
            <input type="email" placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
