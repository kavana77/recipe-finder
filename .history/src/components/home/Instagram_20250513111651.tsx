import Button from "../ui/Button";
import Text from "../ui/Text";

export default function Instagram(){
    return(
        <div className="w-full h-[964px] bg-gradient-to-b from-[#fafafa] to-[#E7F9FD]">
            {/* heading */}
            <div className="text-center pt-20 ">
                <Text variant="heading">Check out @foodieland on Instagram</Text>
                <Text variant="muted">Lorem ipsum dolar sit amet, consectetuipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolare magna aliqut enim ad minim</Text>
            </div>
            {/* post */}
            <div className="flex justify-between px-14 my-16">
                <div className="bg-pink-600 w-[290px] h-[440px]">
                    {/* post-top */}
                    <div></div>
                    {/* post */}
                    <div></div>
                    {/* post-bottom */}
                    <div></div>
                </div>
                <div className="bg-pink-600 w-[290px] h-[440px]"></div>
                <div className="bg-pink-600 w-[290px] h-[440px]"></div>
                <div className="bg-pink-600 w-[290px] h-[440px]"></div>
            </div>
            {/* button */}
            <div>
                <Button></Button>
            </div>
        </div>
    )
}