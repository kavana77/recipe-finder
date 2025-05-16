import Button from "../ui/Button";
import Text from "../ui/Text";
import Post1 from "../../assets/instagrampost/post1.png";
import Post2 from "../../assets/instagrampost/post2.png";
import Post3 from "../../assets/instagrampost/post3.png";
import Post4 from "../../assets/instagrampost/post4.png";
import Profile from "../../assets/instagrampost/Oval.svg";
import Verify from "../../assets/instagrampost/verified.svg";
export default function Instagram() {
  return (
    <div className="w-full h-[964px] bg-gradient-to-b from-[#fafafa] to-[#E7F9FD]">
      {/* heading */}
      <div className="text-center pt-20 ">
        <Text variant="heading">Check out @foodieland on Instagram</Text>
        <Text variant="muted">
          Lorem ipsum dolar sit amet, consectetuipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolare magna aliqut enim ad minim
        </Text>
      </div>
      {/* post */}
      <div className="flex justify-between px-14 my-16 ">
        <div className=" w-[290px] h-[440px] bg-white">
          {/* post-top */}
          <div className=" w-full h-[41px] flex items-center px-2">
            <img src={Profile} className="w-8 h-8" />
            <div className="ml-3">
              <p className="text-sm font-semibold text-black">Foodieland.</p>
              <p className="text-xs text-gray-500">Tokyo, Japan</p>
            </div>
            <img src={Verify} className="pb-4 ml-1" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600 ml-28"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </div>
          {/* post */}
          <div className=" w-full h-[290px]">
            <img src={Post1} />
          </div>
          {/* post-bottom */}
          <div className=" w-full h-[113px] px-4 py-2">
             {/* Action Icons */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-4">
          {/* Like */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {/* Comment */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {/* Share */}
          <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6 text-gray-800"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M22 2L11 13M22 2L15 22L11 13L2 9l20-7z"
  />
</svg>
        </div>
        <div className="flex justify-center space-x-1 mb-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
      </div>
        {/* Bookmark */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 5v14l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
        </svg>
      </div>
      {/* Likes */}
      <p className="text-sm text-black mb-1">
        Liked by <span className="font-semibold">craig_love</span> and{" "}
        <span className="font-semibold">44,686</span>
      </p>
             {/* Caption */}
      <p className="text-xs text-black mb-1">
        <span className="font-semibold">Foodieland. </span>
        Steak never be wrong, it’s suitable for you who want romantic dinner
      </p>
      <p className="text-xs text-gray-500">September 19</p>
          </div>
        </div>
        <div className=" w-[290px] h-[440px] bg-white">
          {/* post-top */}
          <div className=" w-full h-[41px] flex items-center px-2">
            <img src={Profile} className="w-8 h-8" />
            <div className="ml-3">
              <p className="text-sm font-semibold text-black">Foodieland.</p>
              <p className="text-xs text-gray-500">Tokyo, Japan</p>
            </div>
            <img src={Verify} className="pb-4 ml-1" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600 ml-28"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </div>
          {/* post */}
          <div className=" w-full h-[290px] bg-white">
            <img src={Post2} />
          </div>
          {/* post-bottom */}
          <div className=" w-full h-[113px] px-4 py-2">
             {/* Action Icons */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-4">
          {/* Like */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {/* Comment */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {/* Share */}
          <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6 text-gray-800"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M22 2L11 13M22 2L15 22L11 13L2 9l20-7z"
  />
</svg>
        </div>
        <div className="flex justify-center space-x-1 mb-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
      </div>
        {/* Bookmark */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 5v14l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
        </svg>
      </div>
      {/* Likes */}
      <p className="text-sm text-black mb-1">
        Liked by <span className="font-semibold">craig_love</span> and{" "}
        <span className="font-semibold">44,686</span>
      </p>
             {/* Caption */}
      <p className="text-xs text-black mb-1">
        <span className="font-semibold">Foodieland. </span>
        Steak never be wrong, it’s suitable for you who want romantic dinner
      </p>
      <p className="text-xs text-gray-500">September 19</p>
          </div>
        </div>
        <div className=" w-[290px] h-[440px] bg-white">
          {/* post-top */}
          <div className=" w-full h-[41px] flex items-center px-2">
            <img src={Profile} className="w-8 h-8" />
            <div className="ml-3">
              <p className="text-sm font-semibold text-black">Foodieland.</p>
              <p className="text-xs text-gray-500">Tokyo, Japan</p>
            </div>
            <img src={Verify} className="pb-4 ml-1" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600 ml-28"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </div>
          {/* post */}
          <div className=" w-full h-[290px]">
            <img src={Post3} />
          </div>
          {/* post-bottom */}
          <div className=" w-full h-[113px] px-4 py-2">
             {/* Action Icons */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-4">
          {/* Like */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {/* Comment */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {/* Share */}
          <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6 text-gray-800"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M22 2L11 13M22 2L15 22L11 13L2 9l20-7z"
  />
</svg>
        </div>
        <div className="flex justify-center space-x-1 mb-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
      </div>
        {/* Bookmark */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 5v14l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
        </svg>
      </div>
      {/* Likes */}
      <p className="text-sm text-black mb-1">
        Liked by <span className="font-semibold">craig_love</span> and{" "}
        <span className="font-semibold">44,686</span>
      </p>
             {/* Caption */}
      <p className="text-xs text-black mb-1">
        <span className="font-semibold">Foodieland. </span>
        Steak never be wrong, it’s suitable for you who want romantic dinner
      </p>
      <p className="text-xs text-gray-500">September 19</p>
          </div>
        </div>
        <div className=" w-[290px] h-[440px] bg-white">
          {/* post-top */}
          <div className=" w-full h-[41px] flex items-center px-2">
            <img src={Profile} className="w-8 h-8" />
            <div className="ml-3">
              <p className="text-sm font-semibold text-black">Foodieland.</p>
              <p className="text-xs text-gray-500">Tokyo, Japan</p>
            </div>
            <img src={Verify} className="pb-4 ml-1" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600 ml-28"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </div>
          {/* post */}
          <div className=" w-full h-[290px]">
            <img src={Post4} />
          </div>
          {/* post-bottom */}
           <div className=" w-full h-[113px] px-4 py-2">
             {/* Action Icons */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-4">
          {/* Like */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {/* Comment */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {/* Share */}
          <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6 text-gray-800"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M22 2L11 13M22 2L15 22L11 13L2 9l20-7z"
  />
</svg>
        </div>
        <div className="flex justify-center space-x-1 mb-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
      </div>
        {/* Bookmark */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 5v14l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
        </svg>
      </div>
      {/* Likes */}
      <p className="text-sm text-black mb-1">
        Liked by <span className="font-semibold">craig_love</span> and{" "}
        <span className="font-semibold">44,686</span>
      </p>
             {/* Caption */}
      <p className="text-xs text-black mb-1">
        <span className="font-semibold">Foodieland. </span>
        Steak never be wrong, it’s suitable for you who want romantic dinner
      </p>
      <p className="text-xs text-gray-500">September 19</p>
          </div>
        </div>
      </div>
      {/* button */}
      <div >
        <a href="https://www.instagram.com">
        <Button> visit Our Instagram
        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              x="0px"
              y="0px"
              width="25"
              viewBox="0 0 24 24"
            >
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
            </svg>
        </Button>
        </a>
        
      </div>
    </div>
  );
}
