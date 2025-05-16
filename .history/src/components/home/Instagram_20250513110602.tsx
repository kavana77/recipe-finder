import Button from "../ui/Button";
import Text from "../ui/Text";

export default function Instagram(){
    return(
        <div className="w-full h-[964px] bg-gradient-to-b from-[#fafafa] to-[#E7F9FD]">
            {/* heading */}
            <div className="text-center">
                <Text variant="heading">Check out @foodieland on Instagram</Text>
                <Text variant="muted">Lorem ipsum dolar sit amet, consectetuipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolare magna aliqut enim ad minim</Text>
            </div>
            {/* post */}
            <div className="">
                <div className="bg-pink-600 w-[290px] h-[445px]"></div>
                <div className="bg-pink-600"></div>
                <div className="bg-pink-600"></div>
                <div className="bg-pink-600"></div>
            </div>
            {/* button */}
            <div>
                <Button></Button>
            </div>
        </div>
    )
}