import Button from "../ui/Button";
import Text from "../ui/Text";
import Post1 from "../../assets/instagrampost/post1.png"
import Post2 from "../../assets/instagrampost/post2.png"
import Post3 from "../../assets/instagrampost/post3.png"
import Post

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
      <div className="flex justify-between px-14 my-16">
        <div className=" w-[290px] h-[440px]">
          {/* post-top */}
          <div className="bg-green-600 w-full h-[41px]"></div>
          {/* post */}
          <div className="bg-yellow-400 w-full h-[290px]"></div>
          {/* post-bottom */}
          <div className="bg-blue-900 w-full h-[113px]"></div>
        </div>
        <div className=" w-[290px] h-[440px]">
          {/* post-top */}
          <div className="bg-green-600 w-full h-[41px]"></div>
          {/* post */}
          <div className="bg-yellow-400 w-full h-[290px]"></div>
          {/* post-bottom */}
          <div className="bg-blue-900 w-full h-[113px]"></div>
        </div>
        <div className=" w-[290px] h-[440px]">
          {/* post-top */}
          <div className="bg-green-600 w-full h-[41px]"></div>
          {/* post */}
          <div className="bg-yellow-400 w-full h-[290px]"></div>
          {/* post-bottom */}
          <div className="bg-blue-900 w-full h-[113px]"></div>
        </div>
        <div className=" w-[290px] h-[440px]">
          {/* post-top */}
          <div className="bg-green-600 w-full h-[41px]"></div>
          {/* post */}
          <div className="bg-yellow-400 w-full h-[290px]"></div>
          {/* post-bottom */}
          <div className="bg-blue-900 w-full h-[113px]"></div>
        </div>
      </div>
      {/* button */}
      <div>
        <Button></Button>
      </div>
    </div>
  );
}
