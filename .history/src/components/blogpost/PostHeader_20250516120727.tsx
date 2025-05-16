import Text from "../ui/Text";
import Profile from "../../assets/blogpost/profile.svg";

const PostHeader = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-0 mt-16">
      {/* Heading */}
      <Text variant="heading" className="text-center">
        Full Guide to Becoming a Professional Chef
      </Text>

      {/* Author + Date */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 py-6">
        <div className="flex items-center gap-3">
          <img src={Profile} alt="Author" className="w-8 h-8" />
          <p className="text-sm font-semibold">John Smith</p>
        </div>
        <Text variant="muted" className="text-sm">
          15 March 2022
        </Text>
      </div>

      {/* Description */}
      <Text
        variant="muted"
        className="text-center text-sm sm:text-base px-2 sm:px-0 leading-relaxed"
      >
        Lorem ipsum dolor sit, consectetur adipiscing elit. Curabitur ac ultrices
        odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a
        faucibus. In feugiat vestibulum velit vel pulvinar.
      </Text>
    </div>
  );
};

export default PostHeader;
