import BlogContent from "./BlogContent";
import Share from "./Share";

export default function Blog() {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-6 lg:px-24 gap-8 mt-16">
      {/* Left Side */}
      <div className="w-full lg:w-[80%]">
        <BlogContent />
      </div>
      {/* Right Side */}
      <div className="w-full lg:w-[20%]">
        <Share />
      </div>
    </div>
  );
}
