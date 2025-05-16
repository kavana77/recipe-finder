import BlogContent from "./BlogContent";
import Share from "./Share";

export default function Blog(){
    return(
        <div className="flex flex-row justify-between px-20">
            {/* Left Side */}
            <div className="w-[80%]">
                 <BlogContent/>
            </div>
            {/* Right Side */}
            <div className="w-[20%]">
                <Share/>
            </div>
           
        </div>
    )
}