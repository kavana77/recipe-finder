import Button from "../ui";
import Text from "../ui/Text";
import Post1 from "../../assets/instagrampost/post1.png";
import Post2 from "../../assets/instagrampost/post2.png";
import Post3 from "../../assets/instagrampost/post3.png";
import Post4 from "../../assets/instagrampost/post4.png";
import Profile from "../../assets/instagrampost/Oval.svg";
import Verify from "../../assets/instagrampost/verified.svg";

const posts = [Post1, Post2, Post3, Post4];

export default function Instagram() {
  return (
    <div className="w-full bg-gradient-to-b from-[#fafafa] to-[#E7F9FD] py-20">
      {/* heading */}
      <div className="text-center px-4">
        <Text variant="heading" className="mb-8">
          Check out @foodieland on Instagram
        </Text>
        <Text variant="muted">
          Lorem ipsum dolar sit amet, consectetuipiscing elit, sed do eiusmod tempor incididunt ut labore et dolare magna aliqut enim ad minim
        </Text>
      </div>
      {/* post */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-14 mt-14">
        {posts.map((post, index) => (
          <div key={index} className="w-full max-w-[290px] mx-auto bg-white shadow rounded-lg">
            {/* post-top */}
            <div className="flex items-center p-2">
              <img src={Profile} className="w-8 h-8" />
              <div className="ml-3">
                <p className="text-sm font-semibold text-black">Foodieland.</p>
                <p className="text-xs text-gray-500">Tokyo, Japan</p>
              </div>
              <img src={Verify} className="ml-1" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600 ml-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            </div>
            {/* post */}
            <div>
              <img src={post} className="w-full h-[290px] object-cover" />
            </div>
            {/* post-bottom */}
            <div className="px-4 py-2">
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2L15 22L11 13L2 9l20-7z" />
                  </svg>
                </div>
                <div className="flex justify-center space-x-1">
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
                Liked by <span className="font-semibold">craig_love</span> and <span className="font-semibold">44,686</span>
              </p>
              {/* Caption */}
              <p className="text-xs text-black mb-1">
                <span className="font-semibold">Foodieland. </span>
                Steak never be wrong, it’s suitable for you who want romantic dinner
              </p>
              <p className="text-xs text-gray-500">September 19</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
