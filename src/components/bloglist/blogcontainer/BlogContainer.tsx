import Ads from "@/components/common/Ads";
import BlogList from "./BlogList";
import TastyRecipe from "./TastyRecipe";

const BlogContainer=()=> {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 px-4 sm:px-8 lg:px-14">
      {/* Left Side */}
      <div className="w-full lg:w-2/3">
        <BlogList />
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <TastyRecipe />
        <Ads />
      </div>
    </div>
  );
}
export default BlogContainer