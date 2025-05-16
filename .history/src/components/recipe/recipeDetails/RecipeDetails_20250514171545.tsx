import Ads from "../../common/Ads";
import Ingredients from "./Ingredients";
import OtherRecipe from "./OtherRecipe";

export default function RecipeDetails() {
  return (
    <div className="flex flex-row justify-between gap-4 px-1">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full">
        <Ingredients />
      </div>
      {/* Right Side */}
      <div className="flex flex-col gap-4 w-full ">
        <OtherRecipe />
        <Ads />
      </div>
    </div>
  );
}