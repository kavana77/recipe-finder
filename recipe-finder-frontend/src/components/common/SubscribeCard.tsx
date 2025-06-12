import Button from "../ui/Button";
import Text from "../ui/Text";
import { Salad, PhotoPlate, Rucola } from "@/assets/images";
import { useState } from "react";

const SubscribeCard = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setSubscribed(true);
    }
  };
  return (
    <div className="px-4 sm:px-10 md:px-14 overflow-hidden">
      <div className="bg-[#E7F9FD] w-full rounded-[2rem] relative flex flex-col items-center justify-center min-h-[400px] py-10">
        <img
          src={Salad}
          className="absolute bottom-0 left-0 hidden md:block "
        />
        <img
          src={PhotoPlate}
          className="absolute bottom-0 right-0 hidden md:block "
        />
        <img
          src={Rucola}
          className="absolute right-[18%] bottom-[110px] hidden md:block "
        />

        <div className="max-w-[650px] w-full flex flex-col items-center text-center px-4">
          <Text variant="heading">Deliciousness to your inbox</Text>
          <Text
            variant="muted"
            className="mt-6 text-gray-700 leading-6 max-w-[500px]"
          >
            Lorem ipsum dolar sit amet, consectetuipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolare magna aliqut enim ad minim
          </Text>
          {subscribed ? (
            <p className="mt-4 text-green-800">Subscribed successfully</p>
          ) : (
            <div className="w-full mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white mt-4 w-full sm:w-[300px] h-[48px] px-4 rounded-xl border border-gray-300 focus:outline-none"
              />
              <Button
                className="w-full sm:w-auto h-[48px] px-6 hover:shadow-lg translate-2 scale-100"
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SubscribeCard;
