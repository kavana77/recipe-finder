import Image from "../../assets/ads.svg";
import Star from "../../assets/star.svg";

const Ads=()=> {
  return (
    <div className="w-full max-w-[400px] h-auto bg-gradient-to-b from-[#357355] to-[#1D483B] px-4 py-6 rounded-lg mx-auto">
      <p
        className="text-white text-xl sm:text-2xl text-center mb-4"
        style={{ fontFamily: "Lobster, cursive" }}
      >
        Don't forget to eat healthy food
      </p>

      <div className="relative flex items-center justify-center w-full">
        <img src={Star} className="w-64 sm:w-72 md:w-[350px]" alt="Star" />
        <img
          src={Image}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 md:w-44"
          alt="Food Illustration"
        />
      </div>

      <p className="text-gray-300 text-center mt-6 text-sm sm:text-base">
        www.foodieland.com
      </p>
    </div>
  );
}
export default Ads
