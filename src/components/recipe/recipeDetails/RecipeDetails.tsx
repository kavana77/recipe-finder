import Ads from "../../common/Ads";
import Ingredients from "./Ingredients";
import OtherRecipe from "./OtherRecipe";

export default function RecipeDetails() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 px-4 sm:px-8 lg:px-14 py-6">
      {/* Left Side */}
      <div className="w-full lg:w-2/3">
        <Ingredients />
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <OtherRecipe />
        <Ads />
      </div>
    </div>
  );
}
