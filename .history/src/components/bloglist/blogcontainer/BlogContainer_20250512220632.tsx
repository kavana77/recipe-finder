import Ads from "@/components/common/Ads";
import BlogList from "./BlogList";
import TastyRecipe from "./TastyRecipe";

export default function BlogContainer(){
    return(
        <div className="flex flex-row justify-between">
            {/* Left Side */}
            <div className="w-full">
                <BlogList/>
            </div>
            {/* Right Side */}
            <div className="flex flex-col gap-4 w-full">
                <TastyRecipe/>
                <Ads/>
            </div>
            
        </div>
    )
}