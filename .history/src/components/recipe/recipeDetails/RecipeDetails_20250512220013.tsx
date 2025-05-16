import Ads from "../../common/Ads";
import Ingredients from "./Ingredients";
import OtherRecipe from "./OtherRecipe";
import Souce from "./Souce";

export default function RecipeDetails() {
  return (
    <div className="flex flex-row justify-between gap-4">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full">
        <Ingredients />
        <OtherRecipe />
      </div>
      {/* Right Side */}
      <div className="flex flex-col gap-4 w-full ">
        <Souce />
        <Ads />
      </div>
    </div>
  );
}