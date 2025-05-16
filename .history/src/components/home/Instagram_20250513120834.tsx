import Button from "../ui/Button";
import Text from "../ui/Text";
import Post1 from "../../assets/instagrampost/post1.png"
import Post2 from "../../assets/instagrampost/post2.png"
import Post3 from "../../assets/instagrampost/post3.png"
import Post4 from "../../assets/instagrampost/post4.png"
import Profile from "../../assets/instagrampost/Oval.svg"
import Verify from "../../assets/instagrampost/verified.svg"
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
          <div className=" w-full h-[41px] flex items-center">
          <img src={Profile} className="w-8 h-8"/>
          <div className="ml-3">
            <p className="text-sm font-semibold text-black">Foodieland.</p>
            <p className="text-xs text-gray-500">Tokyo, Japan</p>
          </div>
          <img src={Verify} className="pb-5"/>
          </div>
          {/* post */}
          <div className=" w-full h-[290px]">
            <img src={Post1}/>
          </div>
          {/* post-bottom */}
          <div className=" w-full h-[113px]"></div>
        </div>
        <div className=" w-[290px] h-[440px] bg-white">
          {/* post-top */}
          <div className=" w-full h-[41px] flex items-center">
          <img src={Profile} className="w-8 h-8"/>
          <div className="ml-3">
            <p className="text-sm font-semibold text-black">Foodieland.</p>
            <p className="text-xs text-gray-500">Tokyo, Japan</p>
          </div>
          </div>
          {/* post */}
          <div className=" w-full h-[290px] bg-white">
          <img src={Post2}/>
          </div>
          {/* post-bottom */}
          <div className=" w-full h-[113px]"></div>
        </div>
        <div className=" w-[290px] h-[440px] bg-white">
          {/* post-top */}
          <div className=" w-full h-[41px] flex items-center">
            <img src={Profile} className="w-8 h-8"/>
            <div className="ml-3">
            <p className="text-sm font-semibold text-black">Foodieland.</p>
            <p className="text-xs text-gray-500">Tokyo, Japan</p>
          </div>
          </div>
          {/* post */}
          <div className=" w-full h-[290px]">
          <img src={Post3}/>
          </div>
          {/* post-bottom */}
          <div className=" w-full h-[113px]"></div>
        </div>
        <div className=" w-[290px] h-[440px] bg-white">
          {/* post-top */}
          <div className=" w-full h-[41px] flex items-center">
          <img src={Profile} className="w-8 h-8"/>
          <div className="ml-3">
            <p className="text-sm font-semibold text-black">Foodieland.</p>
            <p className="text-xs text-gray-500">Tokyo, Japan</p>
          </div>
          </div>
          {/* post */}
          <div className=" w-full h-[290px]">
          <img src={Post4}/>
          </div>
          {/* post-bottom */}
          <div className=" w-full h-[113px]"></div>
        </div>
      </div>
      {/* button */}
      <div>
        <Button></Button>
      </div>
    </div>
  );
}
