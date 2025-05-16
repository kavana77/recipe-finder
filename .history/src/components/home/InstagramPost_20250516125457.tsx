
import Profile from "../../assets/instagrampost/Oval.svg";
import Verify from "../../assets/instagrampost/verified.svg";

const InstagramPost = ({ imageSrc, likes, caption, date }) => {
  return (
    <div className="w-[290px] h-[440px] bg-white">
      {/* Post top */}
      <div className="w-full h-[41px] flex items-center px-2">
        <img src={Profile} className="w-8 h-8" alt="profile" />
        <div className="ml-3">
          <p className="text-sm font-semibold text-black">Foodieland.</p>
          <p className="text-xs text-gray-500">Tokyo, Japan</p>
        </div>
        <img src={Verify} className="pb-4 ml-1" alt="verified" />
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

      {/* Post Image */}
      <div className="w-full h-[290px]">
        <img src={imageSrc} alt="post" />
      </div>

      {/* Post bottom */}
      <div className="w-full h-[113px] px-4 py-2">
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2L15 22L11 13L2 9l20-7z" />
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

        {/* Likes and Caption */}
        <p className="text-sm text-black mb-1">
          Liked by <span className="font-semibold">craig_love</span> and{" "}
          <span className="font-semibold">{likes}</span>
        </p>
        <p className="text-xs text-black mb-1">
          <span className="font-semibold">Foodieland. </span>
          {caption}
        </p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default InstagramPost;
