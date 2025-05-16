import Button from "../ui/Button";
import Text from "../ui/Text";

export default function Header(){
    return(
        <div className="w-full h-[289px] flex flex-col items-center justify-center gap-6">
            <Text variant="heading">Blog & Article</Text>
            <Text variant="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
              <div className="relative flex items-center  mt-8 ">
                        <input type="email" placeholder="Enter your email" 
                        className=" w-[450px] h-[50px] p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" />
                        <Button className="absolute">Subscribe</Button>
                      </div>
        </div>
    )
}