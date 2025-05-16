import Post1 from "../../";
import Post2 from "../../assets/instagrampost/Post2.svg";
import Post3 from "../../assets/instagrampost/Post3.svg";

import Profile from "../../assets/instagrampost/Oval.svg";
import Verify from "../../assets/instagrampost/Verify.svg";
import Dots from "../../assets/instagrampost/3dots.svg";
import Save from "../../assets/instagrampost/Save.svg";
import Like from "../../assets/instagrampost/Like.svg";
import Comment from "../../assets/instagrampost/Comment.svg";
import Share from "../../assets/instagrampost/Share.svg";
import Smile from "../../assets/instagrampost/Smile.svg";

const Instagram = () => {
  const posts = [
    { id: 1, title: "First post", image: Post1, likes: 24000 },
    { id: 2, title: "Second post", image: Post2, likes: 15400 },
    { id: 3, title: "Third post", image: Post3, likes: 32700 },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      {posts.map(({ id, title, image, likes }) => (
        <div
          key={id}
          className="post w-[470px] mb-5 border border-gray-300 rounded"
        >
          {/* Profile Section */}
          <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center space-x-2">
              <img src={Profile} alt="Profile" className="w-8 h-8" />
              <h1 className="text-sm font-semibold">Techwondoe</h1>
              <img src={Verify} alt="Verify" />
            </div>
            <img src={Dots} alt="Options" />
          </div>

          {/* Post Image */}
          <div className="w-full h-[587px]">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between px-4 py-2">
            <div className="flex space-x-4">
              <img src={Like} alt="Like" />
              <img src={Comment} alt="Comment" />
              <img src={Share} alt="Share" />
            </div>
            <img src={Save} alt="Save" />
          </div>

          {/* Likes Count */}
          <div className="px-4 font-semibold">{likes.toLocaleString()} likes</div>

          {/* Comment Input */}
          <div className="flex justify-between items-center border-t px-4 py-2">
            <div className="flex items-center space-x-2 w-full">
              <img src={Smile} alt="Emoji" />
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full outline-none"
              />
            </div>
            <button className="text-blue-400 font-semibold">Post</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instagram;
